const Discord = require("discord.js");
const { client, botConf } = require('../../index');
const fs = require("fs");
const messages = require("../../events/functions/messages");
const prefixs = require("../../servers/config");

client.on('message',message => {
    if (!message.guild) return;
    let db = JSON.parse(fs.readFileSync("database/guilds/" + message.guild.id + ".json", "utf8"));
    let dbC = JSON.parse(fs.readFileSync("database/guildsCommands/" + message.guild.id + ".json", "utf8"));
    const prefix = db["prefix"];

    const language = require(`../../languages/${db["lang"]}.js`);

    Object.keys(dbC).forEach(function(prop) {
        exports.commandName = prop;

        if (message.content.startsWith(prefix + exports.commandName)) {
            if (botConf.maintenance == true) {
                const config = require("../../servers/config");
                if (!config.teamMemberIds.includes(message.author.id)) {
                    messages.inMaintenance(message);
                    return;
                }
            }

            if (Object.keys(dbC).includes(exports.commandName)) {
                String.prototype.allReplace = function (obj) {
                    var retStr = this;
                    for (var x in obj) {
                        retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
                    }
                    return retStr;
                };

                const args = message.content.slice(prefix.length).trim().split(/ +/g);
                const date = new Date();
                message.channel.send(dbC[prop].allReplace(
                    {
                        '{mention}': "<@" + message.author.id + ">",
                        '{serverName}': message.guild.name,
                        '{username}': message.author.username,
                        '{sayMessage}': args.slice(1).join(" "),
                        '{users}': message.guild.memberCount,
                    }))
            } else {

            }
        }
    });
});