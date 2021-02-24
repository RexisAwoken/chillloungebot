const Discord = require('discord.js');

module.exports = {
    name: "store",
    description: "View the store",
    usage: "store",

    run: (client, message, args) => {

        const embed = new Discord.MessageEmbed()
        .setTitle('Store')
        .setDescription(`🚗Car - 500 coins \n ⌚Watch - 250 coins \n 🏆Trophy - 1000 coins \n 🧱Brick - 1500`)
        .setTimestamp();

        message.channel.send(embed);
    }
}