
const Discord = require("discord.js")
const config = require("../../settings.json")
const db = require("quick.db")

module.exports = {
    name: "blacklist",
    aliases: ["bl"],
    usage: "<@user>",
    description: "Blacklist somebody from the using commands!",
    run: async (client, message, args) => {
        let prefix = await db.fetch(`prefix_${message.guild.id}`)
        if(prefix == null) {
            prefix =  config.default_prefix
        }

        if (message.author.id !== "712170999222632469" || "463773521458364427") return message.reply("you do not have permission to use this command!")
        const user = message.mentions.users.first()
        if (!user) return message.reply("Please mention someone!")

        let blacklist = await db.fetch(`blacklist_${user.id}`)

        if (blacklist === "Not") {
            db.set(`blacklist_${user.id}`, "Blacklisted")
            let embed = new Discord.MessageEmbed()
                .setDescription(`${user} has been blacklisted!`)

            message.channel.send(embed)
        } else if (blacklist === "Blacklisted") {
            db.set(`blacklist_${user.id}`, "Not")
            let embed = new Discord.MessageEmbed()
                .setDescription(`${user} has been unblacklisted!`)

            message.channel.send(embed)
        } else {
            db.set(`blacklist_${user.id}`, "Not")
            let embed = new Discord.MessageEmbed()
                .setDescription(`Set data ${user}!`)

            message.channel.send(embed)
        }
    }
}