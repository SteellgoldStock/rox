const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages} = require("../../rox");

module.exports.run = async (client, message, args, fs, botConfg, colors, db, dbC, dbXp, language) => {
    if(message.attachments.first()){//checks if an attachment is sent
        if(message.attachments.first().filename === `png`){//Download only png (customize this)
            download(message.attachments.first().url);//Function I will show later
        }
    }

    /**
    let dbu = JSON.parse(fs.readFileSync("database/users/users.json", "utf8"));
    let user = dbu[message.author.id];
    if (!user.gold == true) return await messages.sendMsg(message, message.guild.id, language("NOT_PRENIUM"), message.guild.name);

    dbu[message.author.id].background = args;
    fs.writeFileSync("database/users/users.json", JSON.stringify(dbu), "utf-8");
    return await messages.sendMsg(message, message.guild.id, language("UPDATED"), message.guild.name)
     **/
}

exports.help = {
    name: "background",
    type: "gold"
}
