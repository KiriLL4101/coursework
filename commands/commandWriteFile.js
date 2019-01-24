const RecordFileWrite = require("./../recordFileWritter");
const RecordDataSourse = require("./../recordDataSourse");

function CommandWriteFile(rl) {
    this.rl = rl;
    this.end = false;
}
CommandWriteFile.prototype.execute = function () {
    console.log("Введите название фаила(Для того что бы ...)");

}
CommandWriteFile.prototype.isEnded = function () {
    return this.end
}

CommandWriteFile.prototype.continue = function (failName) {
    let writter = new RecordFileWrite(failName);
    let dataSourse = RecordDataSourse.prototype.getInstance();
    writter.write(dataSourse.getAll());
    console.log('Данные записаны');
    this.end = true;
    this.rl.close();
}
module.exports = CommandWriteFile;