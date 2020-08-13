const Discord = require("discord.js");
const { client, database, msg, colors, fs} = require("../../rox");
const langs = ["fr","en","es"]
module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if (await msg.Role(message.member, "admin", message, dataServer) === true || message.member.hasPermission('ADMINISTRATOR')) {

        if (!args[0]) {
            return await msg.sendMsg("INVALID_ARGS_XP", message, dataServer)
        }

        const mentionedRole = message.mentions.roles.first();

        switch (args[0]) {
            case "rewards":
                if(!args[1]){ return await msg.sendMsg("INVALID_ARGS_XP_1", message, dataServer) }

                switch (args[1]){
                    case "add":
                        if(!args[2]){ return await msg.sendMsg("INVALID_ARGS_XP_LEVEL_ADD", message, dataServer) }

                        database.query(`SELECT * FROM rewards_level WHERE lvlNum = ${args[2]} AND guildId = ${message.guild.id}`, async function (error, results, fields) {
                            if (error) {
                                return false;
                            } else if (results.length > 0) {
                                return msg.sendMsg("XP_LEVEL_EXIST", message, dataServer);
                            } else {
                                if(!mentionedRole){ return await msg.sendMsg("INVALID_ARGS_XP_LEVEL_ADD", message, dataServer) }
                                return await update("add",args[2],mentionedRole.id, message.guild.id)
                            }
                        });
                    case "update":
                        if(!args[2]){ return await msg.sendMsg("INVALID_ARGS_XP_LEVEL_UPDATE", message, dataServer) }

                        database.query(`SELECT * FROM rewards_level WHERE lvlNum = ${args[2]} AND guildId = ${message.guild.id}`, async function (error, results, fields) {
                            if (error) {
                                return false;
                            } else if (results.length > 0) {
                                if(!mentionedRole){ return await msg.sendMsg("INVALID_ARGS_XP_LEVEL_UPDATE", message, dataServer) }
                                return await update("update",args[2],mentionedRole.id, message.guild.id)
                            } else {
                                return msg.sendMsg("XP_LEVEL_NOT_FOUND", message, dataServer);
                            }
                        });
                    case "remove":
                        if(!args[2]){ return await msg.sendMsg("INVALID_ARGS_XP_LEVEL_ADD", message, dataServer) }

                        database.query(`SELECT * FROM rewards_level WHERE lvlNum = ${args[2]} AND guildId = ${message.guild.id}`, async function (error, results, fields) {
                            if (error) {
                                return false;
                            } else if (results.length > 0) {
                                if(!args[2]){ return await msg.sendMsg("INVALID_ARGS_XP_LEVEL_REMOVE", message, dataServer) }
                                return await update("remove",args[2],mentionedRole.id, message.guild.id)
                            } else {
                                return msg.sendMsg("XP_LEVEL_NOT_FOUND", message, dataServer);
                            }
                        });
                    default:
                        return await msg.sendMsg("INVALID_ARGS_XP_1", message, dataServer)
                }
            case "status":
                break;
            default:
                await msg.sendMsg("INVALID_ARGS_CHANNELS", message, dataServer)
        }
    }else{
        return await msg.sendMsg("PERMISSION_DENIED", message, dataServer);
    }
}

async function update(type, lvlNum, roleId, guildid) {
    switch (type) {
        case "add":
            var add = {
                guildId: guildid,
                level: lvlNum,
                roleId: roleId
            };

            database.query('INSERT INTO rewards_level SET ?', add, function (error, results, fields) {
                if (error) throw error;
            });
            break;
        case "update":
            var update = `UPDATE rewards_level SET roleId = '${roleId}' WHERE guildId = '${guildid}'`;
            database.query(update, function (err) {
                if (err) throw err;
            });
            break;
        case "remove":
            var remove = `DELETE FROM rewards_level WHERE guildId = '${guildid}' AND level = '${lvlNum}'`;
            database.query(remove, function (err) {
                if (err) throw err;
            });
            break;
    }
}

exports.help = {
    name: "sysxp",
}