//
//  PDFViewController.swift
//  BionicReading
//
//  Created by Pietro Lembo on 13/10/23.
//

import UIKit
//import QuartzCore
import PDFKit


class PDFViewController: UIViewController {

    @IBOutlet weak var myLabel: UILabel!
    
    var contentString = ""
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        self.showActionSheet()
        //self.displayPdf()
        // Do any additional setup after loading the view.
    }
    
    private func resourceUrl(forFileName fileName: String) -> URL? {
        if let resourceUrl = Bundle.main.url(forResource: fileName, withExtension: "pdf") {
            return resourceUrl
        }
        return nil
    }
    
    private func createPdfView(withFrame frame: CGRect) -> PDFView {
        let pdfView = PDFView(frame: frame)
        pdfView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
        pdfView.autoScales = true
        
        return pdfView
    }
    
    private func createPdfDocument(forFileName fileName: String) -> PDFDocument? {
        if let resourceUrl = self.resourceUrl(forFileName: fileName) {
            return PDFDocument(url: resourceUrl)
        }
        return nil
    }
    
    private func displayPdf() {
        let pdfView = self.createPdfView(withFrame: self.view.bounds)
        
        if let pdfDocument = self.createPdfDocument(forFileName: "UBS") {
            self.view.addSubview(pdfView)
            pdfView.document = pdfDocument
        }
    }
    
    func showActionSheet(){
        let alert = UIAlertController(title: "Bionic Reading", message: "Please select an option", preferredStyle: .actionSheet)
            
            alert.addAction(UIAlertAction(title: "Load PDF Example", style: .default , handler:{ (UIAlertAction)in
                self.contentString = self.pdfToText(fromPDF: "sample")
                let attrString = BionicReading.manipulateString(self.contentString)
                self.myLabel.attributedText = attrString
            }))
            
            
            alert.addAction(UIAlertAction(title: "Dismiss", style: .cancel, handler:{ (UIAlertAction)in
                print("User click Dismiss button")
                self.navigationController?.popViewController(animated: true)
            }))

            
            //uncomment for iPad Support
            //alert.popoverPresentationController?.sourceView = self.view

            self.present(alert, animated: true, completion: {
                print("completion block")
            })
    }
    
    func pdfToText(fromPDF: String) -> String {
        let urlPath = Bundle.main.url(forResource: fromPDF, withExtension: "pdf")
        let docContent = NSMutableAttributedString()
        if let pdf = PDFDocument(url: urlPath!) {
            let pageCount = pdf.pageCount

            for i in 0 ..< pageCount {
                guard let page = pdf.page(at: i) else { continue }
                guard let pageContent = page.attributedString else { continue }
                docContent.append(pageContent)
            }
        }
        
        return docContent.string
    }

}
