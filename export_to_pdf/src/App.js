import logo from './logo.svg';
import './App.css';
import PDFGene from './PDFGenerator'


function App() {
  //  const onButtonClick = () => {
  //    const pdfUrl = "Sample.pdf";
  //    const link = document.createElement("a");
  //    link.href = pdfUrl;
  //    link.download = "document.pdf"; // specify the filename
  //    document.body.appendChild(link);
  //    link.click();
  //    document.body.removeChild(link);
  //  };
  return (
    <div className="App">
     <PDFGene/>
    </div>
  );
}

export default App;
