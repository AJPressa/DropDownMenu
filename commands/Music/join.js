const discord = require("discord.js");

module.exports = {
    name: "join",
    description: "joins the voice channel of the messenger",
    usage: "[leave]",
    aliases: ["l"],
        
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setDescription("joined the vc!")
      .setColor("YELLOW")
      .setFooter(`Requested by ${message.author.username}`)
    const voiceChannel = message.member.voice.channel;

    if (!voiceChannel) return message.channel.send("You need to be in a voice channel");

    await voiceChannel.join();
    await message.channel.send(embed);

    const { Player } = require("discord-music-player"); //--Here

    const player = new Player(client, {
      leaveOnEmpty: false,
    });

    client.player = player;

    new Player(client, {
      leaveOnEnd: false,
      leaveOnStop: false,
      leaveOnEmpty: false,
      timeout: 10,
      volume: 200,
      quality: 'high',
    });
  }
}