const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "buy",
    description: "Buy an item from the store",
    usage: "buy",

     run: async (client, message, args) => {
        let purchase = args.join(" ");
        if(!purchase) return message.channel.send('Please provide an item to buy')
        let items = await db.fetch(message.author.id, { items: [] });
        let amount = await db.fetch(`money_${message.guild.id}_${message.author.id}`)

        if(purchase === 'car' || 'Car'){
            if(amount < 500) return message.channel.send('You do not have enough money to buy this item. Please try another one');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 500);
            db.push(message.author.id, "Car");
            message.channel.send('Successfully bought one car')
        }
        if(purchase === 'watch' || 'Watch'){
            if(amount < 250) return message.channel.send('You do not have enough money to buy this item. Please try another one');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 250);
            db.push(message.author.id, "Watch");
            message.channel.send('Successfully bought one car')
        }
        if(purchase === 'trophy' || 'Trophy'){
            if(amount < 1000) return message.channel.send('You do not have enough money to buy this item. Please try another one');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 1000);
            db.push(message.author.id, "Trophy");
            message.channel.send('Successfully bought one trophy')
    }
    if(purchase === 'brick' || 'Brick'){
        if(amount < 1500) return message.channel.send('You do not have enough money to buy this item. Please try another one');
        db.subtract(`money_${message.guild.id}_${message.author.id}`, 1500);
        db.push(message.author.id, "Brick");
        message.channel.send('Successfully bought one Brick')
}
}
}