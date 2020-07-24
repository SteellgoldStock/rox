const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages} = require("../../rox");

module.exports.run = async (client, message, args, fs, botConfg, colors, db, dbC, dbXp, language) => {
    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")){
        return await messages.sendMsg(message,message.guild.id,language("PERMISSION_DENIED"),message.guild.name);
    }

    let action = args[0];
    let arole = args.slice(1).join(" ");
    if(!action){
        return await messages.sendMsg(message,message.guild.id,language("ROLES_TYPE_HELP",db["prefix"]),message.guild.name)
    }

    let actions = ["adminRole","modRole"];
    if(!actions.includes(action)){
        return await messages.sendMsg(message,message.guild.id,language("ROLES_TYPE_LIST",action),message.guild.name);
    }

    let role = message.guild.roles.cache.find(r => r.name === `${arole}`);
    if(!arole){
        return await messages.sendMsg(message,message.guild.id,language("ROLES_ROLE_HELP",db["prefix"]),message.guild.name)
    }

    if(!role){
        return await messages.sendMsg(message,message.guild.id,language("ROLE_NOT_EXIST",arole),message.guild.name);
    }

    switch (action) {
        case "modRole":
            db["modRole"] = arole;
            break;
        case "adminRole":
            db["adminRole"] = arole;
            break;
    }

    fs.writeFileSync("database/guilds/base/" + message.guild.id + ".json", JSON.stringify(db), "utf-8");
    return await messages.sendMsg(message,message.guild.id,language("UPDATED"),message.guild.name);
}

exports.help = {
    name: "roles",
    type: "admin"
}