const readline = require('readline');
const RecordDataSourse = require("./recordDataSourse");
const CommandAdd = require("./commands/commandAdd");
const CommandSee = require("./commands/commandSee");
const CommandRemove = require("./commands/commandRemove");
const CommandEdit = require("./commands/commandEdit");
const CommandWriteFile = require("./commands/commandWriteFile");


function ConsoleMenu() { }
ConsoleMenu.prototype.run = function () {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    RecordDataSourse.prototype.info();
    let currentCommand = null;
    rl.on('line', (line) => {
        if (currentCommand && !currentCommand.isEnded()) {
            currentCommand.continue(line);
        } else {
            switch (line) {
                case '1':
                    currentCommand = new CommandSee();
                    break;
                case '2':
                    currentCommand = new CommandAdd();
                    break;
                case '3':
                    currentCommand = new CommandRemove();
                    break;
                case '4':
                    currentCommand = new CommandEdit();
                    break;
                case '5':
                    currentCommand = new CommandWriteFile(rl);
                    break;
            }
            currentCommand.execute();
        }
    });
}
module.exports = ConsoleMenu;