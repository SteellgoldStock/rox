const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages} = require("../../rox");

module.exports.run = async (client, message, args, fs, botConfg, colors, db, dbC, dbXp, language) => {

let banned = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(permission);
if(!banned) return message.channel.send("𝐂𝐞 𝐣𝐨𝐮𝐞𝐮𝐫 𝐧'𝐞𝐱𝐢𝐬𝐭𝐞 𝐩𝐚𝐬 !");
if(!args[0]) return message.channel.send(prefix + '**ban** <𝐦𝐞𝐧𝐭𝐢𝐨𝐧> <𝐫𝐚𝐢𝐬𝐨𝐧>');

let reason = args.slice(1,100);

message.guild.member(banned).ban(reason);

}

exports.help = {
    name: "ban",
    type: "mod"
}
