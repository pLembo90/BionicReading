//
//  BionicReading.swift
//  BionicReading
//
//  Created by Pietro Lembo on 11/10/23.
//

import Foundation
import UIKit

class BionicReading: NSObject {
    
    static func manipulateString(_ text: String) -> NSMutableAttributedString {
        let words = text.split(separator: " ")
        let space = NSMutableAttributedString(string: " ")
        let finalText = NSMutableAttributedString()
        
        let attributes = [NSAttributedString.Key.font: UIFont.boldSystemFont(ofSize: 18)]
        let attributes2 = [NSAttributedString.Key.font: UIFont.systemFont(ofSize: 18, weight: .thin)]
        
        words.forEach { word in
            let text = String(word)
            let attributeString = NSMutableAttributedString(string: text)
            let countLetter = text.count
            
            switch countLetter {
            case 1:
                attributeString.addAttributes(attributes, range: NSRange(location: 0, length: 1))
                break
            case 2:
                attributeString.addAttributes(attributes, range: NSRange(location: 0, length: 1))
                attributeString.addAttributes(attributes2, range: NSRange(location: 1, length: countLetter - 1))
                break
            case 3:
                attributeString.addAttributes(attributes, range: NSRange(location: 0, length: 1))
                attributeString.addAttributes(attributes2, range: NSRange(location: 1, length: countLetter - 1))
                break
            case 4:
                attributeString.addAttributes(attributes, range: NSRange(location: 0, length: 2))
                attributeString.addAttributes(attributes2, range: NSRange(location: 2, length: countLetter - 2))
                break
            case 5:
                attributeString.addAttributes(attributes, range: NSRange(location: 0, length: 3))
                attributeString.addAttributes(attributes2, range: NSRange(location: 3, length: countLetter - 3))
                break
            default:
                attributeString.addAttributes(attributes, range: NSRange(location: 0, length: 4))
                attributeString.addAttributes(attributes2, range: NSRange(location: 4, length: countLetter - 4))
                break
            }
            
            finalText.append(attributeString)
            finalText.append(space)
        }

        return finalText
        
    }
    
    static func resetStringAttributes(_ text: String) -> String {
        let attributes = [NSAttributedString.Key.font: UIFont.systemFont(ofSize: 18)]
        let attributeString = NSMutableAttributedString(string: text)
        attributeString.addAttributes(attributes, range: NSRange(location: 0, length: text.count))
        
        return attributeString.string
    }
    
}
