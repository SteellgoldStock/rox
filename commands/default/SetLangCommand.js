const Discord = require("discord.js");
const { client, guildLanguages, guildPrefixs, botConf } = require('../../index');
const fs = require("fs");
const messages = require("./../../events/functions/messages");

client.on('message',message => {
    if (!message.guild) return;

    const langages = ["en", "fr", "es"]
    const newLanguageName = message.content.split(" ")[1];
    const prefix = guildPrefixs[message.guild.id];
    const guildLanguage = guildLanguages[message.guild.id] || "en";
    const language = require(`../../languages/${guildLanguage}`);

    if(message.content.startsWith(prefix + "lang")){
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
        // Update our json database
        guildLanguages[message.guild.id] = newLanguageName;
        fs.writeFileSync("servers/guilds-language.json", JSON.stringify(guildLanguages), "utf-8");
        // Gets the new language
        const newLanguage = require(`../../languages/${newLanguageName}`);
        // Send a success message
        message.channel.send(newLanguage("LANGUAGE_UPDATED"));
    }
});