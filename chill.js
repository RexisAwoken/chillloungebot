const Discord = require('discord.js')
const client = new Discord.Client({ ws: { properties: { $browser: "Discord iOS" }} });
const db = require('quick.db')
const ms = require('ms')
const Canvas = require('canvas')
const { token, default_prefix, mongooseString, embedcolor } = require("./settings.json");
const  fs = require("fs");
const { Message, MessageAttachment } = require('discord.js')
const mongoose = require('mongoose')
const { MessageEmbed } = require('discord.js')
const bot = new Discord.Client()
mongoose.connect(mongooseString, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(console.log(`Connect to Mongo DB!`))
const config = {
    token: process.env.token,
}



const activity = ["c!help", "Coded By Awoken#0002"];
const Timeout = new Set();

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

["command"].forEach((handler) => {
  require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
  let i = 0;

  setInterval(() => {
    const index = Math.floor(i);
    client.user.setActivity(activity[index], { type: "PLAYING" });
    i = i + 1;

    if (i === activity.length) i = i - activity.length;
  }, 5000);
});

client.on("message", async (message) => {
    let blacklist = await db.fetch(`blacklist_${message.author.id}`)

    if(blacklist === "Blacklisted") return message.reply("You are blacklisted from using any commands!")
  if (message.author.bot) return;
  if (!message.guild) return;
  let prefix = db.get(`prefix_${message.guild.id}`);
  if (prefix === null) prefix = default_prefix;

  if (!message.content.startsWith(default_prefix)) return;

  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  // Get the command
  let command = client.commands.get(cmd);
  // If none is found, try to find it by alias
  if (!command) command = client.commands.get(client.aliases.get(cmd));

  // If a command is finally found, run the command
  if (command)
          command.run(client, message, args)


});

client.on("message", async (message, guild) => {
  if(message.author.client || message.channel.type === "dm") return;

  // deleting his afk if he send a msg

  if(db.has(`afk-${message.author.id}+${message.guild.id}`)) { // if he has afk
      const oldReason = db.get(`afk-${message.author.id}+${message.guild.id}`) // get the reason 
      await db.delete(`afk-${message.author.id}+${message.guild.id}`) // delete it after u get it
      const embednot = new MessageEmbed()
      .setDescription(`<a:CoolX:807041416735621160> - You are no longer afk`)

      message.channel.send(embednot)
  }


  // checking if someone mentioned the afk person

  if(message.mentions.members.first()) { // if someone mentioned the person
      if(db.has(`afk-${message.mentions.members.first().id}+${message.guild.id}`)) { // db will check if he is afk
        message.channel.send(message.mentions.members.first().user.tag + " is afk  Reason: " + db.get(`afk-${message.mentions.members.first().id}+${message.guild.id}`))
      }
   }


})

client.on('messageUpdate', async(oldMessage,newMessage) => {
    require('./Events/guild/messageUpdate')(oldMessage,newMessage)
})
client.on('messageDelete', async(message) => {
    require('./Events/guild/messageDelete')(message)
})

client.login(token);
