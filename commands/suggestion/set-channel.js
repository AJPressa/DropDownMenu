const Discord = require("discord.js");
const db = require("quick.db");
const config = require('../../config');

module.exports = {
    name: 'set-channel',
    aliases: [],
    utilisation: '{prefix}set-channel #name',
  
    run: async (client, message, args) => {

        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send("You dont have permission to do that !")
       }

        let channel = message.mentions.channels.first() || message.channel;
        db.set(`suggestions-channel_${message.guild.id}`, channel.id);

        let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Channel Set Successfully")
        .setDescription(`You set the suggestions channel to \`${channel.name}\``);
        
        message.channel.send(embed).catch(function() {
            return message.channel.send("An internal error occured!")
        })
    },
  };