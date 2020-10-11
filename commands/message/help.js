const { COMMAND_PREFIX } = process.env;

module.exports = {
    command: 'help',
    description: 'Display help',
    callBack: function (message) {
        message.channel
            .send(`Beep boop, I'm an utility bot. I have no specific purpose, I'm here so someone can dick around and try things out.

        I obey commands starting with "${COMMAND_PREFIX}"-prefix. Try "${COMMAND_PREFIX}list" to see what I can do.
        `);
    },
};
