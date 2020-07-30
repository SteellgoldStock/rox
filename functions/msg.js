const Discord = require('discord.js');
const { client, botConfg, fs, colors, database, version} = require("../rox");

exports.sendMsg = async(text, message, dataServer = null) => {
    const guildLanguage = dataServer.lang;
    const language = require(`../database/lang/${guildLanguage}`);

    if(dataServer.msgEmbed !== 0){
        let embed = new MessageEmbed()
            .addTitle(dataServer.embedTitle + version)
            .setDescription(language(text))
            .addColor(dataServer.embedColor)
        message.channel.send(embed);
    }else{
        message.channel.send(language(text));
    }
}

exports.sendMsgA = async(text, message, dataServer = null) => {
    message.channel.send(text);
}