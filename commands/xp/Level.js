const Discord = require("discord.js");
const { client, database, msg, colors, fs, team} = require("../../rox");
const Canvas = require("canvas");

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {

    const user = message.mentions.users.first();
    if(!user){
        const sql = `SELECT * FROM goldUsers WHERE userid = '${message.author.id}'`;
        database.query(sql, function (err, result) {
            if (err) throw err;

            if(result.length > 0){
                exports.isGold = 1;
            }else{
                exports.isGold = 0;
            }
        });

        exports.mention = message.author;
    }else{
        const sql = `SELECT * FROM goldUsers WHERE userid = '${user.id}'`;
        database.query(sql, function (err, result) {
            if (err) throw err;

            if (result.length > 0) {
                exports.isGold = 1;
            } else {
                exports.isGold = 0;
            }
        });

        exports.mention = user;
    }

    Canvas.registerFont('font/aAbsoluteEmpire.otf', { family: "rose" });

    const canvas = Canvas.createCanvas(934, 282);
    const ctx = canvas.getContext('2d');

    database.query(`SELECT * FROM servers_xp WHERE userid = '${exports.mention.id}' AND guildid = '${message.guild.id}'`, async(err, rows) => {
        let level = rows[0].level;
        let xp = rows[0].xp;

        let maxxp = rows[0].level * 500 + rows[0].level * 40;

        let barxp = (xp * 700) / maxxp;
        if (barxp > 700) barxp = 700;

        if(exports.isGold == 0){
            const bg = await Canvas.loadImage('assets/userOutline.png');
            ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
        }else{
            const bg = await Canvas.loadImage('assets/goldOutline.png');
            ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
        }

        if(exports.isGold == 0){
            const bg2 = await Canvas.loadImage('assets/defaultBackground.jpg');
            ctx.globalAlpha = 0.7;
            ctx.drawImage(bg2, 24, 26, 886, 235);
        }else{
            if (!fs.existsSync("database/users/backgrounds/" + exports.mention.id + ".png")) {
                const bg2 = await Canvas.loadImage('assets/defaultBackground.jpg');
                ctx.globalAlpha = 0.7;
                ctx.drawImage(bg2, 24, 26, 886, 235);
            }else{
                const bg2 = await Canvas.loadImage("database/users/backgrounds/" + exports.mention.id + ".png");
                ctx.globalAlpha = 0.7;
                ctx.drawImage(bg2, 24, 26, 886, 235);
            }
        }


        ctx.globalAlpha = 1;
        ctx.quality = 'best';
        ctx.lineJoin = "round";
        ctx.lineWidth = 20;
        ctx.fillStyle = "#404040";
        ctx.strokeStyle = "#404040";
        ctx.strokeRect(100 + (20 / 2), 200 + (20 / 2), 700 - 20, 50 - 20);
        ctx.fillRect(100 + (20 / 2), 200 + (20 / 2), 700 - 20, 50 - 20);
        ctx.stroke();
        ctx.fill();

        if(exports.isGold == 0){
            ctx.fillStyle = "#4e64b5";
            ctx.strokeStyle = "#4e64b5";
        }else{
            ctx.fillStyle = "#c19654";
            ctx.strokeStyle = "#c19654";
        }
        ctx.strokeRect(100 + (20 / 2), 200 + (20 / 2), barxp - 20, 50 - 20);
        ctx.stroke();
        ctx.fillRect(100 + (20 / 2), 200 + (20 / 2), barxp - 20, 50 - 20);
        ctx.fill();

        ctx.font = "40px 'rose'";
        ctx.fillStyle = "#ffffff";
        ctx.fillText(`Level: ${level}`, 150, 140);

        ctx.fillText(exports.mention.username, 570, 140);

        ctx.font = "30px 'rose'";
        ctx.fillText(`${kFormatter(xp)}`, 110, 234);

        ctx.fillText(kFormatter(maxxp), 725, 234);

        ctx.beginPath();
        ctx.lineWidth = 11;
        if(exports.isGold == 0) {
            ctx.strokeStyle = "#4945bb";
        }else{
            ctx.strokeStyle = "#c19654";
        }

        ctx.shadowBlur = 20;
        ctx.shadowColor = "black";
        ctx.arc(455, 115, 75, 0, Math.PI * 2, true);
        ctx.stroke();
        ctx.closePath();
        ctx.clip();

        const avatar = await Canvas.loadImage(exports.mention.avatarURL({ format: 'png' }));
        ctx.drawImage(avatar, 380, 40, 150, 150);

        const attach = new Discord.MessageAttachment(canvas.toBuffer(), 'test.jpg');
        await message.channel.send(attach);
    });
}

function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}

module.exports.help = {
    name: "level"
}
