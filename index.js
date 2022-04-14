const Configs = require("./Configs/configs.json");
const { Client, Intents } = require("discord.js");
const BeerBot = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

// Lancement et configuration du bot
BeerBot.on("ready", async () => {
	
	BeerBot.user.setStatus("online") 
	//BeerBot.user.setAvatar('./Assets/favicon.png')
    BeerBot.user.setActivity("Ask me with ! 🚀", {type: 'LISTENING'})

});

BeerBot.login(Configs.token);
































/*

BeerBot.on('messageCreate', message => {


	if (message.content.startsWith("!M")) {

			const messageSend = {
				content: message.content.split('! ')[1].split(' ')[0],
				args: message.content.split('! ')[1].split(' ')
			}


			if (messageSend.content === 'purge') {
				message.channel.bulkDelete(100);
			} else if (messageSend.content === 'help') {
				message.channel.send("Voici l'aide que vous avez demandé :")
			} else if (messageSend.content === 'math') {
				message.channel.send('Vous avez demandé une opération mathématique...')
				const calcul = {
					//w: messageSend.args.split(' ')[0],
					a: messageSend.args[1],
					b: messageSend.args[2],
				}

				const response = calcul.a * calcul.b

				message.channel.send(`Voici le résultat de ${calcul.a} * ${calcul.b} : ${response.toLocaleString()}`);

			}
 			
	} 
  	
})


*/