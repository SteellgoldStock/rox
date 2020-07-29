const Discord = require("discord.js");
const { client, botConfg, fs, colors,msg} = require("../../rox");

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {

    const user = message.mentions.users.first();
    const reason = args.slice(1).join(" ");
    const member = message.guild.member(user);

    if (user) return await msg.sendMsg("PU_NO_MENTION", message, dataServer);
    if (member) return await msg.sendMsg("PU_NO_USER", message, dataServer);
    if (member.user.id !== message.author.id) return await msg.sendMsg("PUNISH_Y", message, dataServer);
    if (!reason){

        const reason = "No reason";

    }
    if(message.member.roles.cache.has(dataServer.modRole) && (!message.guild.member(message.mentions.users.first()).roles.cache.has(dataServer.modRole) || !message.guild.member(message.mentions.users.first()).roles.cache.has(dataServer.adminRole)) || message.member.roles.cache.has(dataServer.adminRole) && !message.guild.member(message.mentions.users.first()).roles.cache.has(dataServer.adminRole)) return await msg.sendMsg("PERMISSION_DENIED", message, dataServer);

     member.ban({ reason: reason})
                        .then(() => {
                            return msg.sendMsgA(language("SUCCESS_BAN", message.author.username, member.user.username, reason), message, dataServer)
                        })
                        .catch(err => {
                            msg.sendMsg("PU_IMPOSSIBLE", message, dataServer);
                            return console.error(err);
                        });
}

exports.help = {
    name: "ban"
}
