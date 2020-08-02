const Discord = require("discord.js");
const { client, database, msg, colors, fs, team} = require("../../rox");
const { MessageAttachment } = require('discord.js');

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if(!args[0]) return await msg.sendMsg("MISSED_ARGUMENTS",message,dataServer);

    var figlet = require('figlet');

    figlet(args.slice(0).join(" "), function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        message.channel.send("```" + data + "```")
    });
}

exports.help = {
    name: "ascii",
}