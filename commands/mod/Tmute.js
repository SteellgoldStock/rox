const Discord = require("discord.js");
const { client, botConfg, fs, colors,msg} = require("../../rox");

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if(message.member.roles.cache.has(dataServer.modRole) || message.member.roles.cache.has(dataServer.adminRole)){
        const user = message.mentions.users.first();
        let reason = args.slice(2).join(" ");
        const member = message.guild.member(user);
        const role = message.guild.roles.cache.find(role => role.name === 'MUTE');

        if (user){
            if (member){
                if (member.user.id !== message.author.id){
                    if(Number.isInteger(Number(args[1]))){
                        if (!reason){
                            let reason = "No reason";
                        }

                        if(message.member.roles.cache.has(dataServer.modRole) && (!message.guild.member(message.mentions.users.first()).roles.cache.has(dataServer.modRole) || !message.guild.member(message.mentions.users.first()).roles.cache.has(dataServer.adminRole)) || message.member.roles.cache.has(dataServer.adminRole) && !message.guild.member(message.mentions.users.first()).roles.cache.has(dataServer.adminRole)){
                            if(!message.guild.roles.cache.find(role => role.name === 'MUTE')){
                                message.guild.roles.create({data: {name: "MUTE"}});
                            }
                            if(!member.roles.cache.find(role => role.name === 'MUTE')){

                                member.roles.add(role)
                                    .then(() => {
                                        setTimeout(function(){member.roles.remove(role); message.guild.channels.cache.forEach(channel => {
                                            channel.overwritePermissions(member.user.id, { SEND_MESSAGES: false, ADD_REACTIONS: false});
                                        });}, args[1] * 1000)

                                        message.guild.channels.cache.forEach(channel => {
                                            channel.overwritePermissions(member.user.id, { SEND_MESSAGES: false, ADD_REACTIONS: false});
                                        });
                                        return msg.sendMsgA(language("SUCCESS_TMUTE", message.author.username,member.user.username, reason, args[1]), message, dataServer)
                                    })
                                    .catch(err => {
                                        msg.sendMsg("PU_IMPOSSIBLE", message, dataServer);
                                        return console.error(err);
                                    });
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