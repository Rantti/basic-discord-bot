module.exports = {
    command: 'ping',
    description: 'Answer with pong (kind of a healthcheck)',
    callBack: function(message) {
        message.channel.send('pong');
    },
};
