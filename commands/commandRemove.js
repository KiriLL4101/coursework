const RecordDataSourse = require("./../recordDataSourse");

function CommandRemove(){
    this.end = false;
}
CommandRemove.prototype.isEnded = function(){
    return this.end;
}
CommandRemove.prototype.execute = function(){
    console.log("Введите номер компьютера который хотите удалить")
}
CommandRemove.prototype.continue = function(number){
   let rem = RecordDataSourse.prototype.getInstance();
   rem.remove(number);
   RecordDataSourse.prototype.info();
   this.end = true;
}
module.exports = CommandRemove;