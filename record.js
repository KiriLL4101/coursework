function Record(value) {
    var split = value.split(' ');
    this.number = split[0];
    this.nameProz = split[1];
    this.memory = split[2];
}

module.exports = Record;