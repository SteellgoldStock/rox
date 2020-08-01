const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages} = require("../../rox");

const { Canvas } = require('canvas-constructor');
const { MessageAttachment } = require('discord.js');
const fetch = require('node-fetch');
var path = require('path');

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if (!message.guild) return;

    Canvas.registerFont('font/Heroes.ttf', {"family": "Heroes"})
    let db = JSON.parse(fs.readFileSync("database/users/users.json", "utf8"));
    if(message.mentions.users.first()){
        let member = message.guild.member(message.mentions.users.first()).user;
        if(!db[member.id]){
            db[member.id] = {type:"color",color:`BF5E45`}
            fs.writeFileSync("database/users/users.json", JSON.stringify(db), "utf-8");
            await send(db[member.id].type,message,database, db, member, dataServer)
        }else{
            await send(db[member.id].type,message,database, db, member, dataServer)
        }

    } else {
        let member = message.author;

        if(!db[member.id]){
            db[member.id] = {type:"color",color:`BF5E45`}
            fs.writeFileSync("database/users/users.json", JSON.stringify(db), "utf-8");
            await send(db[member.id].type,message,database, db, member, dataServer)
        }else{
            await send(db[member.id].type,message,database, db, member, dataServer)
        }
    }
}

async function send(option, message, database, db, member, dataServer){

    if(option == "img"){
        const buffer = await image(message, database, member);
        const filename = `${member.id}.png`;
        const Attach = new MessageAttachment(buffer, filename);
        await message.channel.send(Attach);
    }else{
        const buffer = await color(message, database, db, member, dataServer);
        const filename = `${message.id}.png`;
        const Attach = new MessageAttachment(buffer, filename);
        await message.channel.send(Attach);
    }
}

async function color(message, database, db, member, dataServer) {

    database.query(`SELECT * FROM goldUsers WHERE userid = ${member.id}`, function (error, results, fields) {
        if (error) {
            return console.log(error);
        } else if (results.length > 0) {
            exports.gold = member.id;
        } else {

        }
    });

    database.query(`SELECT * FROM servers_xp WHERE guildid=${message.guild.id} AND userid=${member.id}`, function (error, results, fields) {
        if (error) {
            return false;
        } else if (results.length > 0) {
            exports.level = results[0].level;
            exports.xp = results[0].xp;
            exports.maxXp = results[0].level * 150 + results[0].level * 35;
        } else {

        }
    });

    const result = await fetch(member.displayAvatarURL({format: 'png'}));
    if (!result.ok) new Error('Failed to get the avatar!');
    const avatar = await result.buffer();

    const name = member.username.length > 9 ? member.username.substring(0, 17) + '...'
        : member.username;
    if (dataServer.isGold === 1){

        if (exports.gold === member.id){

            await addImageGold(message.guild.id, member)

        } else {

            await addImage(message.guild.id, member)

        }

    } else if (exports.gold === member.id){

        await addColorGold(member.id, db, member)

    } else {

        await addColor(member.id, db, member)

    }
}

async function image(message, database, member, db) {

    database.query(`SELECT * FROM goldUsers WHERE userid = ${member.id}`, function (error, results, fields) {
        if (error) {
            return console.log(error);
        } else if (results.length > 0) {
            exports.gold = member.id;
        } else {

        }
    });

    database.query(`SELECT * FROM servers_xp WHERE guildid=${message.guild.id} AND userid=${member.id}`, function (error, results, fields) {
        if (error) {
            return false;
        } else if (results.length > 0) {
            exports.level = results[0].level;
            exports.xp = results[0].xp;
            exports.maxXp = results[0].level * 150 + results[0].level * 35;
        } else {

        }
    });

    const result = await fetch(member.displayAvatarURL({format: 'png'}));
    if (!result.ok) new Error('Failed to get the avatar!');
    const avatar = await result.buffer();

    const name = member.username.length > 9 ? member.username.substring(0, 17) + '...'
        : member.username;

    if (exports.gold === member.id){

        await addImageGold(member.id, member);

    } else {

        let dbi = JSON.parse(fs.readFileSync("database/users/users.json", "utf8"));
        dbi[member.id] = {type:"color",color:`BF5E45`};
        fs.writeFileSync("database/users/users.json", JSON.stringify(dbi), "utf-8");

        await addColor(member.id, db, member);


    }
}

function kFormatter(num) {

    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}

