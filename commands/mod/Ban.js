const Discord = require("discord.js");
const { client, botConfg, fs, colors,msg} = require("../../rox");

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if((message.member.roles.cache.has(dataServer.modRole) && (!message.guild.member(message.mentions.users.first()).roles.cache.has(dataServer.modRole) || !message.guild.member(message.mentions.users.first()).roles.cache.has(dataServer.adminRole))) || (message.member.roles.cache.has(dataServer.adminRole) && !message.guild.member(message.mentions.users.first()).roles.cache.has(dataServer.adminRole))) return await msg.sendMsg("PERMISSION_DENIED", message, dataServer);

    const user = message.mentions.users.first();
    const reason = args.slice(1).join(" ");
    if (!reason) {
        const reason = "No reason"
    }

    if (user) {
        const member = message.guild.member(user);

        if (member) {
            if (member.user.id !== message.author.id) {
                    member
                        .ban({
                            reason: reason,
                        })
                        .then(() => {
                            return msg.sendMsgA(language("SUCCESS_BAN", message.author.username, member.user.username, reason), message, dataServer)
                        })
                        .catch(err => {
                            msg.sendMsg("PU_IMPOSSIBLE", message, dataServer);
                            return console.error(err);
                        }); 
            } else {
                return await msg.sendMsg("PUNISH_Y", message, dataServer);
            }
        } else {
            return await msg.sendMsg("PU_NO_USER", message, dataServer);
        }
    } else {
        return await msg.sendMsg("PU_NO_MENTION", message, dataServer);
    }
}

exports.help = {
    name: "ban"
}
