const Discord = require('discord.js');
const { parse } = require("twemoji-parser");
const { MessageEmbed } = require("discord.js");
const config = require('../../settings.json')

module.exports = {
        name: 'addemoji',
        description: 'Adds a given Emoji to the server',
        aliases: ["steal"],
        usage: '<emoji> <name>',
    run: async (client, message, args) => {

        if (!message.member.hasPermission(`MANAGE_EMOJIS`)) {
            return message.channel.send(`You Do Not Have Permission!`)
        }

        const emoji = args[0];
        if (!emoji) return message.channel.send(`Please Give Me A Emoji!`);

        let customemoji = Discord.Util.parseEmoji(emoji);
        if (customemoji.id) {
            const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${customemoji.animated ? "gif" : "png"
                }`;
            const name = args.slice(1).join(" ");
            try {
                const Added = new MessageEmbed()
                .setColor(config.embedcolor)
                .setTitle(`<a:verifiedcheck:806734488101060608> Emoji Added`)
                .setDescription(
                `<a:verifiedcheck:806734488101060608> Emoji Has Been Added! | Name : ${name || `${customemoji.name}`} | Preview : [Click Me](${Link})`
                    );
                await message.guild.emojis.create(
                    `${Link}`,
                    `${name || `${customemoji.name}`}`
                )
                return message.channel.send(Added)
            } catch (err) {
                console.log(err)
                return message.channel.send(`<a:CoolX:807041416735621160> An Error Has Occured!\n\n**Possible Reasons:**\n\`\`\`- This Server Has Reached Emoji Limit\n- I Do Not Have Permission\n- Emoji Is Too Big\`\`\``)
           
            }
        } else {
            let CheckEmoji = parse(emoji, { assetType: "png" });
            if (!CheckEmoji[0])
                return message.channel.send(`<a:CoolX:807041416735621160> **Please Give Me A Valid Emoji!**`);
            message.channel.send(
                `${client.emotes.error} **You Can Use Normal Emoji Without Adding In Server!**`
            );
        }

    }
}