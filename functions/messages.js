const Discord = require('discord.js');
const { client, botConfg, fs, colors } = require("../rox");

exports.sendMsg = async(message, id,text, guildName) => {
    let db = JSON.parse(fs.readFileSync("database/guilds/base/" + id + ".json", "utf8"));

    if (!db["prenium"] == "prenium") {
        return message.channel.send(text);
    }

    if (!db["msgEmbed"] == true) {
        return message.channel.send(text);
    }


    let embed = new Discord.MessageEmbed()
    .setTitle(getTitle(db,guildName))
    .setDescription(text)
    .setThumbnail(getImg(db))
    .setColor("#b38a5d")

    return message.channel.send(embed);
}

exports.sendEvMsg = async(channel, id,text, guildName) => {
    let db = JSON.parse(fs.readFileSync("database/guilds/base/" + id + ".json", "utf8"));

    if (!db["prenium"] == "prenium") {
        return channel.send(text);
    }

    if (!db["msgEmbed"] == true) {
        return channel.send(text);
    }


    let embed = new Discord.MessageEmbed()
        .setTitle(getTitle(db,guildName))
        .setDescription(text)
        .setThumbnail(getImg(db))
        .setColor("#b38a5d")

    return channel.send(embed);
}

exports.sendErrorMsg = async(channel, text) => {
    return channel.send("```" + text + "```");
}

function getTitle(db, serverName) {
    if(db["embedTitle"] == null || db["embedTitle"] == "null"){
        return serverName + " - Default Title"
    }else{
        return db["embedTitle"];
    }
}

function getImg(db) {
    if(db["embedImg"] == null || db["embedImg"] == "null"){
        return null;
    }else{
        return db["embedImg"];
    }
}

exports.sendTags = async(channel, id, lang) => {
    let embed = new Discord.MessageEmbed()
        .setTitle("Tags")
        .addField("Custom Commands - Tags",
            "`{mention}`:" + lang("MENTION") + "\n" +
            "`{username}`:" + lang("MENTION"))
        .setThumbnail(getImg(db))
        .setColor("#b38a5d")

    return channel.send(embed);
}