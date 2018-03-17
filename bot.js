const fs = require('fs');

const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login(fs.readFileSync('key.txt').toString());
