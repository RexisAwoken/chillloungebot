module.exports = {
    name: "hide",
    description: "hides a channel from members",
    run: async (client, message, args) => {
     if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send('You can\'t run this command!');
     if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("I require the \`MANAGE_CHANNELS`\ permission ")

        const role = message.guild.roles.cache.get('798340292956127293')
        if (!role) return message.channel.send('Role was not found')

        let hideChannel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
        if (!hideChannel) hideChannel = message.channel

        await  hideChannel.updateOverwrite(role, {
            VIEW_CHANNEL: false
        }).catch(err => console.log(err));
        message.channel.send(`I have hidden the channel :white_check_mark:`);
}}