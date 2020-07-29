const Discord = require("discord.js");
const { client, botConfg, fs, colors,msg} = require("../../rox");

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if (message.member.roles.cache.has(dataServer.modRole) || message.member.roles.cache.has(dataServer.adminRole)) {
        const mentionUser = message.mentions.members.first();
        if (!mentionUser) {
            return await msg.sendMsg("PU_NO_MENTION", message, dataServer);
        }

        if (mentionUser.roles.cache.has(dataServer.modRole) || mentionUser.roles.cache.has(dataServer.adminRole)) {
            return await msg.sendMsg("PERMISSION_DENIED", message, dataServer);
        }

        const reason = args.slice(1).join(" ");
        if (!reason) {
            return await msg.sendMsg("PU_NO_REASON", message, dataServer);
        }

        var post = {
            modId: message.author.id,
            userId: mentionUser.id,
            channelId: message.channel.id,
            guildId: message.guild.id,
            reason: reason
        };
        database.query('INSERT INTO warns SET ?', post, function (err) {
            if (err) throw err;
        });

        return await msg.sendMsgA(language("SUCCESS_WARN", message.author.username, mentionUser.user.username, reason), message, dataServer);
    } else {
        return await msg.sendMsg("PERMISSION_DENIED", message, dataServer);
    }
}

exports.help = {
    name: "warn"
}