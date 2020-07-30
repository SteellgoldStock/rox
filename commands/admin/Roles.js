const Discord = require("discord.js");
const { client, database, msg, colors, fs} = require("../../rox");
module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if (message.member.roles.cache.has(dataServer.adminRole) || message.member.hasPermission('ADMINISTRATOR')) {
        if (!args[0]) {
            return await msg.sendMsg("INVALID_ARGS_ROLES", message, dataServer)
        }
        const mentionedRole = message.mentions.roles.first();

        switch (args[0]) {
            case "adminRole":
                if (!mentionedRole) {
                    return await msg.sendMsg("MENTION_ROLE", message, dataServer)
                }
                await update("ar", mentionedRole.id, message.guild.id);
                await msg.sendMsg("UPDATED", message, dataServer);
                break;
            case "modRole":
                if (!mentionedRole) {
                    return await msg.sendMsg("MENTION_ROLE", message, dataServer)
                }
                await update("mr", mentionedRole.id, message.guild.id);
                await msg.sendMsg("UPDATED", message, dataServer);
                break;
            case "autoRole":
                if (!mentionedRole) {
                    return await msg.sendMsg("MENTION_ROLE", message, dataServer)
                }
                await update("aur", mentionedRole.id, message.guild.id);
                await msg.sendMsg("UPDATED", message, dataServer);
                break;
            default:
                await msg.sendMsg("INVALID_ARGS_ROLES", message, dataServer)
                break;
        }
    } else {
        return await msg.sendMsg("PERMISSION_DENIED", message, dataServer);
    }
}

async function update(type, id, guildid){
    switch (type) {
        case "ar":
            var ar = `UPDATE servers SET adminRole = '${id}' WHERE guildid = '${guildid}'`;
            database.query(ar, function (err) {
                if (err) throw err;
            });
            break;

        case "mr":
            var mr = `UPDATE servers SET modRole = '${id}' WHERE guildid = '${guildid}'`;
            database.query(mr, function (err) {
                if (err) throw err;
            });
            break;

        case "aur":
            var aur = `UPDATE servers SET autoRole = '${id}' WHERE guildid = '${guildid}'`;
            database.query(aur, function (err) {
                if (err) throw err;
            });
            break;
    }
}

exports.help = {
    name: "roles",
}