const Discord = require("discord.js");
const { client, botConf } = require('../../../index');
const fs = require("fs");
const prefixs = require("../../../servers/config");

client.on('message',message => {
    if (!message.guild) return;
    let db = JSON.parse(fs.readFileSync("database/guilds/" + message.guild.id + ".json", "utf8"));
    const prefix = db["prefix"];

    const language = require(`../../../languages/${db["lang"]}.js`);

    if (message.content.startsWith(prefix + "left")) {
        if(prefixs.teamMemberIds.includes(message.author.id)){
            message.channel.send(language("LEFT",message.author.username))
            client.guilds.get(message.guild.id).leave()
        }else{
            return message.channel.send(language("NOT_IN_TEAM"));
        }
    }
});