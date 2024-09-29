//
//  ViewController.swift
//  BionicReading
//
//  Created by Pietro Lembo on 30/09/23.
//

import UIKit

class ViewController: UIViewController, UITextFieldDelegate {
    
    @IBOutlet weak var myLabel: UILabel!
    
    @IBOutlet weak var myText: UITextField!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        myText.delegate = self
        myText.placeholder = "Try it!"
        
        //let attrString = BionicReading.manipulateString("Bionic Reading is a new method facilitating the reading process by guiding the eyes through text with artificial fixation points. As a result, the reader is only focusing on the highlighted initial letters and lets the brain center complete the word. In a digital world dominated by shallow forms of reading, Bionic Reading aims to encourage a more in-depth reading and understanding of written content.")
        
        //myLabel.attributedText = attrString
        
    }
    
    @IBAction func actApplyBR(_ sender: Any) {
        if let text = myText.text {
            let attrString = BionicReading.manipulateString(text)
            myLabel.attributedText = attrString
        }
    }
    
    @IBAction func actReset(_ sender: Any) {
        if let text = myText.text {
            let attrString = BionicReading.resetStringAttributes(text)
            myLabel.text = attrString
        }
    }
    
    func textFieldDidEndEditing(_ textField: UITextField) {
        if let text = textField.text {
            let attrString = BionicReading.manipulateString(text)
            myLabel.attributedText = attrString
        }
    }
    
    func textFieldShouldReturn(_ textField: UITextField) -> Bool {
        self.view.endEditing(true)
        return false
    }
}
