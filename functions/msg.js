const Discord = require('discord.js');
const { client, botConfg, fs, colors, database} = require("../rox");
exports.nameversion = "Rox • v0.1";
exports.pversion = " • v0.1";
exports.version = "v1.0";

exports.sendMsg = async(text, message, dataServer = null) => {
    const guildLanguage = dataServer.lang;
    const language = require(`../database/lang/${guildLanguage}`);

    if (dataServer.isGold === 1) {
        if (dataServer.msgEmbed !== 0) {
            let embed = new Discord.MessageEmbed()
            embed.setTitle(dataServer.embedTitle)
            embed.setDescription(language(text))

            if (dataServer.embedImgURL !== "none") {
                embed.setThumbnail(dataServer.embedImgURL)
            }

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
    if (dataServer.isGold === 1) {
        if (dataServer.msgEmbed !== 0) {
            let embed = new Discord.MessageEmbed()
            embed.setTitle(dataServer.embedTitle)
            embed.setDescription(text)

            if (dataServer.embedImgURL !== "none") {
                embed.setThumbnail(dataServer.embedImgURL)
            }

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

exports.sendMsgL = async(text, message, dataServer = null, channelID, guildID) => {
    let guildTo = client.guilds.cache.get(guildID);
    let channelTo = guildTo.channels.cache.get(channelID);

    if (dataServer.isGold === 1) {
        if (dataServer.msgEmbed !== 0) {
            let embed = new Discord.MessageEmbed()
            embed.setTitle(dataServer.embedTitle)
            embed.setDescription(text)

            if (dataServer.embedImgURL !== "none") {
                embed.setThumbnail(dataServer.embedImgURL)
            }

            embed.setColor(dataServer.embedColor)
            embed.setTimestamp()
            embed.setFooter('Rox • ' + exports.version, client.user.avatarURL())
            channelTo.send(embed);
        } else {
            channelTo.send(text);
        }
    } else {
        channelTo.send(text);
    }
}



exports.sendMsgI = async(text, member1, member2, image, url, message, dataServer = null) => {

    const guildLanguage = dataServer.lang;
    const language = require(`../database/lang/${guildLanguage}`);

    if (dataServer.isGold === 1) {
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

exports.Role = async(member, role, message, dataServer = null) => {
    let count = 0;
    dataServer.adminRole.split(' ').forEach(m => {member.roles.cache.has(m)})

    if(role == "admin"){
        dataServer.adminRole.split(' ').forEach(m => {
            member.roles.cache.has(m)
            if(member.roles.cache.has(m)){
                count = count + 1;
            }
        })

        if(count < 1){
            return false;
        } else {
            return true;
        }
    } else if (role == "modo"){
        dataServer.modRole.split(' ').forEach(m => {
            member.roles.cache.has(m)
            if(member.roles.cache.has(m)){
                count = count + 1;
                return true;
            }
        })

        if(count < 1){
            return false;
        } else {
            return true;
        }
    }
}