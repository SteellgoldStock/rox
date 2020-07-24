const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages} = require("../rox");

module.exports.run = async (client, message, args, fs, botConfg, colors, db, dbC, dbXp, language) => {
    if(!message.member.roles.cache.find(r => r.name === db["adminRole"])){
        return await messages.sendMsg(message,message.guild.id,language("PERMISSION_DENIED"),message.guild.name);
    }

    let event = args[0];

    if(!["join","quit","tags"].includes(args[0])){ return await messages.sendMsg(message,message.guild.id,language("JQ_ARGS",db["prefix"]),message.guild.name); }

    switch (event) {
        case "tags":
            return await messages.sendJQTags(message.channel,message.guild.id,language)
            break;
        case "join":
            if(!args[1]){ return await messages.sendMsg(message,message.guild.id,language("JQ_ARGS",db["prefix"]),message.guild.name); }
            if(!["channel","msg","status"].includes(args[1])){ return await messages.sendMsg(message,message.guild.id,language("JQ_ARGS",db["prefix"]),message.guild.name); }

            switch (args[1]) {
                case "channel":
                    if(!args[2]){ return await messages.sendMsg(message,message.guild.id,language("JQ_CHANNEL",db["prefix"]),message.guild.name); }
                    var channel = message.guild.channels.cache.find(channel => channel.name === args[2])
                    if(!channel){ return await messages.sendMsg(message,message.guild.id,language("CHANNEL_NOT_EXIST",db["prefix"]),message.guild.name); }

                    db["joinChannel"] = args[2];
                    db["joinMsg"] = true;
                    break;
                case "msg":
                    if(!args[2]){ return await messages.sendMsg(message,message.guild.id,language("JQ_MSG",db["prefix"]),message.guild.name); }

                    db["joinText"] = args.slice(2).join(" ");
                    db["joinMsg"] = true;
                    break;
                case "status":
                    if(!args[2]){ return await messages.sendMsg(message,message.guild.id,language("JQ_STATUS",db["prefix"]),message.guild.name); }

                    switch (args[2]) {
                        case "on":
                            db["joinMsg"] = true;
                            break;
                        case "off":
                            db["joinMsg"] = false;
                            break;
                        default:
                            if(!event){ return await messages.sendMsg(message,message.guild.id,language("JQ_ARGS",db["prefix"]),message.guild.name); }
                            break;
                    }
                    break;
                default:
                    if(!event){ return await messages.sendMsg(message,message.guild.id,language("JQ_ARGS",db["prefix"]),message.guild.name); }
                    break;
            }
            break;
        case "quit":
            if(!args[1]){ return await messages.sendMsg(message,message.guild.id,language("JQ_ARGS",db["prefix"]),message.guild.name); }
            if(!["channel","msg","status"].includes(args[1])){ return await messages.sendMsg(message,message.guild.id,language("JQ_ARGS",db["prefix"]),message.guild.name); }

            switch (args[1]) {
                case "channel":
                    if(!args[2]){ return await messages.sendMsg(message,message.guild.id,language("JQ_CHANNEL",db["prefix"]),message.guild.name); }
                    var quitchannel = message.guild.channels.cache.find(channel => channel.name === args[2])
                    if(!quitchannel){ return await messages.sendMsg(message,message.guild.id,language("CHANNEL_NOT_EXIST",db["prefix"]),message.guild.name); }

                    db["quitChannel"] = args[2];
                    db["quitMsg"] = true;
                    break;
                case "msg":
                    if(!args[2]){ return await messages.sendMsg(message,message.guild.id,language("JQ_MSG",db["prefix"]),message.guild.name); }

                    db["quitText"] = args.slice(2).join(" ");
                    db["quitMsg"] = true;
                    break;
                case "status":
                    if(!args[2]){ return await messages.sendMsg(message,message.guild.id,language("JQ_STATUS",db["prefix"]),message.guild.name); }

                    switch (args[2]) {
                        case "on":
                            db["quitMsg"] = true;
                            break;
                        case "off":
                            db["quitMsg"] = false;
                            break;
                        default:
                            if(!event){ return await messages.sendMsg(message,message.guild.id,language("JQ_ARGS",db["prefix"]),message.guild.name); }
                            break;
                    }
                    break;
                default:
                    if(!event){ return await messages.sendMsg(message,message.guild.id,language("JQ_ARGS",db["prefix"]),message.guild.name); }
                    break;
            }
            break;
        default:
            if(!event){ return await messages.sendMsg(message,message.guild.id,language("JQ_ARGS",db["prefix"]),message.guild.name); }
            break;
    }

    fs.writeFileSync("database/guilds/base/" + message.guild.id + ".json", JSON.stringify(db), "utf-8");
    return await messages.sendMsg(message,message.guild.id,language("UPDATED"),message.guild.name);
}

exports.help = {
    name: "jqconf",
    type: "admin"
}