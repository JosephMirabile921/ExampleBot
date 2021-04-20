const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = "?EXAMPLE"

client.once('ready', () => {
	console.log('hello');
});

/*fn: (msg) => {
	let application = {}
	let filter = (msg) => !msg.author.bot
	let options = {
		max: 1,
		time: 15000
	};
}*/

client.on('message', message => {
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	console.log(args);
	message.channel.send(args);
})

/*Replace token with actual token*/
/*client.login('token');*/


