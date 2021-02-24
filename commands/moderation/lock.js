module.exports = {
    name: "lock",
    description: "locks a channel",
    run: async (client, message, args) => {
     if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send('You can\'t run this command!');
     if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("I require the \`MANAGE_CHANNELS`\ permission ")

        const role = message.guild.roles.cache.get('798340292956127293')
        if (!role) return message.channel.send('Role was not found')

        let lockChannel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
        if (!lockChannel) lockChannel = message.channel

        await  lockChannel.updateOverwrite(role, {
            SEND_MESSAGES: false
        }).catch(err => console.log(err));
        message.channel.send(`I have locked the channel  🔒`);
}}