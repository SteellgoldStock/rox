const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages} = require("../../rox");

module.exports.run = async (client, message, args, fs, botConfg, colors, db, dbC, dbXp, language) => {
    if(!message.member.roles.cache.find(r => r.name === db["adminRole"])){
        return await messages.sendMsg(message,message.guild.id,language("PERMISSION_DENIED"),message.guild.name);
    }

    if(!db["prenium"] == true){
        return await messages.sendMsg(message,message.guild.id,language("NOT_PRENIUM_GUILD"),message.guild.name)
    }

    if(!args[0]){
        return await messages.sendMsg(message,message.guild.id,language("EMBED_CONF_OPTION"),message.guild.name)
    }

    switch (args[0]) {
        case "config":
            if(!args[1]){ return await messages.sendMsg(message,message.guild.id,language("EMBED_CONF_OPTION_ARGS"),message.guild.name) }
            switch (args[1]) {
                case "title":
                    if(!args[2]){ return await messages.sendMsg(message,message.guild.id,language("MISSED_ARGUMENTS"),message.guild.name) }
                    let title = args.slice(2).join(" ");
                    db["embedTitle"] = title;
                    db["msgEmbed"] = true;
                    fs.writeFileSync("database/guilds/base/" + message.guild.id + ".json", JSON.stringify(db), "utf-8");
                    return await messages.sendMsg(message,message.guild.id,language("UPDATED"),message.guild.name);
                    break;

                case "imgUrl":
                    if(!args[2]){ return await messages.sendMsg(message,message.guild.id,language("MISSED_ARGUMENTS"),message.guild.name) }
                    let url = args.slice(2).join(" ");
                    db["embedImg"] = url;
                    db["msgEmbed"] = true;
                    fs.writeFileSync("database/guilds/base/" + message.guild.id + ".json", JSON.stringify(db), "utf-8");
                    return await messages.sendMsg(message,message.guild.id,language("UPDATED"),message.guild.name);
                    break;

                default:
                    return await messages.sendMsg(message,message.guild.id,language("EMBED_CONF_OPTION_ARGS"),message.guild.name)
                    break;
            }
            break;

        case "status":
            if(!args[1]){ return await messages.sendMsg(message,message.guild.id,language("EMBED_CONF_OPTION_ARGS"),message.guild.name) }
            switch (args[1]) {
                case "on":
                    db["msgEmbed"] = true;
                    fs.writeFileSync("database/guilds/base/" + message.guild.id + ".json", JSON.stringify(db), "utf-8");
                    return await messages.sendMsg(message,message.guild.id,language("UPDATED"),message.guild.name);
                    break;
                case "off":
                    db["msgEmbed"] = false;
                    fs.writeFileSync("database/guilds/base/" + message.guild.id + ".json", JSON.stringify(db), "utf-8");
                    return await messages.sendMsg(message,message.guild.id,language("UPDATED"),message.guild.name);
                    break;
                default:
                    return await messages.sendMsg(message,message.guild.id,language("EMBED_CONF_OPTION_STATUS"),message.guild.name)
                    break;
            }
            break;

        default:
            return await messages.sendMsg(message,message.guild.id,language("EMBED_CONF_OPTION"),message.guild.name)
            break;
    }
}

exports.help = {
    name: "embedconf",
    type: "admin"
}