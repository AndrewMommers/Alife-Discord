const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
require('dotenv').config();

console.log('Authenticating Token!');
client.login (process.env.TOKEN);
console.log('Token has been accepted!');

console.log('Bot is now Starting!');

client.on('ready', async() => {
    console.log(`${client.user.tag} Has Successfully Started!`);
    client.user.setActivity(`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} Members`, {type: 'WATCHING' });
})
