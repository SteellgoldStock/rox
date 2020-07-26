const Discord = require('discord.js');
const { client, botConfg, fs, colors, database } = require("../rox");

exports.sendMsg = async(text, message, dataServer = null) => {
    const guildLanguage = dataServer.lang;
    const language = require(`../database/lang/${guildLanguage}`);

    message.channel.send(language(text));
}