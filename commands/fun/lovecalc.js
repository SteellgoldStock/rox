const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages} = require("../../rox");
const { Canvas } = require('canvas-constructor');

module.exports.run = async (client, message, args, fs, botConfg, colors, db, dbC, dbXp, language) => {

if(!args[0]) return;
if(!args[1]) return;

/*let love = new Canvas(400, 180)
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
            .setColor('#404040')
            .fill()
            .restore()
            .setTextAlign('center')
            .setTextFont('16pt Heroes')
            .setColor('#FFFFFF')
            .addText(name, 285, 54)
            .addText(`Level: ${level}`, 84, 157)
            .setTextAlign('left')
            .addText(`XP: ${kFormatter(xp)}`, 241, 136)
            .toBuffer();*/

}

exports.help = {
    name: "lovecalc",
    type: "fun"
}
