const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages, team} = require("../../rox");

const { createCanvas, loadImage } = require('canvas');
const { MessageAttachment } = require('discord.js');
const fetch = require('node-fetch');
var path = require('path');

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if (!message.guild) return;
    if(!team.includes(message.author.id)) return message.channel.send("This command is in re-devolvement thank you kindly wait");

    const canvas = createCanvas(1000,333);
    const ctx = canvas.getContext("2d");
    const background = await loadImage()
}

function kFormatter(num) {

    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}

exports.help = {
    name: 'level',
};