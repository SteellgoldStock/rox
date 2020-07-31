const Discord = require("discord.js");
const { client, database, msg, colors, fs, team, queue, ytdl, servers} = require("../../rox");
const { MessageAttachment } = require('discord.js');
const got = require('got');

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    function play(connection, message) {
        var server = servers[message.guild.id];

        server.dispatcher = connection.playStream(ytdl(server.queue[0],{filter:"audioonly"}));
        server.queue.shift();

        server.dispatcher.on("end", function (){
            if(server.queue[0]) {
                play(connection, message);
            }else{
                connection.disconnect();
            }
        })
    }

    if(!args[0]){}
};

exports.help = {
    name: "play",
}