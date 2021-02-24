const config = require('../../settings.json')
const { MessageEmbed } = require('discord.js')
module.exports = async(message) => {
    try {
        let embed = new MessageEmbed()
            .setTitle(`<a:CoolX:807041416735621160> ***Message Deleted!***`)
            .setDescription(`**User ${message.author} has deleted a message in <#${message.channel.id}>**`)
            .addField(`Content:`, message.content, true)
            .setColor(config.embedcolor)
        let channel = message.guild.channels.cache.find(ch => ch.name === "chill-lounge-logs")
        if (!channel) return;
        channel.send(embed)
    } catch {

    }
}