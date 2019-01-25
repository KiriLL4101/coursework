function RecordDataSourse(records) {
    this.records = records || [];
}

RecordDataSourse.prototype.add = function (record) {
    this.records.push(record);
    this.records.sort((r1, r2) => r1.number - r2.number);
    return this;
}

RecordDataSourse.prototype.edit = function (newRecord) {
    let index = this._getIndex(newRecord)
    if (index !== -1) {
        this.records[index] = newRecord;
    }
}

RecordDataSourse.prototype.contain = function (number) {
    let index = this.records
        .map(record => record.number)
        .indexOf(number);

    return (index !== -1);
}

RecordDataSourse.prototype.remove = function (number) {
    let index = this.records
        .map(record => record.number)
        .indexOf(number);
    if (index !== -1) {
        this.records.splice(index, 1)
    } else {
        console.log("Такой компьютер не найден")
    }
}

RecordDataSourse.prototype.getAll = function () {
    return this.records
}

RecordDataSourse.prototype._getIndex = function (record) {
    //[{n1:1}, {n1:2}, {n1:5}, ...]
    //.map(obj => obj.n1)
    //[1, 2, 5, ...]
    //indexOf(5)
    //2 
    //var number = Object.isObject(record) ? record.number : record;
    return this.records
        .map(rec => rec.number)
        .indexOf(record.number);
}
RecordDataSourse.prototype.info = function(){
    let info =
    "\n\
        1 - see;\n\
        2 - add;\n\
        3 - remove;\n\
        4 - edit; \n\
        5 - exit; \n";

    console.log(info);
}

RecordDataSourse.prototype._instance = null;


RecordDataSourse.prototype.getInstance = function () {
    if (!RecordDataSourse.prototype._instance) {
        RecordDataSourse.prototype._instance = new RecordDataSourse();
    }
    return RecordDataSourse.prototype._instance;
}


module.exports = RecordDataSourse;