const Discord = require("discord.js");
const { client, botConfg, fs, colors,msg} = require("../../rox");

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if (message.member.roles.cache.has(dataServer.modRole) || message.member.roles.cache.has(dataServer.adminRole)) {

        const mentionUser = message.mentions.members.first();
        if (!mentionUser) {
            return await msg.sendMsg("PU_NO_MENTION", message, dataServer);
        }

        const wId = args[1];
        if (!wId) {
            return await msg.sendMsg("PU_NO_ID", message, dataServer);
        }

        if (message.member.roles.cache.has(dataServer.adminRole)  &&  message.guild.member(message.mentions.users.first()).roles.cache.has(dataServer.adminRole) || (!message.member.roles.cache.has(dataServer.adminRole) && message.member.roles.cache.has(dataServer.modRole)) && (message.guild.member(message.mentions.users.first()).roles.cache.has(dataServer.modRole) || message.guild.member(message.mentions.users.first()).roles.cache.has(dataServer.adminRole))) {

            return await msg.sendMsg("PERMISSION_DENIED", message, dataServer);

        } else {

        database.query(`SELECT * FROM warns WHERE id=${wId} AND userId = ${mentionUser.id}`, function (error, results, fields) {
            if (error) {
                return false;
            } else if (results.length > 0) {
                database.query(`DELETE FROM warns WHERE id =${wId} AND userId =${mentionUser.id}`, function (err) {
                    if (err) throw err;
                });

                return msg.sendMsgA(language("SUCCESS_UNWARN", message.author.username, mentionUser.user.username), message, dataServer);
            } else {
                return msg.sendMsgA(language("PU_NO_ID_USER", mentionUser.user.username), message, dataServer);
            }
        });
        }

    } else {
        return await msg.sendMsg("PERMISSION_DENIED", message, dataServer);
    }
}

exports.help = {
    name: "unwarn"
}