const Record = require("./record");
const ConsoleMenu = require("./consoleMenu");
const RecordDataSourse = require("./recordDataSourse");


RecordDataSourse.prototype.getInstance()
                            .add(new Record("5 AMD 16"))
                            .add(new Record("1 HuperX 16"))
                            .add(new Record("10 Goodram 16"));

var menu = new ConsoleMenu();
menu.run();

