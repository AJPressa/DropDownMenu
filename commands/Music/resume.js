const { MessageEmbed } = require("discord.js");
const sendError = require("../../Util/error");

module.exports = {
    name: "resume",
    description: "To resume the paused music",
    usage: "",
    aliases: [],

  run: async (client, message, args) => {
    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      let xd = new MessageEmbed()
      .setDescription("▶ Resumed the music for you!")
      .setColor("YELLOW")
      .setAuthor("Music has been Resumed!", "https://media.discordapp.net/attachments/821270469172658196/845709703358971904/Music.gif")
      return message.channel.send(xd);
    }
    return sendError("There is nothing playing in this server.", message.channel);
  },
};