const { description } = require("../info/help")

module.exports = {
    name: "invite",
    description: "fake invite",
    usage: "invite",
    run: (client, message, args) => {
        return message.reply('<a:CoolX:807041416735621160> Sorry this bot isn\'t public!')
    }
}