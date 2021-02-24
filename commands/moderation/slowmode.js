const { aliases, usage } = require("../info/help");
const Discord = require('discord.js')
module.exports = {
    name: "slowmode",
    aliases: "slow",
    usage: "slowmode",
    run: (client, message, args) => {

        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('You can\'t run this command!')
        if (!args[0]) return message.channel.send('You need to provide how long to set the slowmode!')
        if(isNaN(parseInt(args[0]))) return message.channel.send('That is not a number')

        message.channel.setRateLimitPerUser(args[0])
            let slowembed = new Discord.MessageEmbed()
            .setTitle(':clock10: Slowmode Set!')
            .setDescription(`Slowmode set to ${args[0]} seconds!`)
            .setFooter('Chill Lounge | Made By Awoken#0002')
            .setColor('#ffc8dd')
            
            message.channel.send(slowembed)
    }}