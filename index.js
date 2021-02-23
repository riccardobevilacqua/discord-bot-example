const Dotenv = require('dotenv');
const Discord = require('discord.js');

Dotenv.config();

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Bot started.');
});

client.login(process.env.BOT_TOKEN);