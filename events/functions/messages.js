const Discord = require('discord.js');
const config = require('./../../servers/config');
const { client, botConf } = require('../../index');
const fs = require('fs');

exports.inMaintenance = async(message) => {
    let db = JSON.parse(fs.readFileSync("database/guilds/" + message.guild.id + ".json", "utf8"));
    const guildLanguage = db["lang"] || "en";
    const language = require(`../../languages/${guildLanguage}`);
    message.channel.send(language("MAINTENANCE_MESSAGE", botConf["maintenanceReason"]));
}