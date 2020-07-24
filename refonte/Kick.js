const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages} = require("../rox");

module.exports.run = async (client, message, args, fs, botConfg, colors, db, dbC, dbXp, language) => {

let kicked = message.guild.member(message.mentions.users.cache.first() || message.guild.members.cache.get(args[0]));
let reason = args.slice(1,100);

if(!message.member.hasPermission("KICK_MEMBERS")) return await messages.sendMsg(message,message.guild.id,language("PERMISSION_DENIED"),message.guild.name);
if(!kicked) return await messages.sendMsg(message,message.guild.id,language("PLAYER_NOT_EXIST", args[0]),message.guild.name);

if(!reason){

message.guild.member(kicked).kick();
return messages.sendMsg(message,message.guild.id,language("KICKED", banned.username),message.guild.name);

} else {

message.guild.member(kicked).kick(reason);
return messages.sendMsg(message,message.guild.id,language("KICKED", banned.username),message.guild.name);

}

}

exports.help = {
    name: "kick",
    type: "mod"
}
