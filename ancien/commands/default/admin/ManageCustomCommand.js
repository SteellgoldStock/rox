const Discord = require("discord.js");
const { client, botConf } = require('../../../index');
const fs = require("fs");
const messages = require("./../../../events/functions/messages");

client.on('message',message => {
    if (!message.guild) return;
    let db = JSON.parse(fs.readFileSync("database/guilds/" + message.guild.id + ".json", "utf8"));
    let dbC = JSON.parse(fs.readFileSync("database/guildsCommands/" + message.guild.id + ".json", "utf8"));
    const prefix = db["prefix"];

    const language = require(`../../../languages/${db["lang"]}.js`);

    if (message.content.startsWith(prefix + "customCmds")) {
        if (botConf.maintenance == true) {
            const config = require("../../../servers/config");
            if (!config.teamMemberIds.includes(message.author.id)) {
                messages.inMaintenance(message);
                return;
            }
        }

        const args = message.content.slice(prefix.length).trim().split(/ +/g);

        switch (args[1]) {
            case "add":
                if (Object.keys(dbC).includes(args[2])) {
                    return message.channel.send(language("CC_EXIST", prefix));
                }

                if (!args[3]) {
                    return message.channel.send(language("MISSING_ARGUMENTS"));
                }

                if (db["preniumAccess"] == true) {
                    dbC[args[2]] = args.slice(3).join(" ");
                    fs.writeFileSync("database/guildsCommands/" + message.guild.id + ".json", JSON.stringify(dbC), "utf-8");
                    console.log(dbC)
                    return message.channel.send(language("CC_ADD", prefix + args[2]));
                } else {
                    if (db["countCC"] > db["limitCC"] - 1) {
                        return message.channel.send(language("CC_MAX", db["countCC"]))
                    } else {
                        dbC[args[2]] = args.slice(3).join(" ");
                        fs.writeFileSync("database/guildsCommands/" + message.guild.id + ".json", JSON.stringify(dbC), "utf-8");

                        db["countCC"] = db["countCC"] + 1;
                        fs.writeFileSync("database/guilds/" + message.guild.id + ".json", JSON.stringify(db), "utf-8");

                        message.channel.send(language("CC_SEND_LIMIT", db["countCC"]))
                        return message.channel.send(language("CC_ADD", prefix + args[2]));
                    }
                }
                break;
            case "del":
                if (!Object.keys(dbC).includes(args[2])) {
                    return message.channel.send(language("CC_NOT_EXIST", prefix));
                }

                let cmd = args[2];
                delete dbC[cmd];
                fs.writeFileSync("database/guildsCommands/" + message.guild.id + ".json", JSON.stringify(dbC), "utf-8");
                return message.channel.send(language("CC_DELETED", prefix + cmd));
                break;

            case "update":
                if (!Object.keys(dbC).includes(args[2])) {
                    return message.channel.send(language("CC_NOT_EXIST", prefix));
                }

                if (!args[3]) {
                    return message.channel.send(language("MISSING_ARGUMENTS"));
                }

                db["countCC"] = db["countCC"] - 1;
                fs.writeFileSync("database/guilds/" + message.guild.id + ".json", JSON.stringify(db), "utf-8");

                dbC[args[2]] = args.slice(3).join(" ");
                fs.writeFileSync("database/guildsCommands/" + message.guild.id + ".json", JSON.stringify(dbC), "utf-8");
                return message.channel.send(language("CC_UPDATED", args.slice(3).join(" ")))
                break;
        }
    }
});