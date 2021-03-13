// Run dotenv
require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client();
client.login(process.env.DISCORD_TOKEN);

const prefix = "!";

const Icebreakers = [
  "What kind of reality show would you appear in?",
  "Which of Snow White’s seven dwarfs describes you best (Bashful, Doc, Dopey, Grumpy, Happy, Sleepy or Sneezy)?",
  "What song describes your life right now?",
];

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
  } else if (command == "test") {
    const guilds = client.guilds.cache;
    const messageOriginatedId = message.guild.id;
    const currentGuild = guilds.find((g) => g.id === messageOriginatedId);
    const currentGuildMembers = currentGuild.members.cache.map((a) => a.user);
    currentGuildMembers.shift();
    const random1 = Math.floor(Math.random() * currentGuildMembers.length);
    const random2 = Math.floor(Math.random() * currentGuildMembers.length);
    const randomIce = Math.floor(Math.random() * Icebreakers.length);

    console.log(currentGuildMembers);

    return message.channel.send(
      `We matched ${currentGuildMembers[random1]} and ${currentGuildMembers[random2]}! ${Icebreakers[randomIce]}`
    );
  }
  // add more else if statements with more commands here
});
