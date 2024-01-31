// PDFGenerator.js
import React from "react";
// import { Document, Page } from "react-pdf-viewer";
import html2canvas from "html2canvas";
import jspdf from "jspdf";
import Invoice from "./Section";

const PDFGenerator = () => {

  const convertHtmlToPdf = async (htmlElement) => {
    const canvas = await html2canvas(htmlElement);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jspdf();
    pdf.addImage(imgData, "PNG", 15, 15, 180, 180);
    return pdf.output("datauristring");
  };

const downloadPdf = (pdfData) => {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(
    new Blob([pdfData], { type: "application/pdf" })
  );
  link.download = "your-pdf-filename.pdf";
  link.click();
};
  return (
    <div>
      <h1>Hello This is Invoice Page</h1>
        
    </div>
  );
};

export default PDFGenerator;
