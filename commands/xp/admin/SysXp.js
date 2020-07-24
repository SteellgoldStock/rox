const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages} = require("../../../rox");

module.exports.run = async (client, message, args, fs, botConfg, colors, db, dbC, dbXp, language) => {
    if (!message.member.roles.cache.find(r => r.name === db["adminRole"])) {
        return await messages.sendMsg(message, message.guild.id, language("PERMISSION_DENIED"), message.guild.name);
    }

    let type = args[0];
    let value = args[1];

    if (!type) {
        return await messages.sendMsg(message, message.guild.id, language("XP_TYPE_HELP", db["prefix"]), message.guild.name)
    }

    switch (type) {
        case "status":
            if (!value) {
                return await messages.sendMsg(message, message.guild.id, language("XP_TYPE_STATUS", db["prefix"]), message.guild.name)
            }

            switch (value) {
                case "on":
                    db["sysXp"] = true;
                    fs.writeFileSync("database/guilds/base/" + message.guild.id + ".json", JSON.stringify(db), "utf-8");
                    await messages.sendMsg(message, message.guild.id, language("UPDATED"), message.guild.name);
                    break;
                case "off":
                    db["sysXp"] = false;
                    fs.writeFileSync("database/guilds/base/" + message.guild.id + ".json", JSON.stringify(db), "utf-8");
                    await messages.sendMsg(message, message.guild.id, language("UPDATED"), message.guild.name);
                    break;
                default:
                    await messages.sendMsg(message, message.guild.id, language("XP_TYPE_STATUS", db["prefix"]), message.guild.name)
                    break;
            }
            break;
    }
}

exports.help = {
    name: "xpconf",
    type: "fun"
}