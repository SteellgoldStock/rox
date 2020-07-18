const Discord = require("discord.js");
const { client, guildLanguages, guildPrefixs, botConf } = require('../../index');
const fs = require("fs");
const messages = require("./../../events/functions/messages");

client.on('message',message => {
    if (!message.guild) return;

    const newPrefix = message.content.split(" ")[1];
    const prefix = guildPrefixs[message.guild.id];
    const guildLanguage = guildLanguages[message.guild.id] || "english";
    const language = require(`../../languages/${guildLanguage}`);

    if(message.content.startsWith(prefix + "prefix")){
        if (botConf["maintenance"] == "true") {
            if (!config.teamMemberIds.includes(message.author.id)) {
                messages.inMaintenance(message);
                return;
            }
        }

        if(!newPrefix){
            return message.channel.send(language("MISSING_ARGUMENTS"));
        }

        guildPrefixs[message.guild.id] = newPrefix;
        fs.writeFileSync("servers/guilds-prefix.json", JSON.stringify(guildPrefixs), "utf-8");

        message.channel.send(language("PREFIX_UPDATED",newPrefix));
    }
});