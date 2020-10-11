const path = require('path');
const glob = require('glob');
const commands = [];
const { COMMAND_PREFIX } = process.env;
function fetchCommands() {
    glob.sync('./commands/message/*.js').forEach(function (file) {
        const { command, description = '', callBack } = require(path.resolve(file));
        commands.push({ command, description, callBack });
    });
}

module.exports = {
    command: 'list',
    description: 'Display list of commands',
    callBack: function (message) {
        if (commands.length === 0) {
            fetchCommands();
        }
        const messageStr = commands.reduce((result, command) => {
            const { command: name, description } = command;
            return `${result}${COMMAND_PREFIX}${name} - ${description} \n`;
        }, 'List of commands available: \n');
        message.channel.send(messageStr);
    },
};
