const Record = require("./../record.js");
const RecordDataSourse = require("./../recordDataSourse");

function CommandAdd() {
    this.end = false;
}

CommandAdd.prototype.execute = function () {
    console.log("Введите запись");
}

CommandAdd.prototype.isEnded = function () {
    return this.end;
}

CommandAdd.prototype.continue = function (line) {
    var record = new Record(line);
    var recordDataSourse = RecordDataSourse.prototype.getInstance();
    recordDataSourse.add(record);
    this.end = true;
    RecordDataSourse.prototype.info();
}

module.exports = CommandAdd;