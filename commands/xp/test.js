const Discord = require('discord.js');
const Canvas = require('canvas');

module.exports.run = async(client, message) => {

    Canvas.registerFont('././assets/fonts/aAbsoluteEmpire.ttf', { family: "rose" });

    const canvas = Canvas.createCanvas(934, 282);
    const ctx = canvas.getContext('2d');

    client.db.query(`SELECT * FROM user WHERE userid = '${message.author.id}'`, async(err, rows) => {
        let level = rows[0].level;
        let xp = rows[0].userxp;

        let barxp = (xp * 700) / 200;
        if (barxp > 700) barxp = 700;

        const bg = await Canvas.loadImage('././assets/mdrr.png');
        ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

        const bg2 = await Canvas.loadImage('././assets/mdr.jpg');
        ctx.globalAlpha = 0.7;
        ctx.drawImage(bg2, 25, 26, 885, 235);

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

        ctx.fillStyle = "#4e64b5";
        ctx.strokeStyle = "#4e64b5";
        ctx.strokeRect(100 + (20 / 2), 200 + (20 / 2), barxp - 20, 50 - 20);
        ctx.stroke();
        ctx.fillRect(100 + (20 / 2), 200 + (20 / 2), barxp - 20, 50 - 20);
        ctx.fill();

        ctx.font = "40px 'rose'";
        ctx.fillStyle = "#ffffff";
        ctx.fillText(`Level: ${level}`, 150, 140);

        ctx.fillText(message.author.username, 570, 140);

        ctx.font = "30px 'rose'";
        ctx.fillText(`${xp}`, 110, 234);

        ctx.fillText(`200`, 725, 234);

        ctx.beginPath();
        ctx.lineWidth = 11;
        ctx.strokeStyle = "#4945BB";
        ctx.shadowBlur = 20;
        ctx.shadowColor = "black";
        ctx.arc(455, 115, 75, 0, Math.PI * 2, true);
        ctx.stroke();
        ctx.closePath();
        ctx.clip();

        const avatar = await Canvas.loadImage(message.author.avatarURL({ format: 'png' }));
        ctx.drawImage(avatar, 380, 40, 150, 150);

        const attach = new Discord.MessageAttachment(canvas.toBuffer(), 'test.jpg');
        await message.channel.send(attach);
    });
}

module.exports.help = {
    name: "lvl"
}
