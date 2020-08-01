const Discord = require('discord.js');
const { client, botConfg, fs, colors, database} = require("../rox");
exports.nameversion = "Rox • v0.1";
exports.pversion = " • v0.1";
exports.version = "v0.1";

exports.sendMsg = async(text, message, dataServer = null) => {
    const guildLanguage = dataServer.lang;
    const language = require(`../database/lang/${guildLanguage}`);

    if (dataServer.isGold !== 0) {
        if (dataServer.msgEmbed !== 0) {
            let embed = new Discord.MessageEmbed()
            embed.setTitle(dataServer.embedTitle)
            embed.setDescription(language(text))

                embed.setThumbnail(dataServer.embedImgURL)

            embed.setColor(dataServer.embedColor)
            embed.setTimestamp()
            embed.setFooter('Rox • ' + exports.version, client.user.avatarURL())
            message.channel.send(embed);
        } else {
            message.channel.send(language(text));
        }
    } else {
        message.channel.send(language(text));
    }
}

exports.sendMsgA = async(text, message, dataServer = null) => {
    if (dataServer.isGold !== 0) {
        if (dataServer.msgEmbed !== 0) {
            let embed = new Discord.MessageEmbed()
            embed.setTitle(dataServer.embedTitle)
            embed.setDescription(text)

            embed.setThumbnail(dataServer.embedImgURL)

            embed.setColor(dataServer.embedColor)
            embed.setTimestamp()
            embed.setFooter('Rox • ' + exports.version, client.user.avatarURL())
            message.channel.send(embed);
        } else {
            message.channel.send(text);
        }
    } else {
        message.channel.send(text);
    }
}

exports.sendMsgI = async(text, member1, member2, image, url, message, dataServer = null) => {

    const guildLanguage = dataServer.lang;
    const language = require(`../database/lang/${guildLanguage}`);

    if (dataServer.isGold !== 0) {
        if (dataServer.msgEmbed !== 0) {
            let embed = new Discord.MessageEmbed()
            embed.setTitle(dataServer.embedTitle)
            embed.setDescription(language(text, member1, member2))
            embed.setImage(url)

            embed.setThumbnail(dataServer.embedImgURL)

            embed.setColor(dataServer.embedColor)
            embed.setTimestamp()
            embed.setFooter('Rox • ' + exports.version, client.user.avatarURL())
            message.channel.send(embed);
        } else {
            message.channel.send(language(text, member1, member2), image);
        }
    } else {
        message.channel.send(language(text, member1, member2), image);

    }
}