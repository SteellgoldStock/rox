const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages} = require("../../rox");

module.exports.run = async (client, message, args, fs, botConfg, colors, db, dbC, dbXp, language) => {

let banned = message.guild.member(message.mentions.users.cache.first() || message.guild.members.cache.get(args[0]));
let reasonV = args.slice(1,100);

if(!message.member.hasPermission("BAN_MEMBERS")) return await messages.sendMsg(message,message.guild.id,language("PERMISSION_DENIED"),message.guild.name);
if(!banned) return await messages.sendMsg(message,message.guild.id,language("PLAYER_NOT_EXIST", args[0]),message.guild.name);

if(!reason){

message.guild.member(banned).ban();
return messages.sendMsg(message,message.guild.id,language("BANNED", banned.username),message.guild.name);

} else {

let reasonV = args.slice(1,100);

message.guild.member(banned).ban(reason);
return messages.sendMsg(message,message.guild.id,language("BANNED", banned.username),message.guild.name);

}

}

exports.help = {
    name: "ban",
    type: "mod"
}
