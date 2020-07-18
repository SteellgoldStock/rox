const Discord = require("discord.js");
const { client, guildLanguages, guildPrefixs, botConf } = require('../../index');
const fs = require("fs");
const messages = require("./../../events/functions/messages");

client.on('message',message => {
    if (!message.guild) return;

    const langages = ["en", "fr"]
    const newLanguageName = message.content.split(" ")[1];
    const prefix = guildPrefixs[message.guild.id];
    const guildLanguage = guildLanguages[message.guild.id] || "en";
    const language = require(`../../languages/${guildLanguage}`);

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === "lang"){
        if (botConf["maintenance"] == "true") {
            if (!config.teamMemberIds.includes(message.author.id)) {
                messages.inMaintenance(message);
                return;
            }
        }

        if(!newLanguageName){
            return message.channel.send(language("MISSING_LANGUAGE"));
        }
        if(!langages.includes(newLanguageName)){
            return message.channel.send(language("LANGUAGE_NO_EXIST"));
        }

        const newLanguage = require(`../../languages/${newLanguageName}`);
        // Send a success message
        message.channel.send(newLanguage("LANGUAGE_UPDATED"));
    }
});