const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages, team, msg, green, red, beta, embedBuilder, advBank, advGems, advEnergy, advResources} = require("../../../../rox");

const STONE_MINE = 0;
const IRON_MINE = 1;
const GOLD_MINE = 2;
const OBSIDIAN_MINE = 3;

const pickaxeChc = {
    "LEVEL_1": 1,
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
            if (!results[0].energy >= 4) {
                return message.channel.send("pas assez d'énergie pour l'instant");
            }

            let c = parseInt(results[0].gems) + parseInt(results[0].wood) + parseInt(results[0].stone) + parseInt(results[0].iron) + parseInt(results[0].gold) + parseInt(results[0].obsidian) + parseInt("4")  + parseInt(results[0].bread);
            if (c >= getSizeBP(results[0].backpackLvl)) {
                return embedBuilder.embed0Field(message.channel, "", language("ADV_BACKPACK_FULL"), red, embedBuilder.bFooter);
            } else {
                switch (getRandomInt(0, 4)) {
                    case 0:
                        if (results[0].energy >= 4) {
                            let c = getRandomInt(60, 151)
                            advEnergy.removeEnergy(message.author.id, results[0].energy, 4, database)
                            advResources.addStone(message.author.id, results[0].stone, c, database)
                            embedBuilder.embed0Field(message.channel, "", language("ADV_MINE", c, language("ADV_STONE"), "<:stone:746093115202338867>"), embedBuilder.bColor, embedBuilder.bFooter);
                            pickaxeChance(results[0].pickaxeLvl, message.author.id, results[0], database)
                        } else {
                            return embedBuilder.embed0Field(message.channel,"",language("ENERGY_NULL"),red,embedBuilder.bFooter);
                        }
                        break;
                    case 1:
                        if (results[0].energy >= 5) {
                            let c = getRandomInt(20, 51)
                            advEnergy.removeEnergy(message.author.id, results[0].energy, 5, database)
                            advResources.addIron(message.author.id, results[0].iron, c, database)
                            embedBuilder.embed0Field(message.channel, "", language("ADV_MINE", c, language("ADV_IRON"), "<:iron:746093114996817920>"), embedBuilder.bColor, embedBuilder.bFooter);
                            pickaxeChance(results[0].pickaxeLvl, message.author.id, results[0], database)
                        } else {
                            return embedBuilder.embed0Field(message.channel,"",language("ENERGY_NULL"),red,embedBuilder.bFooter);
                        }
                        break;
                    case 2:
                        if (results[0].energy >= 5) {
                            let c = getRandomInt(30, 121)
                            advEnergy.removeEnergy(message.author.id, results[0].energy, 5, database)
                            advResources.addGold(message.author.id, results[0].gold, c, database)
                            embedBuilder.embed0Field(message.channel, "", language("ADV_MINE", c, language("ADV_GOLD"), "<:gold:746093115265384622>"), embedBuilder.bColor, embedBuilder.bFooter);
                            pickaxeChance(results[0].pickaxeLvl, message.author.id, results[0], database)
                        } else {
                            return embedBuilder.embed0Field(message.channel,"",language("ENERGY_NULL"),red,embedBuilder.bFooter);
                        }
                        break;
                    case 3:
                        if (results[0].energy >= 10) {
                            let c = getRandomInt(40, 101)
                            advEnergy.removeEnergy(message.author.id, results[0].energy, 10, database)
                            advResources.addObsidian(message.author.id, results[0].obsidian, c, database)
                            embedBuilder.embed0Field(message.channel, "", language("ADV_MINE", c, language("ADV_OBSIDIAN"), "<:obsidian:746097330276794369>"), embedBuilder.bColor, embedBuilder.bFooter);
                            pickaxeChance(results[0].pickaxeLvl, message.author.id, results[0], database)
                        } else {
                            return embedBuilder.embed0Field(message.channel,"",language("ENERGY_NULL"),red,embedBuilder.bFooter);
                        }
                        break;
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

function pickaxeChance(lvl, id, results, database) {
    if (probability(pickaxeChc["LEVEL_" + lvl])) {
        advGems.addGems(id, results.gems, 1, database)
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

function getSizeBP(bpLvl){
    return bpSizes["BP_"+bpLvl];
}

exports.help = {
    name: 'adv_mine',
};