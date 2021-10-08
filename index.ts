import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

console.log('Authenticating Token!');
client.login (process.env.BOT_TOKEN);
console.log('Token has been accepted!');

console.log('Bot is now Starting!');

client.on('ready', async() => {
    console.log(`${client.user.tag} Has Successfully Started!`);
    client.user.setActivity(`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0 )} Members`, {type: 'WATCHING' });
})

client.on('messageCreate', (message) => {
    if (message.content === 'ping') {
    message.reply({
        content: 'pong',
    })
    }
})

client.login(process.env.TOKEN)