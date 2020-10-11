require('dotenv').config();
const path = require('path');
const glob = require('glob');
const Discord = require('discord.js');
const client = new Discord.Client();

const commands = {};

glob.sync('./commands/message/*.js').forEach(function (file) {
    const { command, callBack } = require(path.resolve(file));
    commands[command] = callBack;
});

console.log(commands);

const { TOKEN, COMMAND_PREFIX = '!' } = process.env;

client.once('ready', () => {
    console.log('Ready!');
});

client.login(TOKEN);
client.on('message', (message) => {
    if (!message.content.startsWith(COMMAND_PREFIX) || message.author.bot) {
        return;
    }
    const args = message.content.slice(COMMAND_PREFIX.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    const callback = commands[command];
    if (typeof callback === 'function') {
        callback(message, args);
    }
});
