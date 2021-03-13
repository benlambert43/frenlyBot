// Run dotenv
require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client();
client.login(process.env.DISCORD_TOKEN);

const prefix = "!";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(" ");
  const command = args.shift().toLowerCase();

  if (command === "hi") {
    return message.channel.send(`Hi ${message.author}, I'm frenlyBot!`);
  } else if (command === "echo") {
    if (!args.length) {
      return message.channel.send(
        `You didn't provide any arguments, ${message.author}!`
      );
    }
    message.channel.send(`Command name: ${command}\nArguments: ${args}`);
  }
});
