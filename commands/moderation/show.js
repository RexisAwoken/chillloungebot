const Discord = require('discord.js')
const { description } = require('../info/help')

module.exports = {
    name: "slowmodeshow",
    aliases: ["show"],
    usage: "",
    description: "shows the current slowmode",
    run: (client, message, args) => {

message.channel.send(`The current slowmode is \`${message.channel.rateLimitPerUser}\` seconds!`)

    }}