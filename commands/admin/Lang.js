const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages} = require("../../rox");

module.exports.run = async (client, message, args, fs, botConfg, colors, db, dbC, dbXp, language) => {
    if (!message.member.roles.cache.find(r => r.name === db["adminRole"])) {
        return await messages.sendMsg(message, message.guild.id, language("PERMISSION_DENIED"), message.guild.name);
    }

    if(!args[0]){ return await messages.sendMsg(message,message.guild.id,language("LANG_LIST"),message.guild.name); }

    const actions = ["fr","en"];
    if(!actions.includes(args[0])){ return await messages.sendMsg(message,message.guild.id,language("LANG_LIST"),message.guild.name); }

    db["lang"] = args[0];
    fs.writeFileSync("database/guilds/base/" + message.guild.id + ".json", JSON.stringify(db), "utf-8");
    const newLanguage = require('./../../database/lang/' + args[0] + ".js")

    return await messages.sendMsg(message,message.guild.id,newLanguage("UPDATED"),message.guild.name);
}

exports.help = {
    name: "lang",
    type: "manage"
}