async function addColor(id, db, member) {

    const result = await fetch(member.displayAvatarURL({format: 'png'}));
    if (!result.ok) new Error('Failed to get the avatar!');
    const avatar = await result.buffer();

    const name = member.username.length > 9 ? member.username.substring(0, 17) + '...'
        : member.username;

    return new Canvas(400, 180)
        .setColor("#" + db[id].color)
        .addRect(84, 0, 316, 180)
        .setColor("#36393F")
        .addRect(169, 26, 231, 46)
        .addRect(224, 108, 176, 46)
        .setShadowColor('rgba(22, 22, 22, 1)')
        .setShadowOffsetY(5)
        .setShadowBlur(10)
        .addCircle(84, 90, 62)
        .addCircularImage(avatar, 85, 90, 64)
        .save()
        .createBeveledClip(10, 139, 150, 30, 0)
        .setColor('#36393F')
        .fill()
        .restore()
        .setTextAlign('center')
        .setTextFont('12pt Heroes')
        .setColor('#FFFFFF')
        .addText(name, 285, 54)
        .addText(`Level: ${exports.level}`, 84, 157)
        .setTextAlign('left')
        .addText(`XP: ${kFormatter(exports.xp)}`, 241, 136)
        .toBuffer();
}

async function addColorGold(id, db, member) {

    const result = await fetch(member.displayAvatarURL({format: 'png'}));
    if (!result.ok) new Error('Failed to get the avatar!');
    const avatar = await result.buffer();

    const name = member.username.length > 9 ? member.username.substring(0, 17) + '...'
        : member.username;

    return new Canvas(400, 180)
        .setColor("#" + db[id].color)
        .addRect(84, 0, 316, 180)
        .setColor("#36393F")
        .addRect(169, 26, 231, 46)
        .addRect(224, 108, 176, 46)
        .setShadowColor('rgba(22, 22, 22, 1)')
        .setShadowOffsetY(5)
        .setShadowBlur(10)
        .addCircle(84, 90, 62)
        .addCircularImage(avatar, 85, 90, 64)
        .addImage(path.join(`database/users/gold.png`), 12,40,36,36)
        .save()
        .createBeveledClip(10, 139, 150, 30, 0)
        .setColor('#36393F')
        .fill()
        .restore()
        .setTextAlign('center')
        .setTextFont('12pt Heroes')
        .setColor('#FFFFFF')
        .addText(name, 285, 54)
        .addText(`Level: ${exports.level}`, 84, 157)
        .setTextAlign('left')
        .addText(`XP: ${kFormatter(exports.xp)}`, 241, 136)
        .toBuffer();
}

async function addImage(id, member) {

    const result = await fetch(member.displayAvatarURL({format: 'png'}));
    if (!result.ok) new Error('Failed to get the avatar!');
    const avatar = await result.buffer();

    const name = member.username.length > 9 ? member.username.substring(0, 17) + '...'
        : member.username;

    return new Canvas(400, 180)
        .addImage(path.join(`database/users/backgrounds/${id}.png`), 84, 0, 316, 180)
        .setColor("#36393F")
        .addRect(169, 26, 231, 46)
        .addRect(224, 108, 176, 46)
        .setShadowColor('rgba(22, 22, 22, 1)')
        .setShadowOffsetY(5)
        .setShadowBlur(10)
        .addCircle(84, 90, 62)
        .addCircularImage(avatar, 85, 90, 64)
        .save()
        .createBeveledClip(10, 139, 150, 30, 0)
        .setColor('#36393F')
        .fill()
        .restore()
        .setTextAlign('center')
        .setTextFont('12pt Heroes')
        .setColor('#FFFFFF')
        .addText(name, 285, 54)
        .addText(`Level: ${exports.level}`, 84, 157)
        .setTextAlign('left')
        .addText(`XP: ${kFormatter(exports.xp)}`, 241, 136)
        .toBuffer();
}

async function addImageGold(id, member) {

    const result = await fetch(member.displayAvatarURL({format: 'png'}));
    if (!result.ok) new Error('Failed to get the avatar!');
    const avatar = await result.buffer();

    const name = member.username.length > 9 ? member.username.substring(0, 17) + '...'
        : member.username;

    return new Canvas(400, 180)
        .addImage(path.join(`database/users/backgrounds/${id}.png`), 84, 0, 316, 180)
        .setColor("#36393F")
        .addRect(169, 26, 231, 46)
        .addRect(224, 108, 176, 46)
        .setShadowColor('rgba(22, 22, 22, 1)')
        .setShadowOffsetY(5)
        .setShadowBlur(10)
        .addCircle(84, 90, 62)
        .addCircularImage(avatar, 85, 90, 64)
        .addImage(path.join(`database/users/gold.png`), 12,40,36,36)
        .save()
        .createBeveledClip(10, 139, 150, 30, 0)
        .setColor('#36393F')
        .fill()
        .restore()
        .setTextAlign('center')
        .setTextFont('12pt Heroes')
        .setColor('#FFFFFF')
        .addText(name, 285, 54)
        .addText(`Level: ${exports.level}`, 84, 157)
        .setTextAlign('left')
        .addText(`XP: ${kFormatter(exports.xp)}`, 241, 136)
        .toBuffer();
}

exports.help = {
    name: 'level',
};