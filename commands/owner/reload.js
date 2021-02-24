module.exports = {
    name: "reload",
    description: "reloads a command",
    usage: "<cateogry> <commandname>",
    run: (client, message, args) => {
        if (message.author.id !== "712170999222632469" || "463773521458364427")
        if (!args[0]) return message.channel.send('You must provide a category!')
        if (!args[1]) return message.channel.send('You must provide a command!')

        let category = args[0].toLowerCase()
        let command = args[1].toLowerCase()

        try {
            delete require.cache[require.resolve(`../../commands/${category}/${command}.js`)];
            client.commands.delete(command);
            const pull = require(`../../commands/${category}/${command}.js`);
            client.commands.set(command, pull);

            return message.channel.send(`Done Reloading **${command}**`)
        } catch (error) {
            return message.channel.send(`Error Reloading **${command}**: \`${error.message}\``)
        }
    }

}