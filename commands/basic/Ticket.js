const Discord = require("discord.js");
const { client, botConfg, fs, colors,msg} = require("../../rox");
const ms = require("ms");

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {

    switch (args[0]) {

        case "create":
            if (message.guild.channels.cache.find(channel => channel.name === message.author.tag)) return await msg.sendMsg("ALREADY_CHANNEL", message, dataServer);
            if(!message.guild.categories.cache.find(cate => cate.name === dataServer.ticketCat)){
                message.guild.createChannel(dataServer.ticketCat, "category");
            }
            message.guild.createChannel(message.author.tag, "text");
            message.guild.channels.cache.find(channel => channel.name === message.author.tag).setParent(message.guild.categories.cache.find(cate => cate.name === dataServer.ticketCat));
            return msg.sendMsg("CREATE_CHANNEL", message, dataServer);
            break;
        case "delete":

            if(await msg.Role(message.member, "modo", message, dataServer) === true || await msg.Role(message.member, "admin", message, dataServer) === true){

                if (!message.guild.channels.cache.find(channel => channel.name === args[1]) && !message.guild.channels.cache.find(channel => channel.id === args[1])) return await msg.sendMsg("NOT_EXISTS_CHANNEL_MOD", message, dataServer);

                if(message.guild.channels.cache.find(channel => channel.name === args[1])) {

                    message.guild.channelss.cache.find(channel => channel.name === args[1]).delete();

                    return msg.sendMsg("DELETE_CHANNEL", message, dataServer);

                } else if(message.guild.channels.cache.find(channel => channel.id === args[1])) {

                    message.guild.channels.cache.find(channel => channel.id === args[1]).delete();

                    return msg.sendMsg("DELETE_CHANNEL", message, dataServer);

                }

            } else {

                if (!message.guild.channels.cache.find(channel => channel.name === message.author.tag)) return await msg.sendMsg("NOT_EXISTS_CHANNEL", message, dataServer);

                    message.guild.channels.cache.find(channel => channel.name === message.author.tag).delete();

                    return msg.sendMsg("DELETE_CHANNEL", message, dataServer);
            }

            break;
        case "add":
            const useradd = message.mentions.users.first();
            const memberadd = message.guild.member(user);
            if(!useradd) return await msg.sendMsg("PU_NO_MENTION", message, dataServer);
            if(!memberadd) return await msg.sendMsg("PU_NO_USER", message, dataServer);
            message.guild.channels.cache.find(channel => channel.name === message.author.tag).updateOverwrite(memberadd.user, { SPEAK: true });
            message.guild.channels.cache.find(channel => channel.name === message.author.tag).updateOverwrite(memberadd.user, { VIEW_CHANNEL: true });
            return msg.sendMsg("UPDATED", message, dataServer);
            break;
        case "remove":
            const userrem = message.mentions.users.first();
            const memberrem = message.guild.member(user);
            if(!userrem) return await msg.sendMsg("PU_NO_MENTION", message, dataServer);
            if(!memberrem) return await msg.sendMsg("PU_NO_USER", message, dataServer);
            message.guild.channels.cache.find(channel => channel.name === message.author.tag).permissionOverwrites.get(memberrem.user.id).delete();
            return msg.sendMsg("UPDATED", message, dataServer);
            break;

        default:
            return msg.sendMsg("INVALID_ARGS_TICKET", message, dataServer);
            break;
    }
}

exports.help = {
    name: "ticket"
}