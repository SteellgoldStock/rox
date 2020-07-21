const Discord = require("discord.js");
const { client, botConf } = require('../../../index');
const fs = require("fs");
const messages = require("./../../../events/functions/messages");

client.on('message',message => {
    if (!message.guild) return;
    let db = JSON.parse(fs.readFileSync("database/guilds/" + message.guild.id + ".json", "utf8"));
    const prefix = db["prefix"];

    const language = require(`../../../languages/${db["lang"]}.js`);

    if (message.content.startsWith(prefix + "translate") || message.content.startsWith(prefix + "tr")) {
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        if(botConf.maintenance == true){
            const config = require("./../../../servers/config");
            if(!config.teamMemberIds.includes(message.author.id)){
                messages.inMaintenance(message);
                return;
            }

        }

        if(!args[1]){
            return message.channel.send(language("MISSING_ARGUMENTS"));
        }

        if(!args[2]){
            return message.channel.send(language("MISSING_ARGUMENTS"));
        }

        if(!args[3]){
            return message.channel.send(language("MISSING_ARGUMENTS"));
        }

        var unirest = require("unirest");

        var req = unirest("GET", "https://hirak-translate.p.rapidapi.com/tr/");

        req.query({
            "to": args[1],
            "txt": args.slice(3).join(" "),
            "from": args[2]
        });

        req.headers({
            "x-rapidapi-host": "hirak-translate.p.rapidapi.com",
            "x-rapidapi-key": "e61f24d88dmsh98ac9f86cab6f8dp10891cjsna0d340ea5260",
            "useQueryString": true
        });


        req.end(function (res) {
            if (res.error) return message.channel.send("```" + res.error + "```");

            message.channel.send(language("TRANSLATED_TEXT",args[1]) + "\n" + res.body["result"]);
        });

    }
});