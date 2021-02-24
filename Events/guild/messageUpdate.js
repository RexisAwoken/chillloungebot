const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const config = require('../../settings.json')
module.exports = async(oldMessage,newMessage) => {
    try {
        let embed = new MessageEmbed()
            .setTitle(`<a:cogs:813655513329565697> ***Message Edited!***`)
            .setColor(config.embedcolor)
            .setDescription(`**User: ${oldMessage.author} has edited a message in <#${oldMessage.channel.id}>**`)
            .addField(`Before:`, oldMessage.content, true)
            .addField(`After:`, newMessage.content, true)
            .setTimestamp()
        let channel = oldMessage.guild.channels.cache.find(ch => ch.name === "chill-lounge-logs")
        if (!channel) return;
        channel.send(embed)
    } catch {

    }
}