const Discord = require("discord.js");
const { client, botConf } = require('../../index');
const fs = require("fs");
const messages = require("./../../events/functions/messages");

client.on('message',message => {
    if (!message.guild) return;
    let db = JSON.parse(fs.readFileSync("database/guilds/" + message.guild.id + ".json", "utf8"));
    const prefix = db["prefix"];

    const langages = ["en", "fr"]

    if(message.content.startsWith(prefix + "lang")){
        if(botConf.maintenance == true){
            const config = require("./../../servers/config");
            if(!config.teamMemberIds.includes(message.author.id)){
                messages.inMaintenance(message);
                return;
            }
        }

        const newLanguageName = message.content.split(" ")[1];
        const guildLanguage = db["lang"];
        const language = require(`../../languages/${guildLanguage}`);

        if(!newLanguageName){
            return message.channel.send(language("MISSING_ARGUMENTS"));
        }
        if(!langages.includes(newLanguageName)){
            return message.channel.send(language("LANGUAGE_NO_EXIST"));
        }

        db["lang"] = newLanguageName;
        fs.writeFileSync("database/guilds/" + message.guild.id + ".json", JSON.stringify(db), "utf-8");
        const newLanguage = require(`../../languages/${newLanguageName}`);

        return message.channel.send(newLanguage('LANGUAGE_UPDATED'));
    }
});