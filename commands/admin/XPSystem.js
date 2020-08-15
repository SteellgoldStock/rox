const Discord = require("discord.js");
const { client, database, msg, colors, fs} = require("../../rox");

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if (await msg.Role(message.member, "admin", message, dataServer) === true || message.member.hasPermission('ADMINISTRATOR')) {

        if (!args[0]) {
            return await msg.sendMsg("INVALID_ARGS_XP", message, dataServer)
        }

        const mentionedRole = message.mentions.roles.first();
        const levelNumber = args[2];

        let dbR = JSON.parse(fs.readFileSync("database/rlevels/" + message.guild.id + ".json", "utf8"));

        switch (args[0]) {
            case "rewards":
                if(!args[1]){ return await msg.sendMsg("INVALID_ARGS_XP_1", message, dataServer) }

                switch (args[1]){
                    case "add":
                        if(!levelNumber){ return await msg.sendMsg("INVALID_ARGS_XP_LEVEL_ADD", message, dataServer) }
                        if (Object.keys(dbR).includes(args[2])) {return await msg.sendMsg("XP_LEVEL_EXIST", message, dataServer) }
                        if(!mentionedRole){ return await msg.sendMsg("INVALID_ARGS_XP_LEVEL_ADD", message, dataServer) }

                        await update("add",levelNumber,mentionedRole.id,message.guild.id, dbR);
                        await msg.sendMsg("UPDATED", message, dataServer);
                        break;
                    case "update":
                        if(!levelNumber){ return await msg.sendMsg("INVALID_ARGS_XP_LEVEL_UPDATE", message, dataServer) }
                        if (!Object.keys(dbR).includes(args[2])) {return await msg.sendMsg("XP_LEVEL_NOT_FOUND", message, dataServer) }
                        if(!mentionedRole){ return await msg.sendMsg("INVALID_ARGS_XP_LEVEL_UPDATE", message, dataServer) }

                        await update("update",levelNumber,mentionedRole.id,message.guild.id, dbR);
                        await msg.sendMsg("UPDATED", message, dataServer);
                        break;
                    case "remove":
                        if(!levelNumber){ return await msg.sendMsg("INVALID_ARGS_XP_LEVEL_REMOVE", message, dataServer) }
                        if (!Object.keys(dbR).includes(args[2])) {return await msg.sendMsg("XP_LEVEL_NOT_FOUND", message, dataServer) }

                        await update("remove",levelNumber,"",message.guild.id, dbR);
                        await msg.sendMsg("UPDATED", message, dataServer);
                        break;
                    default:
                        return await msg.sendMsg("INVALID_ARGS_XP_1", message, dataServer)
                }
                break;
            case "status":
                if(!args[1]){ return await msg.sendMsg("INVALID_ARGS_XP_2", message, dataServer) }

                switch(args[1]){
                    case "on":
                        await updateS("on",message.guild.id,database);
                        await msg.sendMsg("UPDATED", message, dataServer);
                        break;
                    case "off":
                        await updateS("off",message.guild.id,database);
                        await msg.sendMsg("UPDATED", message, dataServer);
                        break;
                }
                break;
        }
    }else{
        return await msg.sendMsg("PERMISSION_DENIED", message, dataServer);
    }
}

async function update(type, lvlNum, roleId = null, guildid, dbR) {
    switch (type) {
        case "add":
            dbR[lvlNum] = roleId;
            fs.writeFileSync("database/rlevels/" + guildid + ".json", JSON.stringify(dbR), "utf-8");
            break;
        case "update":
            dbR[lvlNum] = roleId;
            fs.writeFileSync("database/rlevels/" + guildid + ".json", JSON.stringify(dbR), "utf-8");
            break;
        case "remove":
            delete dbR[lvlNum];
            fs.writeFileSync("database/rlevels/" + guildid + ".json", JSON.stringify(dbR), "utf-8");
            break;
    }
}

async function updateS(type, guildid, database) {
    switch (type) {
        case "on":
            var on = `UPDATE servers SET sysXp = '1' WHERE guildid = '${guildid}'`;
            database.query(on, function (err) {
                if (err) throw err;
            });
            break;
        case "off":
            var off = `UPDATE servers SET sysXp = '0' WHERE guildid = '${guildid}'`;
            database.query(off, function (err) {
                if (err) throw err;
            });
            break;
    }
}

exports.help = {
    name: "sysxp",
}