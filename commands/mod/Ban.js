const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages} = require("../rox");

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if (!message.member.roles.cache.find(r => r.name === dataServer.adminRole) || !message.member.roles.cache.find(r => r.name === dataServer.modRole)) {
        return await msg.sendMsg("PERMISSION_DENIED", message, dataServer);
    }

    const user = message.mentions.users.first();
    const reason = args.slice(1).join(" ");
    if(!reason){ const reason = "No reason" }

    if (user) {
        const member = message.guild.member(user);

        if (member) {
            member
                .ban({
                    reason: reason,
                })
                .then(() => {
                    return messages.sendMsg(message,message.guild.id,language("SUCCESS_BAN",member.user.username,reason,message.author.username),message.guild.name);
                })
                .catch(err => {
                    meessages.sendMsg(message,message.guild.id,language("BAN_IMPOSSIBLE"),message.guild.name);
                    return console.error(err);
                });
        } else {
            return await messages.sendMsg(message,message.guild.id,language("BAN_NO_USER"),message.guild.name);
        }
    } else {
        return await messages.sendMsg(message,message.guild.id,language("BAN_NO_MENTION"),message.guild.name);
    }
}

exports.help = {
    name: "ban",
    type: "mod"
}
