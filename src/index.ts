import Discord from 'discord.js'
import { Client } from 'discord.js'

const client: Client = new Discord.Client()
const prefix = "?EXAMPLE"

if (!process.env.DISCORDTOKEN) {
    console.error(
        'Your discord token is not set. Go to https://discord.com/developers/applications and create a token there.'
    )
    console.error(
        'Then, run `setx DISCORDTOKEN [TOKEN]` on Windows or `export DISCORDTOKEN="[TOKEN]"` on Mac and Linux.'
    )
    console.error('Do not share or commit your token.')
    process.exit(1)
}

/**
 * The bot will not react to information received from Discord until
 * the ready event occurs.
 */
client.on('ready', () => {
    console.log('Bot ready')
})

client.on('message', message => {
	if(!message.content.startsWith(prefix) && message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
    console.log(args);
if(args.length == 3){
    message.channel.send(args);
}else {
    message.channel.send("ERROR: Message does not follow [methodName] [hostLibrary] pattern")
    }
})

// https://discord.com/developers/applications
client.login(process.env.DISCORDTOKEN)
