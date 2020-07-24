const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages} = require("../../rox");

module.exports.run = async (client, message, args, fs, botConfg, colors, db, dbC, dbXp, language) => {
    let dbu = JSON.parse(fs.readFileSync("database/users/users.json", "utf8"));
    let user = dbu[message.author.id];
    if(!user.prenium == true) return await messages.sendMsg(message,message.guild.id,language("NOT_PRENIUM"),message.guild.name);

    dbu[message.author.id].background = args;

}

exports.help = {
    name: "background",
    type: "gold"
}
