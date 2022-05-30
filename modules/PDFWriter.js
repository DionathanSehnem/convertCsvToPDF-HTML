const pdf = require('html-pdf');

class PDFWriter {
    static WritePDF(fileName, html) {
        pdf.create(html, {}).toFile(fileName, (err => {
            if (err == null) {
                console.log('Arquivo PDF criado com sucesso');
            } else {
                console.log(err)
            }
        }));
    }
}

module.exports = PDFWriter;