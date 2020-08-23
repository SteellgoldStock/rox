const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages, team, msg, beta, embedBuilder, advResources, advBank, advEnergy, advGems, advBp, green, red} = require("../../../rox");

const types = {
    "wood": 5,
    "stone": 1,
    "iron": 3,
    "gold": 5,
    "obsidian": 10,
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
                if(args[0]){
                    if(args[1]){
                        let c = types[args[0]] * args[1];

                        if(results[0].gems == 0){
                            return;
                        }

                        if(!results[0].gems >= c){
                            embedBuilder.embed0Field(message.channel, "", language("ADV_GEMS_NOT", c - parseInt(results[0].gems)), red, embedBuilder.bFooter);
                        }

                        switch (args[0]) {
                            case "wood":
                                advGems.removeGems(message.author.id, results[0].gems, c, database);
                                advResources.addWood(message.author.id, results[0].wood, args[1], database)
                                embedBuilder.embed0Field(message.channel, "", language("ADV_BUYED", args[1], getEMJType(args[0])), green, embedBuilder.bFooter);
                                break;
                            case "iron":
                                advGems.removeGems(message.author.id, results[0].gems, c, database);
                                advResources.addIron(message.author.id, results[0].iron, args[1], database)
                                embedBuilder.embed0Field(message.channel, "", language("ADV_BUYED", args[1], getEMJType(args[0])), green, embedBuilder.bFooter);
                                break;
                            case "stone":
                                advGems.removeGems(message.author.id, results[0].gems, c, database);
                                advResources.addStone(message.author.id, results[0].stone, args[1], database)
                                embedBuilder.embed0Field(message.channel, "", language("ADV_BUYED", args[1], getEMJType(args[0])), green, embedBuilder.bFooter);
                                break;
                            case "gold":
                                advGems.removeGems(message.author.id, results[0].gems, c, database);
                                advResources.addGold(message.author.id, results[0].gold, args[1], database)
                                embedBuilder.embed0Field(message.channel, "", language("ADV_BUYED", args[1], getEMJType(args[0])), green, embedBuilder.bFooter);
                                break;
                            case "obsidian":
                                advGems.removeGems(message.author.id, results[0].gems, c, database);
                                advResources.addObsidian(message.author.id, results[0].obsidian, args[1], database)
                                embedBuilder.embed0Field(message.channel, "", language("ADV_BUYED", args[1], getEMJType(args[0])), green, embedBuilder.bFooter);
                                break;
                        }
                    }else{
                        msg.sendMsgA(language("ADV_SHOP_USE",dataServer.prefix), message, dataServer)
                    }
                }else{
                    msg.sendMsg("ADV_ITEMS_SELL", message, dataServer)
                }
            }
        } else {
            msg.sendMsg("ADV_NOT_IN", message, dataServer)
        }
    });
}

function getEMJType(name){
    if(name === "wood"){
        return "<:wood:746093053068050504>";
    }else if(name === "stone"){
        return "<:stone:746093115202338867>";
    }else if(name === "iron"){
        return "<:iron:746093114996817920>";
    }else if(name === "gold"){
        return "<:gold:746093115265384622>";
    }else if(name === "obsidian"){
        return "<:obsidian:746097330276794369>";
    }else{
        return "";
    }
}

function getSizeBP(bpLvl){
    return bpSizes["BP_"+bpLvl];
}

exports.help = {
    name: 'adv_buy',
};