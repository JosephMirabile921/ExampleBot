import Discord from 'discord.js'
import { Client } from 'discord.js'
import get_stackflow from './api_stackflow'

const client: Client = new Discord.Client()
const prefix = '?EXAMPLE'

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

client.on('message', (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return

    const args = message.content.slice(prefix.length).split(/ +/)
    if (args.length == 3) {
        let methodName = args[1]
        let hostLibrary = args[2]
        get_stackflow(methodName, hostLibrary).then((answer) => {
            message.channel.send(answer.substring(0, 2000))
        })
    } else {
        message.channel.send(
            'ERROR: Message does not follow [methodName] [hostLibrary] pattern'
        )
    }
})

// https://discord.com/developers/applications
client.login(process.env.DISCORDTOKEN)
