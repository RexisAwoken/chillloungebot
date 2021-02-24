const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "ping",
    usage: "ping",
    description: "Sends the ping",
    category: "info",
    run: async(client, message, args) => {
        const msg = await message.channel.send('Pinging...')

        const latency = msg.createdTimestamp - message.createdTimestamp
        let embed = new MessageEmbed()
        .setAuthor(message.author.tag, message.member.user.displayAvatarURL({dynamic:true}))
            .setColor('RANDOM')
            .setThumbnail('https://media4.giphy.com/media/fvA1ieS8rEV8Y/200.gif')
            .setDescription(`**Latency** \n ${latency}ms. \n **API** \n ${Math.round(client.ws.ping)}ms`)
            msg.delete()
            message.channel.send(embed);
}}