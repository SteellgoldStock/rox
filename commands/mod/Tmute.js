const Discord = require("discord.js");
const { client, botConfg, fs, colors,msg} = require("../../rox");

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {

    const user = message.mentions.users.first();
    let reason = args.slice(2).join(" ");
    const member = message.guild.member(user);
    const role = message.guild.roles.cache.find(role => role.name === 'MUTE');

    if (user){

        if (member){

            if (member.user.id !== message.author.id){

                if(Number.isInteger(args[1])){

                    if (!reason){

                        let reason = "No reason";

                    }

                    if(message.member.roles.cache.has(dataServer.modRole) && (!message.guild.member(message.mentions.users.first()).roles.cache.has(dataServer.modRole) || !message.guild.member(message.mentions.users.first()).roles.cache.has(dataServer.adminRole)) || message.member.roles.cache.has(dataServer.adminRole) && !message.guild.member(message.mentions.users.first()).roles.cache.has(dataServer.adminRole)){

                        if(!message.guild.roles.cache.find(role => role.name === 'MUTE')){
                            message.guild.roles.create({data: {name: "MUTE"}});
                            message.guild.channels.cache.forEach(channel => {
                                channel.updateOverwrite(role, { SEND_MESSAGES: false });
                            });

                        }

                        if(!member.roles.cache.find(role => role.name === 'MUTE')){

                            member.roles.add(role)
                                .setTimeout(member.roles.remove(role), args[1] * 1000)
                                .then(() => {
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

}

exports.help = {
    name: "tempmute"
}