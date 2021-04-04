import Discord from 'discord.js'
import { Client } from 'discord.js'

const client : Client = new Discord.Client();

if (!process.env.DISCORDTOKEN) {
    console.error("Your discord token is not set. Go to https://discord.com/developers/applications and create a token there.");
    console.error("Then, run `setx DISCORDTOKEN [TOKEN]` on Windows or `export DISCORDTOKEN=\"[TOKEN]\"`.");
    process.exit(1);
}

/**
 * The bot will not react to information received from Discord until
 * the ready event occurs.
 */
client.on('ready', () => {
    console.log('Bot ready')
})

// https://discord.com/developers/applications
client.login()