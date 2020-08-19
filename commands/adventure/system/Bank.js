const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages, team, msg, green, red, beta, embedBuilder, advBank, advGems} = require("../../../rox");

const bkMax = 3;
const bkSizes = {
    "BK_1": 100000,
    "BK_2": 1000000,
    "BK_3": 10000000,
}
const bkPrice = {
    "BK_1": 500,
    "BK_2": 1000,
    "BK_3": 5000,
}

const bkTypes = {
    "BK_1": "ADV_BANK_TYPE_1",
    "BK_2": "ADV_BANK_TYPE_2",
    "BK_3": "ADV_BANK_TYPE_3",
}
const backpackSizes = {
    "BP_0": 500,
    "BP_1": 2500,
    "BP_2": 5000,
    "BP_3": 7500,
    "BP_4": 9000,
    "BP_5": 11000,
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
                if(results[0].bankLvl == 0){
                    embedBuilder.embed1Field(message.channel,language("ADV_BANK_TITLE") + message.author.username,language("ADV_BANK_DESCRIPTION"),embedBuilder.bColor,language("ADV_BANK_FIELD_NOT"),language("ADV_BANK_NOT"),embedBuilder.bFooter)
                }else{
                    embedBuilder.embed1Field(message.channel,language("ADV_BANK_TITLE") + message.author.username,language("ADV_BANK_DESCRIPTION"),embedBuilder.bColor,language("ADV_BANK_FIELD_HAVE"),language("ADV_BANK_ACCOUNT",results[0].bank,getSizeBk(results[0].bankLvl),getBankType(results[0].bankLvl, language),getBankRestSize(results[0].bankLvl, results[0].bank)),embedBuilder.bFooter)
                }
            } else {
                switch (args[0]) {
                    case "deposit":
                        if(!args[1]){ return msg.sendMsg("MISSED_ARGUMENTS",message,dataServer);}
                        if(args[1] > results[0].gems){
                            return embedBuilder.embed0Field(message.channel,"",language("ADV_GEMS_NOT_ENOUGH"),red,embedBuilder.bFooter)
                        }

                        if(parseInt(results[0].gems) + parseInt(results[0].bank) >= getSizeBk(results[0].bankLvl)) {
                            return embedBuilder.embed0Field(message.channel, "", language("ADV_BANK_NOT_ENOUGH", getSizeBk(results[0].bankLvl),dataServer.prefix), red, embedBuilder.bFooter)
                        }

                        advGems.removeGems(message.author.id,results[0].gems,args[1],database);
                        advBank.addGems(message.author.id,results[0].bank,args[1],database);

                        embedBuilder.embed0Field(message.channel,"",language("ADV_TRANSFER_SUCCESS",args[1]),green,embedBuilder.bFooter)
                        break;
                    case "take":
                        if(!args[1]){ return msg.sendMsg("MISSED_ARGUMENTS",message,dataServer);}

                        if(args[1] > results[0].bank){
                            return embedBuilder.embed0Field(message.channel,"",language("ADV_GEMS_NOT_ENOUGH_BANK"),red,embedBuilder.bFooter)
                        }

                        if(results[0].gems + args[1] >= getSizeBP(results[0].backpackLvl)) {
                            return embedBuilder.embed0Field(message.channel, "", language("ADV_BACKPACK_FULL"), red, embedBuilder.bFooter)
                        }

                        advGems.addGems(message.author.id,results[0].gems,args[1],database);
                        advBank.removeGems(message.author.id,results[0].bank,args[1],database);

                        embedBuilder.embed0Field(message.channel,"",language("ADV_TRANSFER_SUCCESS_0",args[1]),green,embedBuilder.bFooter)
                        break;
                    case "upg":
                        if (results[0].bankLvl == bkMax) {
                            return message.channel.send("max");
                        }

                        if (results[0].gems >= getPriceBk(results[0].bankLvl)) {
                            let bpLvl = parseInt(results[0].bankLvl) + parseInt("1");

                            advGems.removeGems(message.author.id,results[0].gems,getPriceBk(results[0].bankLvl),database);
                            advBank.setBankLevel(message.author.id,bpLvl,database)

                            embedBuilder.embed0Field(message.channel, language("ADV_BANK_TITLE") + message.author.username, language("ADV_BANK_LEVEL_UP", bpLvl, getNSizeBk(results[0].bankLvl)), green, embedBuilder.bFooter);
                        } else {
                            embedBuilder.embed0Field(message.channel, language("ADV_BANK_TITLE") + message.author.username, language("ADV_GEMS_NOT", getPriceBk(results[0].bankLvl) - parseInt(results[0].gems)), red, embedBuilder.bFooter);
                        }
                        break;
                }
            }
        } else {
            msg.sendMsg("ADV_NOT_IN", message, dataServer)
        }
    });
}

function getSizeBP(bpLvl){ // backpack size
    return bkSizes["BP_"+bpLvl];
}
function getSizeBk(bLvl){ // bank size
    return bkSizes["BK_"+bLvl];
}
function getNSizeBk(bLvl){ // bank size
    const n = parseInt(bLvl) + parseInt("1");
    return bkSizes["BK_"+n];
}
function getBankType(bLvl, language){
    return language(bkTypes["BK_"+bLvl]);
}
function getBankRestSize(bLvl, gems){
    return getSizeBk(bLvl) - gems;
}

function getPriceBk(bLvl){
    let n = parseInt(bLvl) + parseInt("1");
    return bkPrice["BK_"+n];
}

exports.help = {
    name: 'adv_bank',
};