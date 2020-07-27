const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages} = require("../../rox");

const { Canvas } = require('canvas-constructor');
const { MessageAttachment } = require('discord.js');
const { resolve, join } = require('path');
const fetch = require('node-fetch');
const fsn = require('fs-nextra');
const { Image } = require('image-js');
var path = require('path');

const imageUrlRegex = /\?size=2048$/g;
const placeholder = new Map();

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if (!message.guild) return;

    Canvas.registerFont('font/Heroes.ttf', {"family": "Heroes"})

    const buffer = await profile(message, database);
    const filename = `${message.author.id}.png`;
    const Attach = new MessageAttachment(buffer, filename);
    await message.channel.send(Attach);
}

async function profile(message, database) {
    const member = message.member;

    database.query(`SELECT * FROM servers_xp WHERE guildid=${message.guild.id} AND userid=${message.author.id}`, function (error, results, fields) {
        if (error) {
            return false;
        } else if (results.length > 0) {
            exports.level = results[0].level;
            exports.xp = results[0].xp;
        } else {

        }
    });

    const result = await fetch(member.user.displayAvatarURL({format: 'png'}));
    if (!result.ok) new Error('Failed to get the avatar!');
    const avatar = await result.buffer();

    const name = member.displayName.length > 9 ? member.displayName.substring(0, 17) + '...'
        : member.displayName;

    return new Canvas(400, 180)
        .addImage(path.join("database/users/backgrounds/504392983244832780.png"), 0,0,400,180)
        .addImage(path.join("database/users/backgrounds/back.png"), 0,0)
        .addRect(84, 0, 316, 180)
        .setColor("#2C2F33")
        .addRect(169, 26, 231, 46)
        .addRect(224, 108, 176, 46)
        .setShadowColor('rgba(22, 22, 22, 1)')
        .setShadowOffsetY(5)
        .setShadowBlur(10)
        .addCircle(84, 90, 62)
        .addCircularImage(avatar, 85, 90, 64)
        .save()
        .createBeveledClip(10, 139, 150, 30, 0)
        .setColor('#404040')
        .fill()
        .restore()
        .setTextAlign('center')
        .setTextFont('16pt Heroes')
        .setColor('#FFFFFF')
        .addText(name, 285, 54)
        .addText(`Level: ${exports.level}`, 84, 157)
        .setTextAlign('left')
        .addText(`XP: ${kFormatter(exports.xp)}`, 241, 136)
        .toBuffer();
}

function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}

exports.help = {
    name: 'leaderboard',
};
