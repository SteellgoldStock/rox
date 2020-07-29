const Discord = require("discord.js");
const { client, database, msg, colors, fs, team} = require("../../rox");
const { MessageAttachment } = require('discord.js');
const got = require('got');

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    got('https://www.reddit.com/r/memes/random/.json').then(response => {
        let content = JSON.parse(response.body);
        let memeUrl = `https://reddit.com${permalink}`;
        let memeImage = content[0].data.children[0].data.url;
        let memeTitle = content[0].data.children[0].data.title;
        message.channel.send(":joy: " + memeTitle + "\n" + memeImage);
    });
}


exports.help = {
    name: "memes",
}