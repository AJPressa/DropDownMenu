
const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "commands",
  aliases: ["c"],
  description: "Shows all commands of the bot",

  run: async (client, message, args) => {
    let helpEmbed = new MessageEmbed()
      .setTitle("The Crazy MY COMMANDS COUNT")
      .setDescription("`83`Commands")
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter("")
      .setColor("#FFFFF0")


let button1 = new MessageButton()
    .setLabel(`MY COMMANDS : 83`)
    .setURL('https://youtube.com/DevelopersZone')
    .setStyle("LINK");
    
 
      return message.channel.send(helpEmbed,{
        button: [button1],
          });

  },
};