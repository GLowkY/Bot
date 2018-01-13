const Discord = require("discord.js");
const client = new Discord.Client();

var prefix = ('!')

bot.on('ready', function() {
  bot.user.setGame("Command: !C ")
  console.log('Connectedç');
});

bot.login("8IvfKmr9DAQ4fyrOX6-itlQafJJ0-hhA");

bot.on('message', message => {
  if (message.content === prefix + "C") {
    message.channel.sendMessage("Liste des Commandes: /n -!C");
  }
  if (message.content === "Salut") {
    message.reply("Bien le bonjour !");
  }
});
