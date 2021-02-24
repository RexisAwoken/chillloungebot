module.exports = {
    name: "restart",
    description: "restarts the bot",
    run: async (client, message, args) => {
    if (message.author.id !== '712170999222632469') {
        return message.channel.send("Owner only command lul")
    }
    await message.channel.send(`Bot Restarted!`)
    process.exit();
    }
}