const Discord = require("discord.js");
const { client, database, msg, colors, fs, team, servers} = require("../../rox");
const { MessageAttachment } = require('discord.js');

const search = require('yt-search')

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if(!args[0]) return await msg.sendMsg("MISSED_ARGUMENTS", message, dataServer);

    search(args.join(' '), function (err, res) {
        if(err) return message.channel.send("An error was encurred, contact a administrator \nhttps://discord.gg/NVBwmFz");

        let videos = res.videos.slice(0, 20);
        let resp = '';
        for (var i in videos){
            resp += `**[${parseInt(i)+1}]**: ${videos[i].title}\n`;
        }
        resp += `\n\n${language("MUSIC_CHOOSE")}`;

        msg.sendMsgA(resp,message,dataServer);

        const filter = m => !isNaN(m.content) && m.content < videos.length+1 && m.content > 0;
        const collector = message.channel.createMessageCollector(filter);

        collector.videos = videos;

        collector.once('collect', function (m){
            let commandFile = require('./Play');
            commandFile.run(client,message,[this.videos[parseInt(m.content)-1].url],fs, colors, database, dataServer, language)
        })
    })
}


exports.help = {
    name: "splay",
}
