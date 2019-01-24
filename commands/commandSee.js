 const RecordDataSourse = require("./../recordDataSourse");

 
 function CommandSee() {
     this.end = false;
 }

 CommandSee.prototype.execute = function () {
    var dataSourse = RecordDataSourse.prototype.getInstance();
    console.log(dataSourse.getAll())
    RecordDataSourse.prototype.info();
    this.end = true;
 }

 CommandSee.prototype.isEnded = function () {
     return this.end;
}

module.exports = CommandSee;