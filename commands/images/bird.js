const axios = require("axios");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "bird",
  aliases: ["birb"],
  description: "random bird image from reddit",
  run: async (client, message, args) => {
    try {
      let randomNum = Math.floor(Math.random() * 25);
      await axios
        .get(`https://www.reddit.com/r/birdpics.json`)
        .then((r) => {
          message.channel.send(
            new MessageEmbed()
              .setColor("RANDOM")
              .setTitle(r.data.data.children[randomNum].data.title)
              .setAuthor(
                `Posted by: ${r.data.data.children[randomNum].data.author}`
              )
              .setImage(r.data.data.children[randomNum].data.url)
          );
        })
        .catch(console.error());
    } catch (err) {
      console.error(err);
    }
  },
};
