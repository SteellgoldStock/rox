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
    .setColor("#7b6d36")

    return message.channel.send(embed);
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