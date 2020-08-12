const Discord = require("discord.js");
const { client, database, msg, colors, fs} = require("../../rox");
module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if (await msg.Role(message.member, "admin", message, dataServer) === true || message.member.hasPermission('ADMINISTRATOR')) {
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
            case "lvlUpText":
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
    let t = Buffer.from(text).toString('base64')

    switch (type) {
        case "join":
            var j = `UPDATE servers SET joinText = '${t}' WHERE guildid = '${guildid}'`;
            database.query(j, function (err) {
                if (err) throw err;
            });
            break;
        case "quit":
            var q = `UPDATE servers SET quitText = '${t}' WHERE guildid = '${guildid}'`;
            database.query(q, function (err) {
                if (err) throw err;
            });
            break;
        case "lvlUp":
            var lvl = `UPDATE servers SET lvlUpMsg = '${t}' WHERE guildid = '${guildid}'`;
            database.query(lvl, function (err) {
                if (err) throw err;
            });
            break;
    }
}

exports.help = {
    name: "messages",
}
