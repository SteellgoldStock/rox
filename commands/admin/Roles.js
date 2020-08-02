const Discord = require("discord.js");
const { client, database, msg, colors, fs} = require("../../rox");
module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if (await msg.Role(message.member, "admin", message, dataServer) === true || message.member.hasPermission('ADMINISTRATOR')) {
        if (!args[0]) {
            return await msg.sendMsg("INVALID_ARGS_ROLES", message, dataServer)
        }
        const mentionedRole = message.mentions.roles.first();

        switch (args[0]) {
            case "adminRole":
                if(args[1] == 'add'){
                    if (!mentionedRole) {
                        return await msg.sendMsg("MENTION_ROLE", message, dataServer)
                    }
                    await update("ar", mentionedRole.id, message.guild.id, "add");
                    return await msg.sendMsg("UPDATED", message, dataServer);
                } else if (args[1] == 'remove'){
                    if (!mentionedRole) {
                        return await msg.sendMsg("MENTION_ROLE", message, dataServer)
                    }
                    await update("ar", mentionedRole.id, message.guild.id, "remove");
                    return await msg.sendMsg("UPDATED", message, dataServer);
                } else {
                    return await msg.sendMsg("INVALID_ARGS_BLACKLIST", message, dataServer)
                }
                break;
            case "modRole":
                if(args[1] == 'add'){
                    if (!mentionedRole) {
                        return await msg.sendMsg("MENTION_ROLE", message, dataServer)
                    }
                    await update("mr", mentionedRole.id, message.guild.id, "add");
                    return await msg.sendMsg("UPDATED", message, dataServer);
                    break;
                } else if (args[1] == 'remove'){
                    if (!mentionedRole) {
                        return await msg.sendMsg("MENTION_ROLE", message, dataServer)
                    }
                    await update("mr", mentionedRole.id, message.guild.id, "remove");
                    return await msg.sendMsg("UPDATED", message, dataServer);
                    break;
                } else {
                    return await msg.sendMsg("INVALID_ARGS_BLACKLIST", message, dataServer)
                }
            case "autoRole":
                if(args[1] == 'add'){
                    if (!mentionedRole) {
                        return await msg.sendMsg("MENTION_ROLE", message, dataServer)
                    }
                    await update("aur", mentionedRole.id, message.guild.id, "add");
                    return await msg.sendMsg("UPDATED", message, dataServer);
                    break;
                } else if (args[1] == 'remove'){
                    if (!mentionedRole) {
                        return await msg.sendMsg("MENTION_ROLE", message, dataServer)
                    }
                    await update("aur", mentionedRole.id, message.guild.id, "remove");
                    return await msg.sendMsg("UPDATED", message, dataServer);
                    break;
                } else {
                    return await msg.sendMsg("INVALID_ARGS_BLACKLIST", message, dataServer)
                }
            default:
                return await msg.sendMsg("INVALID_ARGS_ROLES", message, dataServer)
                break;
        }
    } else {
        return await msg.sendMsg("PERMISSION_DENIED", message, dataServer);
    }
}

async function update(type, id, guildid, action){

    switch (type) {
        case "ar":
            let admin;
            await database.query(`SELECT * FROM servers WHERE guildid = ${guildid}`, function (error, results, fields) {
                if (error) {
                    return false;
                } else if (results.length > 0) {
                    if(action == "add"){

                        let adm = results[0].modRole.split(' ');
                        if (!adm[id]){
                            adm.push(id);
                        }

                        admin = adm.join(' ');
                    } else {
                        let adm = results[0].modRole.split(' ');
                        if (adm[id]){
                            adm.delete(id);
                            adm.sort()
                        }
                        admin = adm.join(' ');
                    }
                    return database.query(`UPDATE servers SET adminRole = '${admin}' WHERE guildid = '${guildid}'`, function (err) {
                        if (err) throw err;
                    });
                }
            });
            break;
        case "mr":
            let modo;
            await database.query(`SELECT * FROM servers WHERE guildid = ${guildid}`, function (error, results, fields) {
                if (error) {
                    return false;
                } else if (results.length > 0) {
                    if(action == "add"){
                        let mod = results[0].modRole.split(' ');
                        if (!mod[id]){
                            mod.push(id);
                        }
                        modo = mod.join(' ');
                    } else {
                        let mod = results[0].modRole.split(' ');
                        if (mod[id]){
                            mod.delete(id);
                        }
                        modo = mod.join(' ');
                    }
                    return database.query(`UPDATE servers SET modRole = '${modo}' WHERE guildid = '${guildid}'`, function (err) {
                        if (err) throw err;
                    });
                }
            });
            break;
        case "aur":
            let auto;
            await database.query(`SELECT * FROM servers WHERE guildid = ${guildid}`, function (error, results, fields) {
                if (error) {
                    return false;
                } else if (results.length > 0) {
                    if(action == "add"){
                        let aut = results[0].modRole.split(' ');
                        if (!aut[id]){
                            aut.push(id);
                        }
                        auto = aut.join(' ');
                    } else {
                        let aut = results[0].modRole.split(' ');
                        if (aut[id]){
                            aut.delete(id);
                        }
                        auto = aut.join(' ');
                    }
                    return database.query(`UPDATE servers SET autoRole = '${auto}' WHERE guildid = '${guildid}'`, function (err) {
                        if (err) throw err;
                    });
                }
            });
            break;
    }
}

exports.help = {
    name: "roles",
}