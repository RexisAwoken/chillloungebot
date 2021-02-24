const Discord = require('discord.js')
const { version } = require('discord.js')
const { uptime } = require('discord.js')
const moment = require('moment')
const os = require('os')
const cpuStat = require('cpu-stat')
const ms = require('ms')
const { embedcolor } = require('../../settings.json')

module.exports = {
    name: "stats",
    description: "see the stats of the bot",
    run: (client, message, args) => {
    
        let cpuLol;
        cpuStat.usagePercent(function(err, percent, seconds) {
            if (err) {
                console.log(err)
            }
            const embed = new Discord.MessageEmbed()
                .setTitle(`${client.user.username}'s Stats`)
                .setColor(embedcolor)
                .addField("Mem Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`)
                .addField("Users", `${client.users.cache.size}`, true)
                .addField("Server", `${client.guilds.cache.size}`, true)
                .addField('Channels', `${client.channels.cache.size}`, true)
                .addField("DiscordJS", `v${version}`, true)
                .addField("Node", `${process.version}`, true)
                .addField("CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
                .addField("CPU Usage", `\`${percent.toFixed(2)}%\``, true)
                .addField("Arch", `\`${os.arch()}\``, true)
                .addField("Platform", `\`\`${os.platform()}\`\``, true)
                .addField("Websocket", `\`${client.ws.ping}\`MS`, true)
                .setFooter(`Requested By ${message.author.tag}`, message.author.displayAvatarURL())
                .setTimestamp()

            message.channel.send(embed)
        })
        
    }
}
