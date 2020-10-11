# Basic discord bot

A bot setup based on guide provided on https://discordjs.guide/ with autoloading new commands in addition.

## Setup

Clone this repo

```bash
git clone git@github.com:Rantti/basic-discord-bot.git
```

Install dependencies

```bash
npm install
```

Create .env file based on template and fill in variables inside.

```bash
cp .env.template .env
```

Basically you need to fetch your [bot token provided by discord from their applications management page](https://discord.com/developers/applications). Select your bot application or create a new one. Then from the left sidebar from selected application select "Bot" under settings and reveal the token found there.

Run application:

```bash
node .
```

For development you can use nodemon to reload app as you make changes to it:

```bash
npm run dev
```

## .env variables

| Variable name | Description                            |
|---------------|----------------------------------------|
| TOKEN         | Bot token assigned to your application |
| COMMAND_PREFIX         | Prefix for commands to recognize commands designated for bot, defaults to "!" |


## Command template

Currently only message-based commands are supported. You can create a new command under `commands/message/`-directory and the application will automatically load the new command.

```javascript
module.exports = {
    command: 'template',
    description: 'Template command', // Description, used in "list" command.
    callBack: function(message, args) {
        // Your command logic here
    },
};
```

- `command` - name of the command that needs to be sent for callback to be executed
- `description` - straightforward short description what the command does. Used currently by list command.
- `callBack(message, args)` - Executed callback. `message` variable is the [Message class used by discord.js](https://discord.js.org/#/docs/main/stable/class/Message). `args` is an array of words separated by empty space after the command in sent message.
