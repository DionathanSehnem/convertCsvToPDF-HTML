class Processor {

    static Process(data) {
        let rows = data.split('\r\n');
        let columns = [];
        rows.forEach(row => {
            let arr = row.split(',');
            columns.push(arr);
        })
        return columns;
    }

}

module.exports = Processor;