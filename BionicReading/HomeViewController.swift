//
//  HomeViewController.swift
//  BionicReading
//
//  Created by Pietro Lembo on 12/10/23.
//

import Foundation
import UIKit

class HomeViewController: UIViewController {
    @IBOutlet weak var lbDescription: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        let attrString = BionicReading.manipulateString("Bionic Reading is a new method facilitating the reading process by guiding the eyes through text with artificial fixation points. As a result, the reader is only focusing on the highlighted initial letters and lets the brain center complete the word. In a digital world dominated by shallow forms of reading, Bionic Reading aims to encourage a more in-depth reading and understanding of written content.")
        
        lbDescription.attributedText = attrString
        
    }
    
}
