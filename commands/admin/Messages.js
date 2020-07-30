const Discord = require("discord.js");
const { client, database, msg, colors, fs} = require("../../rox");

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if (message.member.roles.cache.has(dataServer.adminRole) || message.member.hasPermission('ADMINISTRATOR')) {

        if (!args[0]) {
            return await msg.sendMsg("INVALID_ARGS_TEXTS", message, dataServer)
        }

        switch (args[0]) {
            case "joinText":
                if (!args[1]) {
                    return await msg.sendMsgA(language("MISSED_TEXT", dataServer.prefix, "jq"), message, dataServer)
                }
                await update("join", args.slice(1).join(" "), message.guild.id);
                await msg.sendMsg("UPDATED", message, dataServer);
                break;
            case "quitText":
                if (!args[1]) {
                    return await msg.sendMsgA(language("MISSED_TEXT", dataServer.prefix, "jq"), message, dataServer)
                }
                await update("quit", args.slice(1).join(" "), message.guild.id);
                await msg.sendMsg("UPDATED", message, dataServer);
                break;
            case "lvlUp":
                if (!args[1]) {
                    return await msg.sendMsgA(language("MISSED_TEXT", dataServer.prefix, "lvlup"), message, dataServer)
                }
                await update("lvlUp", args.slice(1).join(" "), message.guild.id);
                await msg.sendMsg("UPDATED", message, dataServer);
                break;
            default:
                await msg.sendMsg("INVALID_ARGS_TEXTS", message, dataServer)
                break;
        }
    } else {
        return await msg.sendMsg("PERMISSION_DENIED", message, dataServer);
    }
}

async function update(type, text, guildid){
    switch (type) {
        case "join":
            var j = `UPDATE servers SET joinText = '${text}' WHERE guildid = '${guildid}'`;
            database.query(j, function (err) {
                if (err) throw err;
            });
            break;

        case "quit":
            var q = `UPDATE servers SET quitText = '${text}' WHERE guildid = '${guildid}'`;
            database.query(q, function (err) {
                if (err) throw err;
            });
            break;

        case "lvlUp":
            var lvl = `UPDATE servers SET lvlUpMsg = '${text}' WHERE guildid = '${guildid}'`;
            database.query(lvl, function (err) {
                if (err) throw err;
            });
            break;
    }
}

exports.help = {
    name: "messages",
}