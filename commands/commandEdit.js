const RecordDataSourse = require("./../recordDataSourse");
const Record = require("./../record");

function CommandEdit() {
    this.end = false;
    this.number = null;
    this.dataSourse = RecordDataSourse.prototype.getInstance();
}
CommandEdit.prototype.isEnded = function () {
    return this.end
}
CommandEdit.prototype.execute = function () {
    console.log("Введите номер компа который хотите редактировать")
}
CommandEdit.prototype.continue = function (value) {
    if (this.number) {
        this._editRecord(value);
    } else {
        this._checkRecord(value);
    }
    
}
CommandEdit.prototype._checkRecord = function (number) {
    if (this.dataSourse.contain(number)) {
        console.log("Да содержит , введите имя и память");
        this.number = number;
    } else {
        console.log("Такого компьютера нет");
        this.end = true;
    }
}
CommandEdit.prototype._editRecord = function (line) {
    let record = new Record(this.number + " " + line);
    this.dataSourse.edit(record);
    console.log("Запись отредактирована");
    RecordDataSourse.prototype.info();
    this.end = true;
}
module.exports = CommandEdit;