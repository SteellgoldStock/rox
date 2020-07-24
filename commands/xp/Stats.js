const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages} = require("../../rox");

const { Canvas } = require('canvas-constructor');
const { MessageAttachment } = require('discord.js');
const { resolve, join } = require('path');
const fetch = require('node-fetch');

const imageUrlRegex = /\?size=2048$/g;
const placeholder = new Map();

module.exports.run = async (client, message, args, fs, botConfg, colors, db, dbC, dbXp, language) => {
    if(!message.guild) return;;
    const key = `${message.guild.id}-${message.author.id}`;

    exports.maxLevel = db["maxLevel"];

    try {
            placeholder.set(key, {
                user: message.author.id, guild: message.guild.id, points: dbXp[message.author.id].xp, level: dbXp[message.author.id].level
            });

            const buffer = await profile(message, placeholder.get(key),dbXp);
            const filename = `profile-${message.author.id}2.jpg`;
            const Attach = new MessageAttachment(buffer, filename);
            await message.channel.send(Attach);

    } catch (error) {
        console.log(error.stack);
        await messages.sendErrorMsg(message.channel,`${error.message}`);
    }
}

async function profile(message) {
    const key = `${message.guild.id}-${message.author.id}`;
    const member = message.member;
    const {level, points} = placeholder.get(key);

    try {
        const result = await fetch(member.user.displayAvatarURL({ format: 'jpg' }));
        if (!result.ok) new Error('Failed to get the avatar!');
        const avatar = await result.buffer();

        let MaxXp = level * 100 + 300

        const name = member.displayName.length > 30 ? member.displayName.substring(0, 17) + '...'
            : member.displayName;

        return new Canvas(400, 180)
            .setColor('#242424')

            .setColor("#3e4247")
            .addRect(169, 26, 231, 40)
            .addRect(224, 108, 176, 40)
            .setShadowColor('rgb(21,21,21)')
            .setShadowOffsetY(5)
            .setShadowBlur(10)
            .addCircle(84, 90, 62)
            .addCircularImage(avatar, 85, 90, 64)
            .save()
            .createBeveledClip(10, 139, 150, 30, 0)
            .setColor('#494949')
            .fill()
            .restore()
            .setTextAlign('center')
            .setTextFont('18pt Klavika Regular')
            .setColor('#FFFFFF')
            .addText(name, 285, 54)
            .addText(`Level: ${level} / ${exports.maxLevel}`, 84, 157)
            .setTextAlign('left')
            .addText(`XP: ${points} / ${MaxXp}`, 241, 136)
            .toBuffer();
    } catch (error) {
        await messages.sendErrorMsg(message.channel,`${error.message}`);
    }
}

exports.help = {
    name: 'xp',
};
