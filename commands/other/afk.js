const db = require('quick.db')
const { MessageEmbed, MessageFlags } = require('discord.js')

module.exports = {
    name: "afk",
    description: "sets you as afk",
    usage: "<reason>",
    run: async(client, message, args) => {
        const content = args.join(" ")
        await db.set(`afk-${message.author.id}+${message.guild.id}`, content)
        const embed = new MessageEmbed()
        .setDescription(`<a:confirmed:813297287995981854> - You are now afk!\n Reason: ${content}`)

        message.channel.send(embed)
    }}