const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "help",
    execute(message ,args,){
        const newEmbed = new Discord.MessageEmbed()
            .setThumbnail(message.guild.iconURL({dynamic : true}))
            .setColor('#875fe6')
            .setTitle('Cosmos Helper Commands')
            .addFields(
          
                {
                    name: "c!suggest",
                    value: `Make a suggestion using this command!`,
                    inline: true
                },
                {
                    name: " c!user",
                    value: `Shows User Information!`,
                    inline: true
                }

            )
            .setTimestamp()
            .setFooter(`c!help - Made by Cosmos#2424 `)
            message.channel.send(newEmbed);
    }
}
