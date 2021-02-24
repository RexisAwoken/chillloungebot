const { MessageEmbed } = require('discord.js')
const { embedcolor } = require('../../settings.json')

module.exports = {
    name: "membercount",
    description: "shows membercount of the server",
    run: (client, message, args) => {

        const embed = new MessageEmbed()
            .setTitle('Members')
            .setDescription(message.guild.memberCount)
            .setColor(embedcolor)
            .setTimestamp()

        message.channel.send(embed)

    }
}
