const fs = require("fs");

function RecordFileWrite(filePath) {
    this.filePath = filePath || "temp.txt";
}

RecordFileWrite.prototype.write = function (records) {
    fs.writeFileSync(this.filePath, JSON.stringify(records, null, 3));
};
module.exports = RecordFileWrite;