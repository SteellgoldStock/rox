const Discord = require("discord.js");
const { client, database, msg, colors, fs} = require("../../rox");
const langs = ["fr","en","es"]
module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if (message.member.roles.cache.has(dataServer.adminRole) || message.member.hasPermission('ADMINISTRATOR')) {

        if (!args[0]) {
            return await msg.sendMsg("INVALID_ARGS_CHANNELS", message, dataServer)
        }
        const mentionedChannel = message.mentions.channels.first();

        switch (args[0]) {
            case "joinquit":
                if (!mentionedChannel) {
                    return await msg.sendMsg("MENTION_CHANNEL", message, dataServer)
                }
                await update("jq", mentionedChannel.id, message.guild.id);
                await msg.sendMsg("UPDATED", message, dataServer);
                break;
            case "logs":
                if (!mentionedChannel) {
                    return await msg.sendMsg("MENTION_CHANNEL", message, dataServer)
                }
                await update("logs", mentionedChannel.id, message.guild.id);
                await msg.sendMsg("UPDATED", message, dataServer);
                break;
            default:
                await msg.sendMsg("INVALID_ARGS_CHANNELS", message, dataServer)
        }
    }else{
        return await msg.sendMsg("PERMISSION_DENIED", message, dataServer);
    }
}

async function update(type, id, guildid){
    switch (type) {
        case "jq":
            var jq = `UPDATE servers SET announceChannel = '${id}' WHERE guildid = '${guildid}'`;
            database.query(jq, function (err) {
                if (err) throw err;
            });
            break;

        case "logs":
            var logs = `UPDATE servers SET logsChannel = '${id}' WHERE guildid = '${guildid}'`;
            database.query(logs, function (err) {
                if (err) throw err;
            });
            break;
    }
}

exports.help = {
    name: "channels",
}