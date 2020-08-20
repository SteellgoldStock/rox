const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages, team, msg, green, red, beta, embedBuilder, advBank, advGems, advBp} = require("../../../rox");

const bpMax = 10;
const bpSizes = {
    "BP_0": 500,
    "BP_1": 2500,
    "BP_2": 5000,
    "BP_3": 7500,
    "BP_4": 9000,
    "BP_5": 10000,
    "BP_6": 50000,
    "BP_7": 100000,
    "BP_8": 1000000,
    "BP_9": 10000000,
    "BP_10": 1000000000,
}
const bpPrice = {
    "BP_0": 300,
    "BP_1": 500,
    "BP_2": 1000,
    "BP_3": 1600,
    "BP_4": 2400,
    "BP_5": 3200,
    "BP_6": 5000,
    "BP_7": 10000,
    "BP_8": 15000,
    "BP_9": 20000,
    "BP_10": 30000,
}

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if (!message.guild) return;
    if (!beta.includes(message.author.id)) return message.channel.send("This command is not avaible, is only for the staff, is a feature avaible in really, really, really, long time");

    let sql = `SELECT * FROM adventure WHERE userid = ${message.author.id}`;
    database.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        } else if (results.length > 0) {
            if (!args[0]) {
                if (results[0].backpackLvl == bpMax) {
                    embedBuilder.embed0Field(message.channel,language("ADV_INVENTORY_TITLE") + message.author.username,language("ADV_BACKPACK_MAX",results[0].backpackLvl, getASizeBP(results[0].backpackLvl), dataServer.prefix),embedBuilder.bColor,embedBuilder.bFooter)
                }else{
                    embedBuilder.embed0Field(message.channel,language("ADV_INVENTORY_TITLE") + message.author.username,language("ADV_BACKPACK_UP", results[0].backpackLvl, getSizeBP(results[0].backpackLvl), getPriceBP(results[0].backpackLvl), dataServer.prefix),embedBuilder.bColor,embedBuilder.bFooter)
                }
            } else {
                switch (args[0]) {
                    case "upg":
                        if (results[0].backpackLvl == bpMax) {
                            return message.channel.send("max");
                        }

                        if (results[0].gems >= getPriceBP(results[0].backpackLvl)) {
                            let bpLvl = parseInt(results[0].backpackLvl) + parseInt("1");

                            advBp.setBackpackLevel(message.author.id,bpLvl,database)
                            advGems.removeGems(message.author.id,results[0].gems,getPriceBP(results[0].backpackLvl),database)
                            embedBuilder.embed0Field(message.channel, language("ADV_INVENTORY_TITLE") + message.author.username, language("ADV_BACKPACK_LEVEL_UP", bpLvl, getSizeBP(results[0].backpackLvl), dataServer.prefix), green, embedBuilder.bFooter);
                        } else {
                            embedBuilder.embed0Field(message.channel, language("ADV_INVENTORY_TITLE") + message.author.username, language("ADV_GEMS_NOT", getPriceBP(results[0].backpackLvl) - results[0].gems), red, embedBuilder.bFooter);
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

function getASizeBP(bpLvl){
    return bpSizes["BP_"+bpLvl];
}

function getPriceBP(bpLvl){
    let n = bpLvl + 1;
    return bpPrice["BP_"+n];
}

exports.help = {
    name: 'adv_backpack',
};