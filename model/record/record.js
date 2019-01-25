class Record {
    constructor(value) {
        if (value) {
            var split = value.split(' ');
            this.number = split[0];
            this.nameProz = split[1];
            this.memory = split[2];
        }

    }
    getNumber() {
        return this.number;
    }
    getNameProz() {
        return this.nameProz;
    }
    getMemory() {
        return this.memory;
    }
    setNumber(number) {
        this.number = number;
    }
    setNameProz(nameProz) {
        this.nameProz = nameProz;
    }
    setMemory(memory) {
        this.memory = memory;
    }
}



module.exports = Record;