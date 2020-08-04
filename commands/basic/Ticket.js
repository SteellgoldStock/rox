const Discord = require("discord.js");
const { client, botConfg, fs, colors,msg} = require("../../rox");

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {

    switch (args[0]) {

        case "create":
            let create = message.author.tag.replace('#', '').replace(' ', '-').toLowerCase();
            if (message.guild.channels.cache.find(channel => channel.name === create)) return await msg.sendMsg("ALREADY_CHANNEL", message, dataServer);
            if(!message.guild.channels.cache.find(cate => cate.name === dataServer.ticketCat)){
                message.guild.channels.create(dataServer.ticketCat, {
                    type: "category",
                    position: 0,
                    topic: `Support ${message.guild.name}`
                });

                let cat = message.guild.channels.cache.find(cate => cate.name === dataServer.ticketCat);
                
                message.guild.channels.create(create, {
                    type: "text",
                    parent: cat,
                    topic: `Support ${message.author.username}`,
                }).then(c => {

                    c.updateOverwrite(message.author.id, {
                        SEND_MESSAGES: true,
                        VIEW_CHANNEL: true,
                    });

                    dataServer.adminRole.split(' ').forEach(id => {
                        c.updateOverwrite(id, {
                            SEND_MESSAGES: true,
                            VIEW_CHANNEL: true,
                        });
                    });

                    dataServer.modRole.split(' ').forEach(id => {
                        c.updateOverwrite(id, {
                            SEND_MESSAGES: true,
                            VIEW_CHANNEL: true,
                        });
                    })
                    c.updateOverwrite(c.guild.roles.everyone, {
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false,
                    });
                });
                return msg.sendMsg("CREATE_CHANNEL", message, dataServer);

            } else {
                let cat = message.guild.channels.cache.find(cate => cate.name === dataServer.ticketCat).id;

                message.guild.channels.create(create, {
                    type: "text",
                    parent: cat,
                    topic: `Support ${message.author.username}`,
                }).then(c => {

                    c.updateOverwrite(message.author.id, {
                        SEND_MESSAGES: true,
                        VIEW_CHANNEL: true,
                    });

                    dataServer.adminRole.split(' ').forEach(id => {
                        c.updateOverwrite(id, {
                            SEND_MESSAGES: true,
                            VIEW_CHANNEL: true,
                        });
                    });

                    dataServer.modRole.split(' ').forEach(id => {
                        c.updateOverwrite(id, {
                            SEND_MESSAGES: true,
                            VIEW_CHANNEL: true,
                        });
                    })
                    c.updateOverwrite(c.guild.roles.everyone, {
                        SEND_MESSAGES: false,
                        VIEW_CHANNEL: false,
                    });
                });
                return msg.sendMsg("CREATE_CHANNEL", message, dataServer);

            }
            break;
        case "delete":

            let dele = message.author.tag.replace('#', '').replace(' ', '-').toLowerCase();

            if(await msg.Role(message.member, "modo", message, dataServer) === true || await msg.Role(message.member, "admin", message, dataServer) === true){

                if (message.guild.channels.cache.find(channel => channel.name === dele)){

                    message.guild.channels.cache.find(channel => channel.name === dele).delete();

                    return msg.sendMsg("DELETE_CHANNEL", message, dataServer);

                } else {

                    if(!args[1]) return await msg.sendMsg("NOT_EXISTS_CHANNEL_MOD", message, dataServer);

                    let del = message.guild.member(message.mentions.users.first()).user.tag.replace('#', '').replace(' ', '-').toLowerCase();

                    if (!message.guild.channels.cache.find(channel => channel.name === del) && !message.guild.channels.cache.find(channel => channel.id === args[1])) return await msg.sendMsg("NOT_EXISTS_CHANNEL_MOD", message, dataServer);

                    if(message.guild.channels.cache.find(channel => channel.name === del)) {

                        message.guild.channels.cache.find(channel => channel.name === del).delete();

                        return msg.sendMsg("DELETE_CHANNEL", message, dataServer);

                    } else if(message.guild.channels.cache.find(channel => channel.id === args[1])) {

                        message.guild.channels.cache.find(channel => channel.id === args[1]).delete();

                        return msg.sendMsg("DELETE_CHANNEL", message, dataServer);

                    }
                }

            } else {

                if (!message.guild.channels.cache.find(channel => channel.name === dele)) return await msg.sendMsg("NOT_EXISTS_CHANNEL", message, dataServer);

                    message.guild.channels.cache.find(channel => channel.name === dele).delete();

                    return msg.sendMsg("DELETE_CHANNEL", message, dataServer);
            }

            break;
        case "add":
            const useradd = message.mentions.users.first();
            const memberadd = message.guild.member(useradd);
            if(!useradd) return await msg.sendMsg("PU_NO_MENTION", message, dataServer);
            if(!memberadd) return await msg.sendMsg("PU_NO_USER", message, dataServer);
            let add = message.author.tag.replace('#', '').replace(' ', '-').toLowerCase();
            if (!message.guild.channels.cache.find(channel => channel.name === add)) return await msg.sendMsg("NOT_EXISTS_CHANNEL", message, dataServer);
            let channel = message.guild.channels.cache.find(channel => channel.name === add)
            channel.updateOverwrite(memberadd.user.id, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
            });
            return msg.sendMsg("UPDATED", message, dataServer);
            break;
        case "remove":
            const userrem = message.mentions.users.first();
            const memberrem = message.guild.member(userrem);
            if(!userrem) return await msg.sendMsg("PU_NO_MENTION", message, dataServer);
            if(!memberrem) return await msg.sendMsg("PU_NO_USER", message, dataServer);
            let rem = message.author.tag.replace('#', '').replace(' ', '-').toLowerCase();
            if (!message.guild.channels.cache.find(channel => channel.name === rem)) return await msg.sendMsg("NOT_EXISTS_CHANNEL", message, dataServer);
            message.guild.channels.cache.find(channel => channel.name === rem).permissionOverwrites.get(memberrem.user.id).delete();
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