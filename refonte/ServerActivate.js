const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages} = require("../rox");

module.exports.run = async (client, message, args, fs, botConfg, colors, db, dbC, dbXp, language) => {
    let dbu = JSON.parse(fs.readFileSync("database/users/users.json", "utf8"));
    let user = dbu[message.author.id];
    if(!user.prenium == true){
        return await messages.sendMsg(message,message.guild.id,language("NOT_PRENIUM"),message.guild.name)
    }

    if(!db["prenium"] == false){
        return await messages.sendMsg(message,message.guild.id,language("ALREADY_ACTIVED"),message.guild.name)
    }

    if(!user.serverUp == null){
        return await messages.sendMsg(message,message.guild.id,language("ACTIVE_USED"),message.guild.name)
    }

    db["prenium"] = true;
    fs.writeFileSync("database/guilds/base/" + message.guild.id + ".json", JSON.stringify(db), "utf-8");
    user.serverUp = message.guild.id;
    fs.writeFileSync("database/users/users.json", JSON.stringify(dbu), "utf-8");
    return await messages.sendMsg(message,message.guild.id,language("ACTIVED_SERVER",message.guild.name,db["prefix"]),message.guild.name)
}

exports.help = {
    name: "upgrade",
    type: "prenium"
}