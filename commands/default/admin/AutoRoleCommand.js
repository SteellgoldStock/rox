const Discord = require("discord.js");
const { client, botConf } = require('../../../index');
const fs = require("fs");
const messages = require("./../../../events/functions/messages");

client.on('message',message => {
    if (!message.guild) return;
    let db = JSON.parse(fs.readFileSync("database/guilds/" + message.guild.id + ".json", "utf8"));
    const prefix = db["prefix"];

    const language = require(`../../../languages/${db["lang"]}.js`);

    if (message.content.startsWith(prefix + "joinRole")) {
        if(botConf.maintenance == true){
            const config = require("./../../../servers/config");
            if(!config.teamMemberIds.includes(message.author.id)){
                messages.inMaintenance(message);
                return;
            }
        }

        let status = message.content.split(" ")[1];
        let roleId = message.content.split(" ")[2];

        if (!status) {
            return message.channel.send(language("MISSING_ARGUMENTS"));
        }

        switch (status) {
            case "on":
                if (db["autoRole"] == true) {
                    return message.channel.send(language("AUTO_ROLE_ALREADY_ENABLE", prefix));
                }

                if (roleId === null) {
                    db["autoRole"] = true;
                    fs.writeFileSync("database/guilds/" + message.guild.id + ".json", JSON.stringify(db), "utf-8");
                    return message.channel.send(language("AUTO_ROLE_ENABLE", roleId));
                } else {
                    db["autoRole"] = true;
                    db["autoRoleId"] = roleId;
                    fs.writeFileSync("database/guilds/" + message.guild.id + ".json", JSON.stringify(db), "utf-8");
                    return message.channel.send(language("AUTO_ROLE_ENABLE", roleId));
                }
                break;
            case "off":
                if (db["autoRole"] == false) {
                    return message.channel.send(language("AUTO_ROLE_ALREADY_DISABLE", prefix));
                }

                db["autoRole"] = false;
                fs.writeFileSync("database/guilds/" + message.guild.id + ".json", JSON.stringify(db), "utf-8");
                return message.channel.send(language("AUTO_ROLE_DISABLE"));
                break;
        }
    }
});