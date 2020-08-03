const Discord = require("discord.js");
const { client, botConfg, fs, colors,msg} = require("../../rox");

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    let reason;
    if (await msg.Role(message.member, "modo", message, dataServer) === true || await msg.Role(message.member, "admin", message, dataServer) === true) {

        const user = message.mentions.users.first();
        let reasons = args.slice(1).join(" ");
        const member = message.guild.member(user);

        if (user) {
            if (member) {
                if (member.user.id === "733760070503890994") return await msg.sendMsg("PUNISH_BOT", message, dataServer);
                if (member.user.id !== message.author.id) {
                    if (!reasons) {
                        reason = "No reason";
                    } else {
                        reason = reasons;
                    }

                    if (await msg.Role(message.member, "admin", message, dataServer) === true  &&  await msg.Role(message.guild.member(message.mentions.users.first()), "admin", message, dataServer) === true || (await msg.Role(message.member, "admin", message, dataServer) === false && await msg.Role(message.member, "modo", message, dataServer) === true) && (await msg.Role(message.guild.member(message.mentions.users.first()), "modo", message, dataServer) === true || await msg.Role(message.guild.member(message.mentions.users.first()), "admin", message, dataServer) === true)) {

                        return await msg.sendMsg("PERMISSION_DENIED", message, dataServer);

                    } else {

                        member.kick({reason: reason})
                            .then(() => {
                                return msg.sendMsgA(language("SUCCESS_KICK", message.author.username, member.user.username, reason), message, dataServer)
                            })
                            .catch(err => {
                                msg.sendMsg("PU_IMPOSSIBLE", message, dataServer);
                                return console.error(err);
                            });
                    }
                } else {
                    return await msg.sendMsg("PUNISH_Y", message, dataServer);
                }
            } else {
                return await msg.sendMsg("PU_NO_USER", message, dataServer);
            }
        } else {
            return await msg.sendMsg("PU_NO_MENTION", message, dataServer);
        }
    } else {
        return await msg.sendMsg("PERMISSION_DENIED", message, dataServer);
    }
}

exports.help = {
    name: "kick"
}
