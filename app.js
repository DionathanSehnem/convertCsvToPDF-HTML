const Reader = require('./modules/Reader.js');
const Processor = require('./modules/Processor.js');
const Table = require('./modules/Table.js');
const HtmlParser = require('./modules/HtmlParser.js');
const Writer = require('./modules/Writer.js');
const PDFWriter = require('./modules/PDFWriter');

const arguments = process.argv

const leitor = new Reader();
const escritor = new Writer();

async function main(filePath) {
    let dados = await leitor.Read(filePath);
    let dadosProcessados = Processor.Process(dados);
    let usuarios = new Table(dadosProcessados);
    let html = await HtmlParser.Parse(usuarios);

    const fileName = filePath.split('.');
    escritor.Write(`${fileName[0]}.html`, html);
    PDFWriter.WritePDF(`${fileName[0]}.pdf`, html);
}

main(arguments[2]);