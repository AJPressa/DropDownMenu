const Discord = require('discord.js');
const db = require("quick.db");
const config = require('../../config');

module.exports = {
    name: 'suggest',
    aliases: [],
    category: 'Misc',
    utilisation: '{prefix}suggest [your suggestion]',
  
    run: async (client, message, args) => {

        const caEmbed = new Discord.MessageEmbed();
        caEmbed.setColor("RED");
        caEmbed.setDescription("**Suggestions channel not set!** (Contact server owner)");

        const naEmbed = new Discord.MessageEmbed();
        naEmbed.setColor("RED");
        naEmbed.setDescription("**You didn't suggest anything!**");

        let suggest_channel = db.get(`suggestions-channel_${message.guild.id}`);
        if(suggest_channel === null) {
            return message.channel.send(caEmbed);
        } else {

            if (!args) message.channel.send(naEmbed);
            let customArgs = args.slice(0).join(' ');
            var channel = client.channels.cache.get(suggest_channel);

            const doneEmbed = new Discord.MessageEmbed();
            doneEmbed.setColor("PURPLE");
            doneEmbed.setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic : true})}`);
            doneEmbed.setDescription(`<:CheckMark:906164204455723058> your suggestion has been sent to <#${suggest_channel}> to be voted on.`);

            message.channel.send(doneEmbed);

            const suggestEmbed = new Discord.MessageEmbed();
            suggestEmbed.setColor("PURPLE")
                              suggestEmbed.setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic : true})}`);
            suggestEmbed.setDescription(`\`${customArgs}\``);
            suggestEmbed.setFooter(`Suggested By ${message.author.username} | Powered by The Crazy`);
            let sentEmbed = channel.send(suggestEmbed).then(function (message) {
                message.react("906164204455723058")
                message.react("896786444507574313")
            }).catch(function() {
                return;
            });
        }
    },
  };
//kya huA rlx