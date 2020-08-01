const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages, msg} = require("../../rox");

const { Canvas } = require('canvas-constructor');
const { MessageAttachment } = require('discord.js');
const fetch = require('node-fetch');
var path = require('path');

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if (!message.guild) return;

    if(!args[0] && !args[1]){

        return msg.sendMsg("NOT_ARGS_LOVE",message,dataServer)

    } else if(!args[1]){

        let member1 = message.author;

        let member2 = message.guild.member(message.mentions.users.first());

        if(member2){

            const buffer = await image(message, member1, member2.user);
            const filename = `${member1.id}.png`;
            const Attach = new MessageAttachment(buffer, filename);

            const random = Math.floor((Math.random() * 100) + 1);


            if(random < 31){

                return message.channel.send(`**${member1.username}** + **${member2.user.username}** = ${random} **%** 💔`, Attach)

            } else {

                return message.channel.send(`**${member1.username}** + **${member2.user.username}** = ${random} **%** ❤️`, Attach);

            }

        } else {

            return await msg.sendMsg("PU_NO_USER", message, dataServer);

        }

    } else {

        args[1] = args[1].slice(2, -1)

        if(args[1].startsWith("!")){

            args[1] = args[1].slice(1);

        } else {

            args[1] = args[1];

        }

        let member1 = message.guild.member(message.mentions.users.first());

        let member2 = message.guild.member(args[1]);

        if(member1 && member2){

            const buffer = await image(message, member1.user, member2.user);
            const filename = `${member1.id}.png`;
            const Attach = new MessageAttachment(buffer, filename);

            const random = Math.floor((Math.random() * 100) + 1);

            if(random < 31){

                return message.channel.send(`**${member1.user.username}** + **${member2.user.username}** = ${random} % 💔`, Attach)

            } else {

                return message.channel.send(`**${member1.user.username}** + **${member2.user.username}** = ${random} % ❤️`, Attach);

            }

        } else {

            return await msg.sendMsg("PU_NO_USER", message, dataServer);

        }

    }
}


async function image(message, member1, member2) {



    const result1 = await fetch(member1.displayAvatarURL({format: 'png'}));
    const result2 = await fetch(member2.displayAvatarURL({format: 'png'}));
    if (!result1.ok) new Error('Failed to get the avatar!');
    if (!result2.ok) new Error('Failed to get the avatar!');
    const avatar1 = await result1.buffer();
    const avatar2 = await result2.buffer();

        return new Canvas(400, 180)
            .addImage(avatar1, 0, 0, 200, 180)
            .addImage(avatar2, 200, 0, 200, 180)
            .addImage(path.join(`database/users/heart.png`), 150, 45, 100, 90)
            .save()
            .toBuffer();


}

exports.help = {
    name: 'lovecalc',
};