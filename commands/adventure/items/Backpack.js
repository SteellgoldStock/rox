const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages, team, msg, green, red} = require("../../../rox");

const bpSizes = {
    "BP_0": 500,
    "BP_1": 2500,
    "BP_2": 5000,
    "BP_3": 7500,
    "BP_4": 9000,
    "BP_5": 11000,
}
const bpPrice = {
    "BP_0": 300,
    "BP_1": 500,
    "BP_2": 1000,
    "BP_3": 1600,
    "BP_4": 2400,
    "BP_5": 3200,
}

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if (!message.guild) return;
    if (!team.includes(message.author.id)) return message.channel.send("This command is not avaible, is only for the staff, is a feature avaible in really, really, really, long time");

    let sql = `SELECT * FROM adventure WHERE userid = ${message.author.id}`;
    database.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        } else if (results.length > 0) {
            if (!args[0]) {
                let embed = new Discord.MessageEmbed()
                embed.setTitle(language("ADV_INVENTORY_TITLE") + message.author.username)
                embed.setDescription(language("ADV_BACKPACK_UP", results[0].backpackLvl, getSizeBP(results[0].backpackLvl), getPriceBP(results[0].backpackLvl), dataServer.prefix))
                message.channel.send(embed)
            } else {
                switch (args[0]) {
                    case "upg":
                        if(results[0].gems >= getPriceBP(results[0].backpackLvl)){
                            let bpLvl = parseInt(results[0].backpackLvl) + parseInt("1");
                            let gemsN = parseInt(results[0].gems) - parseInt(getPriceBP(results[0].backpackLvl));
                            var sql = `UPDATE adventure SET backpackLvl = '${bpLvl}' WHERE userid = '${message.author.id}'`;
                            var sql2 = `UPDATE adventure SET gems = '${gemsN}' WHERE userid = '${message.author.id}'`;
                            database.query(sql, function (err) { if (err) throw err; });
                            database.query(sql2, function (err) { if (err) throw err; });

                            let embed = new Discord.MessageEmbed()
                            embed.setTitle(language("ADV_INVENTORY_TITLE") + message.author.username)
                            embed.setDescription(language("ADV_BACKPACK_LEVEL_UP",bpLvl, getSizeBP(results[0].backpackLvl), dataServer.prefix));
                            embed.setColor(green);
                            message.channel.send(embed)
                        }else{
                            let embed = new Discord.MessageEmbed()
                            embed.setTitle(language("ADV_INVENTORY_TITLE") + message.author.username)
                            embed.setDescription(language("ADV_GEMS_NOT",getPriceBP(results[0].backpackLvl) - results[0].gems));
                            embed.setColor(red);
                            message.channel.send(embed)
                        }
                        break;
                }
            }
        } else {
            msg.sendMsg("ADV_NOT_IN", message, dataServer)
        }
    });
}

function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}

function getSizeBP(bpLvl){
    let n = bpLvl + 1;
    return bpSizes["BP_"+n];
}

function getPriceBP(bpLvl){
    let n = bpLvl + 1;
    return bpPrice["BP_"+n];
}

exports.help = {
    name: 'adv_backpack',
};