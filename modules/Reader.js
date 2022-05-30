const fs = require('fs');
const util = require('util');

class Reader {

    constructor() {
        this.reader = util.promisify(fs.readFile);
    }

    async Read(filePath) {
        try {
            return await this.reader(filePath, 'utf-8')
        } catch (err) {
            throw new Error('Endereço de arquivo não encontrado');
        }
    }
}

module.exports = Reader;