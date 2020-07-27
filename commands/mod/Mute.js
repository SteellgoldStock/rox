const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages} = require("../rox");

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if (!message.member.roles.cache.find(r => r.name === dataServer.adminRole) || !message.member.roles.cache.find(r => r.name === dataServer.modRole)) {
        return await msg.sendMsg("PERMISSION_DENIED", message, dataServer);
    }

    const user = message.mentions.users.first();
    const reason = args.slice(1).join(" ");
    if (!reason) {
        const reason = "No reason"
    }

    if (user) {
        const member = message.guild.member(user);

        if (member) {
            if (member.id !== message.member.id) {
                if (!member.roles.cache.find(r => r.name === dataServer.adminRole) || !message.member.roles.cache.find(r => r.name === dataServer.modRole)) {
                    const role = message.guild.roles.cache.find(role => role.name === 'MUTE');
                    if(!message.guild.roles.cache.find(role => role.name === 'MUTE')){

                        message.guild.roles.create({data: {name: "MUTE"}});

                        message.guild.channels.forEach(channel =>{

                            channel.updateOverwrite(role, { SEND_MESSAGES: false });

                        });

                    }
                        if(!member.roles.cache.some(role => role.name === 'MUTE')) return msg.sendMsgA(language("ALREADY_MUTE", member.username), message, dataServer)
                            member.roles.add(role)
                                .then(() => {
                                    return msg.sendMsgA(language("SUCCESS_MUTE", message.author.username, member.username, reason), message, dataServer)
                                })
                                .catch(err => {
                                    msg.sendMsg("PU_IMPOSSIBLE", message, dataServer);
                                    return console.error(err);
                                });
                } else {
                    return await msg.sendMsg("PERMISSION_DENIED", message, dataServer);
                }
            } else {
                return await msg.sendMsg("PUNISH_Y", message, dataServer);
            }
        } else {
            return await msg.sendMsg("PU_NO_USER", message, dataServer);
        }
    } else {
        return await messages.sendMsg(message, message.guild.id, language("PU_NO_MENTION"), message.guild.name);
    }
}

exports.help = {
    name: "mute"
}