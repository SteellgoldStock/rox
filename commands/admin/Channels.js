const Discord = require("discord.js");
const { client, database, msg, colors, fs} = require("../../rox");
const langs = ["fr","en","es"]
module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if (await msg.Role(message.member, "admin", message, dataServer) === true || message.member.hasPermission('ADMINISTRATOR')) {

        if (!args[0]) {
            return await msg.sendMsg("INVALID_ARGS_CHANNELS", message, dataServer)
        }
        const mentionedChannel = message.mentions.channels.first();

        switch (args[0]) {
            case "unset":
                switch (args[1]){
                    case "joinquit":
                        await unset("jq", " ", message.guild.id);
                        await msg.sendMsg("UPDATED", message, dataServer);
                        break;
                    case "logs":
                        await unset("logs", " ", message.guild.id);
                        await msg.sendMsg("UPDATED", message, dataServer);
                        break;
                    case "ticket":
                        await unset("ticket", " ", message.guild.id);
                        await msg.sendMsg("UPDATED", message, dataServer);
                        break;
                    case "commands":
                        await unset("cmds", " ", message.guild.id);
                        await msg.sendMsg("UPDATED", message, dataServer);
                        break;
                    case "is":
                        await unset("is", " ", message.guild.id);
                        await msg.sendMsg("UPDATED", message, dataServer);
                        break;
                }
                break;
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
            case "ticket":
                if(!args[1]){
                    return await msg.sendMsg("CATEGORY_NAME_NFOUND",message,dataServer)
                }

                await update("tickets", args[1], message.guild.id);
                await msg.sendMsg("UPDATED", message, dataServer);
                break;
            case "commands":
                if (!mentionedChannel) {
                    return await msg.sendMsg("MENTION_CHANNEL", message, dataServer)
                }
                await update("cmds", mentionedChannel.id, message.guild.id);
                await msg.sendMsg("UPDATED", message, dataServer);
                break;
            case "is":
                if (!mentionedChannel) {
                    return await msg.sendMsg("MENTION_CHANNEL", message, dataServer)
                }

                if(!team.includes(message.author.id)) return message.channel.send("Cette fonctionnalitées a été temporairement désactiver nous mettons à jour notre système d'interserver !");

                await update("is", mentionedChannel.id, message.guild.id);
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
        case "tickets":
            var tck = `UPDATE servers SET ticketCat = '${id}' WHERE guildid = '${guildid}'`;
            database.query(tck, function (err) {
                if (err) throw err;
            });
            break;
        case "cmds":
            var cmds = `UPDATE servers SET commandsChannel = '${id}' WHERE guildid = '${guildid}'`;
            database.query(cmds, function (err) {
                if (err) throw err;
            });
            break;
        case "is":
            var is = `UPDATE servers SET interServerChannel = '${id}' WHERE guildid = '${guildid}'`;
            database.query(is, function (err) {
                if (err) throw err;
            });
            break;
    }
}
async function unset(type, id, guildid){
    switch (type) {
        case "jq":
            var jq = `UPDATE servers SET announceChannel = 'false' WHERE guildid = '${guildid}'`;
            database.query(jq, function (err) {
                if (err) throw err;
            });
            break;
        case "logs":
            var logs = `UPDATE servers SET logsChannel = 'false' WHERE guildid = '${guildid}'`;
            database.query(logs, function (err) {
                if (err) throw err;
            });
            break;
        case "tickets":
            var tck = `UPDATE servers SET ticketCat = '----- Ticket -----' WHERE guildid = '${guildid}'`;
            database.query(tck, function (err) {
                if (err) throw err;
            });
            break;
        case "cmds":
            var cmds = `UPDATE servers SET commandsChannel = 'false' WHERE guildid = '${guildid}'`;
            database.query(cmds, function (err) {
                if (err) throw err;
            });
            break;
        case "is":
            var is = `UPDATE servers SET interServerChannel = 'false' WHERE guildid = '${guildid}'`;
            database.query(is, function (err) {
                if (err) throw err;
            });

            var isID = `UPDATE servers SET interServerNetwork =  WHERE guildid = '${guildid}'`;
            database.query(is, function (err) {
                if (err) throw err;
            });
            break;
    }
}

exports.help = {
    name: "channels",
}