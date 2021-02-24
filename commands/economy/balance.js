const db = require('quick.db')
const Discord = require('discord.js')

module.exports = {
    name: "balance",
    aliases: ["bal"],
    description: "Shows you're balance",
    usage: "balance",
run: async (client, message, args) => {

    let user = message.mentions.users.first() || message.author;

    let balance = await db.fetch(`money_${message.guild.id}_${user.id}`)
    if (balance === null) balance = 0;

    message.channel.send(`${user} currently has ${balance} coins`)
}
}