const Dotenv = require('dotenv');
const Discord = require('discord.js');

Dotenv.config();

const client = new Discord.Client();

const commandPrefix = '!ex';

client.once('ready', () => console.log('Ready!'));

client.on('message', message => {
    if (message?.content === `${commandPrefix} hello there`) {
        message.channel.send('General Kenobi');
    }
});

client.login(process.env.BOT_TOKEN);