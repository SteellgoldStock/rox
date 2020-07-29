const Discord = require("discord.js");
const { client, botConfg, fs, colors,msg} = require("../../rox");
const ms = require("ms");

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    let reason;
    if (message.member.roles.cache.has(dataServer.modRole) || message.member.roles.cache.has(dataServer.adminRole)) {
        const user = message.mentions.users.first();
        let reasons = args.slice(2).join(" ");
        const member = message.guild.member(user);
        const role = message.guild.roles.cache.find(role => role.name === 'MUTE');

        if (user) {
            if (member) {
                if (member.user.id !== message.author.id) {
                    if (args[1]) {
                        if (!reasons) {
                            reason = "No reason";
                        } else {
                            reason = reasons;
                        }

                        if (message.member.roles.cache.has(dataServer.modRole) && (!message.guild.member(message.mentions.users.first()).roles.cache.has(dataServer.modRole) || !message.guild.member(message.mentions.users.first()).roles.cache.has(dataServer.adminRole)) || message.member.roles.cache.has(dataServer.adminRole) && !message.guild.member(message.mentions.users.first()).roles.cache.has(dataServer.adminRole)) {
                            if (!message.guild.roles.cache.find(role => role.name === 'MUTE')) {
                                message.guild.roles.create({data: {name: "MUTE"}});
                            }
                            if (!member.roles.cache.find(role => role.name === 'MUTE')) {
                                message.guild.channels.cache.forEach((channel) => {
                                    if(channel.type === 'text'){
                                        console.log(channel.name)
                                        channel.updateOverwrite(member.user, { SEND_MESSAGES: false });
                                    }else if(channel.type === 'voice'){
                                        channel.updateOverwrite(member.user, { SPEAK: false });
                                        channel.updateOverwrite(member.user, { VIEW_CHANNEL: false });
                                    }else{

                                    }
                                });


                                member.roles.add(role)
                                    .then(() => {
                                        setTimeout(function () {
                                            member.roles.remove(role);
                                            message.guild.channels.cache.forEach((channel) => {
                                                if(channel.type === 'text'){
                                                    channel.updateOverwrite(member.user, { SEND_MESSAGES: true });
                                                }else if(channel.type === 'voice'){
                                                    channel.updateOverwrite(member.user, { SPEAK: true });
                                                    channel.updateOverwrite(member.user, { VIEW_CHANNEL: true });
                                                }else{

                                                }
                                            });
                                            message.channel.send(member.user.username + " can speak again !");
                                        }, ms(args[1]))
                                        return msg.sendMsgA(language("SUCCESS_TMUTE", message.author.username, member.user.username, reason, args[1]), message, dataServer)
                                    })
                            } else {
                                return msg.sendMsgA(language("ALREADY_MUTE", member.user.username), message, dataServer);
                            }
                        } else {
                            return await msg.sendMsg("PERMISSION_DENIED", message, dataServer);
                        }
                    } else {
                        return await msg.sendMsg("NO_TIME", message, dataServer);
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
    name: "tempmute"
}