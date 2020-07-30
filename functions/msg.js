const Discord = require('discord.js');
const { client, botConfg, fs, colors, database} = require("../rox");
exports.nameversion = "Rox • v0.1";
exports.pversion = " • v0.1";
exports.version = "v0.1";

exports.sendMsg = async(text, message, dataServer = null) => {
    const guildLanguage = dataServer.lang;
    const language = require(`../database/lang/${guildLanguage}`);

    if(dataServer.msgEmbed !== 0){
        let embed = new Discord.MessageEmbed()
            embed.setTitle(dataServer.embedTitle)
            embed.setDescription(language(text))
            embed.setThumbnail(dataServer.embedImgURL)
            embed.setColor(dataServer.embedColor)
            embed.setTimestamp()
            embed.setFooter('Rox • ' + exports.version,client.user.avatarURL())
        message.channel.send(embed);
    }else{
        message.channel.send(language(text));
    }
}

exports.sendMsgA = async(text, message, dataServer = null) => {
    message.channel.send(text);
}