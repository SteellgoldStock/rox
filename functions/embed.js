const Discord = require('discord.js');
const { client, botConfg, fs, colors, database, msg} = require("../rox");

exports.bColor = "#d97d61";
exports.bFooter = msg.nameversion;

exports.embed0Field = async(channel, title, description, color, footer) => {
    let embed = new Discord.MessageEmbed()
    embed.setTitle(title);
    embed.setDescription(description);
    embed.setColor(color);
    embed.setTimestamp();
    embed.setFooter(footer)
    channel.send(embed)
}

exports.embed1Field = async(channel, title, description, color, fieldTitle, fieldDescription, footer) => {
    let embed = new Discord.MessageEmbed()
    embed.setTitle(title)
    embed.setDescription(description);
    embed.setColor(color);
    embed.addField(fieldTitle,fieldDescription)
    embed.setTimestamp();
    embed.setFooter(footer)
    channel.send(embed)
}