const Discord = require('discord.js');
const config = require('./../../servers/config');
const { client, guildLanguages, guildPrefixs, botConf } = require('../../index');

exports.inMaintenance = async(message) => {
    const guildLanguage = guildLanguages[message.guild.id] || "en";
    const language = require(`../../languages/${guildLanguage}`);
    message.channel.send(language("MAINTENANCE_MESSAGE", botConf["maintenanceReason"]));
}