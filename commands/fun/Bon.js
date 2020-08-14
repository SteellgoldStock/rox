const Discord = require("discord.js");
const { client, database, msg, colors, fs} = require("../../rox");
const { Canvas } = require("canvas-constructor");
const path = require('path');
const { MessageAttachment } = require('discord.js');

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {

    let text = args.shift();
    if (!text) return msg.sendMsg("MISSED_TEXTS", message, dataServer)
    if (text.length > 12) return msg.sendMsg("TOO_MUCH_ARGS", message, dataServer)
    text = text.allReplace({
        "_": " "
    });
    let color = args.shift();
    if (!color){
        color = "white";
    }
    color = color.toLowerCase()
    color.replace("", "_")
    color = color.split("_")

    for (let i = 0; i < color.length; i++) {

        switch (color[i]) {

            case "r":
                color[i] = "red";
                break;
            case "g":
                color[i] = "green";
                break;
            case "b":
                color[i] = "blue";
                break;
            case "w":
                color[i] = "white";
                break;
            case "bl":
                color[i] = "black";
                break;
            case "y":
                color[i] = "yellow";
                break;
            case "o":
                color[i] = "orange";
                break;
            case "p":
                color[i] = "pink";
                break;
            case "m":
                color[i] = "magenta";
                break;
            case "ma":
                color[i] = "mauve";
                break;
            case "v":
                color[i] = "violet";
                break;
            case "gr":
                color[i] = "gray";
                break;
            case "br":
                color[i] = "brawn";
                break;
            case "pu":
                color[i] = "purpule";
                break;
            case "c":
                color[i] = "cyan";
                break;
            case "be":
                color[i] = "beige";
                break;
        }

    }

    Canvas.registerFont('font/Bontoutou.ttf', {"family": "Bontoutou"});

    const buffer = await image(text, color);
    const filename = `${message.author.id}.png`;
    const Attach = new MessageAttachment(buffer, filename);
    message.channel.send(Attach);

};

async function image(text, color) {

    return new Canvas(256, 256)
        .addImage(path.join(`database/users/bontoutou.png`), 0, 0, 256, 256)
        .setColor(`#FFFFFF`)
        .setTextFont("italic 45px Bontoutou")
        .setStroke("#000000")
        .setStrokeWidth(500)
        .addText("BON", 10, 180)

        .setColor(`${color[0]}`)
        .setTextFont("55px Bontoutou")
        .setStroke("#000000")
        .setStrokeWidth(500)
        .addText(text, 1, 225)

        .toBufferAsync();
};

module.exports.help = {
    name: "btt"
};
