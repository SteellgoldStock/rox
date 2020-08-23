const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages, team, msg, green, red, beta, embedBuilder, advBank, advGems, advEnergy, advResources} = require("../../../../rox");

const axeChc = {
    "LEVEL_1": 10,
    "LEVEL_2": 25,
    "LEVEL_3": 50,
    "LEVEL_4": 85,
    "LEVEL_5": 100
}

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if (!message.guild) return;

    let sql = `SELECT * FROM adventure WHERE userid = ${message.author.id}`;
    database.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        } else if (results.length > 0) {
            let c = parseInt(results[0].gems) + parseInt(results[0].wood) + parseInt(results[0].stone) + parseInt(results[0].iron) + parseInt(results[0].gold) + parseInt(results[0].obsidian) + parseInt("4")  + parseInt(results[0].bread);
            if (c >= getSizeBP(results[0].backpackLvl)) {
                return embedBuilder.embed0Field(message.channel, "", language("ADV_BACKPACK_FULL"), red, embedBuilder.bFooter);
            } else {
                if (results[0].energy >= 2) {
                    let c = getRandomInt(10, 81)
                    advEnergy.removeEnergy(message.author.id, results[0].energy, ringEnergy(results[0].ringLvl, 2), database)
                    advResources.addWood(message.author.id, results[0].wood, c, database)
                    embedBuilder.embed0Field(message.channel, "", language("ADV_AXED", c, language("ADV_WOOD"), "<:wood:746093053068050504>"), embedBuilder.bColor, embedBuilder.bFooter);
                    axeChance(results[0].pickaxeLvl,c, message.author.id, results[0], database)
                } else {
                    return embedBuilder.embed0Field(message.channel,"",language("ENERGY_NULL"),red,embedBuilder.bFooter);
                }
            }
        } else {
            msg.sendMsg("ADV_NOT_IN", message, dataServer)
        }
    });
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function axeChance(lvl, c, id, results, database) {
    if (probability(axeChc["LEVEL_" + lvl])) {
        advResources.addWood(id, results.wood, c, database)
    }
}

function probability(n){
    return Math.random() < n;
}

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

function ringEnergy(level, count){
    const chc = {
        "LEVEL_1": 10,
        "LEVEL_2": 25,
        "LEVEL_3": 50,
        "LEVEL_4": 85,
        "LEVEL_5": 100
    }

    if(probability(chc["LEVEL_"+level])){
        return level - 1;
    }else{
        return count;
    }
}

function getSizeBP(bpLvl){
    return bpSizes["BP_"+bpLvl];
}

exports.help = {
    name: 'adv_wood',
};