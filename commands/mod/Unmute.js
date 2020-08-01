const Discord = require("discord.js");
const { client, botConfg, fs, colors,msg} = require("../../rox");

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if (await msg.Role(message.member, "modo", message, dataServer) === true || await msg.Role(message.member, "admin", message, dataServer) === true) {

        const user = message.mentions.users.first();
        let reason = args.slice(1).join(" ");
        const member = message.guild.member(user);
        const role = message.guild.roles.cache.find(role => role.name === 'MUTE');

        if (user) {
            if (member) {
                if (member.user.id !== message.author.id) {
                    if (!reason) {
                        let reason = "No reason";
                    }
                    if (await msg.Role(message.member, "admin", message, dataServer) === true  &&  await msg.Role(message.guild.member(message.mentions.users.first()), "admin", message, dataServer) === true || (await msg.Role(message.member, "admin", message, dataServer) === false && await msg.Role(message.member, "modo", message, dataServer) === true) && (await msg.Role(message.guild.member(message.mentions.users.first()), "modo", message, dataServer) === true || await msg.Role(message.guild.member(message.mentions.users.first()), "admin", message, dataServer) === true)) {

                        return await msg.sendMsg("PERMISSION_DENIED", message, dataServer);

                    } else {

                        if (!message.guild.roles.cache.find(role => role.name === 'MUTE')) {
                            message.guild.roles.create({data: {name: "MUTE"}});
                        }
                        if (member.roles.cache.find(role => role.name === 'MUTE')) {
                            message.guild.channels.cache.forEach((channel) => {
                                if (channel.type === 'text') {
                                    channel.permissionOverwrites.get(member.user.id).delete();
                                } else if (channel.type === 'voice') {
                                    channel.permissionOverwrites.get(member.user.id).delete();
                                } else {

                                }
                            });
                            member.roles.remove(role)
                                .then(() => {
                                    return msg.sendMsgA(language("SUCCESS_UNMUTE", message.author.username, member.user.username), message, dataServer)
                                })
                                .catch(err => {
                                    msg.sendMsg("PU_IMPOSSIBLE", message, dataServer);
                                    return console.error(err);
                                });
                        } else {
                            return msg.sendMsgA(language("NO_MUTE", member.user.username), message, dataServer);
                        }
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
    name: "unmute"
}