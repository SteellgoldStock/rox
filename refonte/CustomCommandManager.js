const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages} = require("../rox");

module.exports.run = async (client, message, args, fs, botConfg, colors, db, dbC, dbXp, language) => {
    if (!message.member.roles.cache.find(r => r.name === db["adminRole"])) {
        return await messages.sendMsg(message, message.guild.id, language("PERMISSION_DENIED"), message.guild.name);
    }

    if(!args[0]){ return await messages.sendMsg(message,message.guild.id,language("CC_ARGUMENTS",db["prefix"]),message.guild.name); }

    const actions = ["add","del","update","tags"];
    if(!actions.includes(args[0])){ return await messages.sendMsg(message,message.guild.id,language("CC_ARGUMENTS",db["prefix"]),message.guild.name); }

    switch (args[0]) {
        case "tags":
            return await messages.sendCCTags(message.channel,message.guild.id,language)
            break;
        case "add":
            if(!args[1]){ return await messages.sendMsg(message,message.guild.id,language("CC_ARGUMENTS",db["prefix"]),message.guild.name); }
            if (Object.keys(dbC).includes(args[1])) {
                return messages.sendMsg(message,message.guild.id,language("CC_EXIST",db["prefix"], args[1]),message.guild.name);
            }

            if(!args[2]){ return await messages.sendMsg(message,message.guild.id,language("MISSED_ARGUMENTS"),message.guild.name); }
            dbC[args[1]] = args.slice(2).join(" ");
            messages.sendMsg(message,message.guild.id,language("CC_ADD", db["prefix"] + args[1]),message.guild.name);
            break;
        case "del":
            if(!args[1]){ return await messages.sendMsg(message,message.guild.id,language("CC_ARGUMENTS",db["prefix"]),message.guild.name); }
            if (!Object.keys(dbC).includes(args[1])) {
                return messages.sendMsg(message,message.guild.id,language("CC_NOT_EXIST",db["prefix"]),message.guild.name);
            }

            delete dbC[args[1]];
            messages.sendMsg(message,message.guild.id,language("CC_DELETED", db["prefix"] + args[1]),message.guild.name);
            break;
        case "update":
            if(!args[1]){ return await messages.sendMsg(message,message.guild.id,language("CC_ARGUMENTS",db["prefix"]),message.guild.name); }
            if (!Object.keys(dbC).includes(args[1])) {
                return messages.sendMsg(message,message.guild.id,language("CC_NOT_EXIST",db["prefix"]),message.guild.name);
            }

            if(!args[2]){ return await messages.sendMsg(message,message.guild.id,language("MISSED_ARGUMENTS"),message.guild.name); }
            dbC[args[1]] = args.slice(2).join(" ");
            messages.sendMsg(message,message.guild.id,language("UPDATED"),message.guild.name);
            break;
    }

    fs.writeFileSync("database/guilds/ccommands/" + message.guild.id + ".json", JSON.stringify(dbC), "utf-8");
}

exports.help = {
    name: "custcmds",
    type: "admin"
}