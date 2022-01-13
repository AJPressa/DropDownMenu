const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "unlock",
    usage: "unlock [#channel]",
    example: ".unlock #lounge",
    permissions: ["MANAGE_CHANNELS"],
    botperms: ['EMBED_LINKS', "MANAGE_CHANNELS"],
    group: "moderation",
    description: "Unlocks a locked channel"
    ,
    guildOnly: true
};

/**
 * 
 * @param {Client} client 
 * @param {Message} message 
 * @param {*} args 
 */

 module.exports.run = async (client, message, args) => { 
     const channel = message.mentions.channels.first() ? message.mentions.channels.first() : args[0];

     if (!channel) return message.channel.send(`Pls Use Like This Z/unlock mention the channel`)

     let mm;

    if (channel === args[0]) mm = await message.guild.channels.cache.get(args[0]); else mm = await message.mentions.channels.first();

    mm.updateOverwrite(message.guild.roles.everyone.id, {
        SEND_MESSAGES: null
    }).then(() => {
        const done = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription(`<a:verified:896786357605781584> _**${mm.name}** has been unlocked_`)

        message.channel.send(done)
    }).catch(() => {
        const failed = new MessageEmbed()
        .setColor(client.color)
        .setDescription(`<a:TP_Check_No:896786444507574313> _Failed to unlock **${mm.name}**_`)

        message.channel.send(failed)
    })
  };