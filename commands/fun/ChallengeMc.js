const Discord = require("discord.js");
const { client, database, msg, colors, fs, team} = require("../../rox");
const { MessageAttachment } = require('discord.js');

String.prototype.allReplace = function (obj) {
    var retStr = this;
    for (var x in obj) {
        retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
    }
    return retStr;
};

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if(!args[0]){ return await msg.sendMsg("MISSED_ARGUMENTS",message,dataServer)}

    message.reply("https://api.alexflipnote.dev/challenge?text=" + args.slice(0).join(" ").allReplace({" ":"%20"}));
}


exports.help = {
    name: "challmc",
}