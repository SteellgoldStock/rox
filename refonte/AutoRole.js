const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages} = require("../rox");

module.exports.run = async (client, message, args, fs, botConfg, colors, db, dbC, dbXp, language) => {
    if(!message.member.roles.cache.find(r => r.name === db["adminRole"])){
        return await messages.sendMsg(message,message.guild.id,language("PERMISSION_DENIED"),message.guild.name);
    }

    let action = args[0];
    if(!action){ return await messages.sendMsg(message,message.guild.id,language("ROLES_AUTOROLE_USE",db["prefix"]),message.guild.name); }

    switch (action) {
        case "config":
            if(!args[1]){ return await messages.sendMsg(message,message.guild.id,language("ROLES_AUTOROLE_USE_3",db["prefix"]),message.guild.name); }

            let argRole = args.slice(1).join(" ")

            let role = message.guild.roles.cache.find(r => r.name === `${argRole}`);
            if(!role){ return await messages.sendMsg(message,message.guild.id,language("ROLE_NOT_EXIST", argRole),message.guild.name); }
            db["autoRole"] = true
            db["autoRoleName"] = argRole
            break;

        case "status":
            if(!args[1]){ return await messages.sendMsg(message,message.guild.id,language("ROLES_AUTOROLE_USE_2",db["prefix"]),message.guild.name); }
            switch (args[1]) {
                case "on":
                    db["autoRole"] = true;
                    break;

                case "off":
                    db["autoRole"] = false;
                    break;

                default:
                    await messages.sendMsg(message,message.guild.id,language("ROLES_AUTOROLE_USE_2",db["prefix"]),message.guild.name);
                    break;
            }
            break;

        default:
            if(!action){ return await messages.sendMsg(message,message.guild.id,language("ROLES_AUTOROLE_USE",db["prefix"]),message.guild.name); }
            break;
    }

    fs.writeFileSync("database/guilds/base/" + message.guild.id + ".json", JSON.stringify(db), "utf-8");
    return await messages.sendMsg(message,message.guild.id,language("UPDATED"),message.guild.name);
}

exports.help = {
    name: "autorole",
    type: "admin"
}