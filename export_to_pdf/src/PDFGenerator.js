import html2pdf from 'html2pdf';

  

const printHandler = () => {
    const pdfJSX = () => {
        return (
            <div>
                <h1>JSX to PDF Convert Example</h1>
                <h2>Hello React</h2>
            </div>
        );
    };

    const printElement = pdfJSX();
    html2pdf().from(printElement).save();

}

  return (
    <div className="App">
      <button onClick={printHandler}>Print</button>
    </div>
  );


export default printHandler;
