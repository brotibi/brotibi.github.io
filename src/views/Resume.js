import React from 'react';
import '../App.css';
import {Document, Page, pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



function Resume() {

    return (
        <div className='Resume'>
            {console.log(__dirname)}
            <Document file = "MobolajiRotibiResume2019.pdf"
            onLoadError={console.error}>
                            <Page pageNumber={1} width = '1000' />
            </Document>
        </div>
    );
};

export default Resume;
