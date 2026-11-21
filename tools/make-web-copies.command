#!/usr/bin/swift

import AppKit
import CoreText
import ImageIO
import UniformTypeIdentifiers

enum ImageError: LocalizedError {
    case decode, encode

    var errorDescription: String? {
        switch self {
        case .decode: return "이미지를 열 수 없습니다."
        case .encode: return "JPEG 사본을 만들 수 없습니다."
        }
    }
}

func makeJPEG(from input: URL) throws -> Data {
    guard let source = CGImageSourceCreateWithURL(input as CFURL, nil),
          let photo = CGImageSourceCreateThumbnailAtIndex(source, 0, [
              kCGImageSourceCreateThumbnailFromImageAlways: true,
              kCGImageSourceCreateThumbnailWithTransform: true,
              kCGImageSourceThumbnailMaxPixelSize: 1600,
          ] as CFDictionary) else {
        throw ImageError.decode
    }

    let width = CGFloat(photo.width)
    let height = CGFloat(photo.height)
    guard let colorSpace = CGColorSpace(name: CGColorSpace.sRGB),
          let canvas = CGContext(data: nil, width: photo.width, height: photo.height,
              bitsPerComponent: 8, bytesPerRow: 0, space: colorSpace,
              bitmapInfo: CGImageAlphaInfo.noneSkipLast.rawValue) else {
        throw ImageError.encode
    }

    let bounds = CGRect(x: 0, y: 0, width: width, height: height)
    canvas.setFillColor(gray: 1, alpha: 1)
    canvas.fill(bounds)
    canvas.draw(photo, in: bounds)

    let shortSide = min(width, height)
    let fontSize = min(34, max(12, shortSide * 0.032), width / 6)
    let margin = min(22, shortSide * 0.025)
    let label = NSAttributedString(string: "@eoekzm", attributes: [
        NSAttributedString.Key(kCTFontAttributeName as String):
            CTFontCreateWithName("Helvetica-Bold" as CFString, fontSize, nil),
        NSAttributedString.Key(kCTForegroundColorAttributeName as String):
            CGColor(gray: 1, alpha: 0.85),
    ])
    let line = CTLineCreateWithAttributedString(label)
    let labelWidth = CGFloat(CTLineGetTypographicBounds(line, nil, nil, nil))
    canvas.setShadow(offset: CGSize(width: 0, height: -1), blur: 2,
                     color: CGColor(gray: 0, alpha: 0.85))
    canvas.textPosition = CGPoint(x: max(0, width - labelWidth - margin), y: margin)
    CTLineDraw(line, canvas)

    // A fresh bitmap preserves the pixels and leaves the source metadata behind.
    let data = NSMutableData()
    guard let image = canvas.makeImage(),
          let destination = CGImageDestinationCreateWithData(data, UTType.jpeg.identifier as CFString, 1, nil) else {
        throw ImageError.encode
    }
    CGImageDestinationAddImage(destination, image, [
        kCGImageDestinationLossyCompressionQuality: 0.85,
    ] as CFDictionary)
    guard CGImageDestinationFinalize(destination) else { throw ImageError.encode }
    return data as Data
}

func saveCopy(_ data: Data, named stem: String, in directory: URL) throws -> URL {
    var number = 1
    while true {
        let suffix = number == 1 ? "" : "-\(number)"
        let output = directory.appendingPathComponent("\(stem)-web\(suffix).jpg")
        do {
            try data.write(to: output, options: .withoutOverwriting)
            return output
        } catch let error as CocoaError where error.code == .fileWriteFileExists {
            number += 1
        }
    }
}

func chooseFilesAndOutput() -> ([URL], URL)? {
    let app = NSApplication.shared
    app.setActivationPolicy(.accessory)
    app.activate(ignoringOtherApps: true)

    let photos = NSOpenPanel()
    photos.title = "공개용 사본을 만들 사진 선택"
    photos.allowedContentTypes = [.image]
    photos.allowsMultipleSelection = true
    guard photos.runModal() == .OK else { return nil }

    let output = NSOpenPanel()
    output.title = "사본을 저장할 폴더 선택"
    output.canChooseFiles = false
    output.canChooseDirectories = true
    output.canCreateDirectories = true
    guard output.runModal() == .OK, let folder = output.url else { return nil }
    return (photos.urls, folder)
}

let rawArguments = CommandLine.arguments.dropFirst()
// Swift 5.4 can expose interpreter flags before the script arguments.
let arguments = Array(rawArguments.starts(with: ["-frontend", "-interpret"])
    ? rawArguments.drop(while: { $0 != "--" }).dropFirst()
    : rawArguments)
let interactive = arguments.isEmpty
let inputs: [URL]
let outputFolder: URL

if interactive {
    guard let (photos, folder) = chooseFilesAndOutput() else { exit(0) }
    (inputs, outputFolder) = (photos, folder)
} else {
    guard arguments.count >= 2 else {
        fputs("사용법: make-web-copies.command <저장 폴더> <사진> [사진 …]\n", stderr)
        exit(2)
    }
    inputs = arguments.dropFirst().map { URL(fileURLWithPath: $0) }
    outputFolder = URL(fileURLWithPath: arguments[0], isDirectory: true)
}

var failures: [String] = []
for input in inputs {
    autoreleasepool {
        do {
            let jpg = try makeJPEG(from: input)
            let copy = try saveCopy(jpg, named: input.deletingPathExtension().lastPathComponent, in: outputFolder)
            print(copy.path)
        } catch {
            let failure = "\(input.lastPathComponent) — \(error.localizedDescription)"
            failures.append(failure)
            fputs(failure + "\n", stderr)
        }
    }
}

if interactive {
    let result = NSAlert()
    let count = inputs.count - failures.count
    result.messageText = "공개용 사본 \(count)장 저장"
    result.informativeText = ([outputFolder.path] + failures).joined(separator: "\n")
    result.runModal()
}
exit(failures.isEmpty ? 0 : 1)
