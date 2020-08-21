const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages, team, msg, beta, embedBuilder, advBp, advGems, advEnergy, advBank, advResources, green, red} = require("../../rox");

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

    if(args[0] !== "upg"){
        const user = message.mentions.users.first();

        if(!user){
            exports.memb = message.author.id;
            exports.name = message.author.username;
        }else{
            exports.memb = user.id;
            exports.name = user.username;
        }

        let sql = `SELECT * FROM adventure WHERE userid = ${exports.memb}`;
        database.query(sql, (error, results) => {
            if (error) {
                return console.error(error.message);
            } else if (results.length > 0) {
                embedBuilder.embedAdvInv(
                    message.channel,
                    `${getBpEmoji(results[0].backpackLvl)} ` + language("ADV_INVENTORY_TITLE") + exports.name,
                    language("ADV_INVENTORY_DESCRIPTION", results[0].backpackLvl, getSizeBP(results[0].backpackLvl), dataServer.prefix),
                    embedBuilder.bColor,
                    language("ADV_INV_FIELD_PROFIL"),
                    "<:energy:746093115043086336> " + results[0].energy + " "+language("ADV_ENERGY") +"\n"+
                    "<:miner_helmet:746098414600716329> "+ getMinerHelmet(results[0].minerHelmetLvl,language, dataServer.prefix) +"\n"+
                    "<:pickaxe:746096695066230815> "+ getPickaxe(results[0].pickaxeLvl, language, dataServer.prefix) +"\n"+
                    "<:axe1:746093114996949104> "+ getAxe(results[0].axeLvl,language, dataServer.prefix) +"\n"+
                    "<:ring1:746093115307327569> "+ getRing(results[0].ringLvl,language, dataServer.prefix) +"\n"+
                    "<:gems:746098225785864263> "+ results[0].gems+" "+language("ADV_GEMS") +"\n"+
                    "<:gems:746098225785864263> "+ results[0].bank+" "+language("ADV_BANK",dataServer.prefix),
                    language("ADV_INV_FIELD_ORES"),
                    language("ADV_INVENTORY_ORES",results[0].wood,results[0].stone,results[0].iron,results[0].gold,results[0].obsidian),
                    embedBuilder.bFooter)
            } else {
                msg.sendMsg("ADV_NOT_IN", message, dataServer)
            }
        });
    }else{
        let sql = `SELECT * FROM adventure WHERE userid = ${message.author.id}`;
        database.query(sql, (error, results) => {
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
        });
    }
}

function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}

function getSizeBP(bpLvl){
    return bpSizes["BP_"+bpLvl];
}

function getBpEmoji(level){
    if(level == 0){
        return "<:backpack0:746093053219045478>";
    }else if(level == 1){
        return "<:backpack1:746093053001072701>";
    }else if(level == 2){
        return "<:backpack2:746093052770385951>";
    }else if(level == 3){
        return "<:backpack3:746093052870787084>";
    }else if(level == 4){
        return "<:backpack4:746093053206462484>";
    }else if(level == 5){
        return "<:backpack5:746093053122576425>";
    }else if(level == 6){
        return "<:backpack5:746093053122576425>";
    }else if(level == 7){
        return "<:backpack5:746093053122576425>";
    }else if(level == 8){
        return "<:backpack5:746093053122576425>";
    }else if(level == 9){
        return "<:backpack5:746093053122576425>";
    }else if(level == 10){
        return "<:backpack5:746093053122576425>";
    }else{
        return "<:backpack0:745755704425578563>";
    }
}
function getMinerHelmet(level, lang, prefix){
    if(level == 0 ){
        return lang("ADV_MINER_HELMET_NOT",prefix)
    }else{
        return lang("ADV_MINER_HELMET_LEVEL",level)
    }
}
function getRing(level, lang, prefix){
    if(level == 0 ){
        return lang("ADV_RING_NOT",prefix)
    }else{
        return lang("ADV_RING_LEVEL",level)
    }
}
function getPickaxe(level, lang, prefix){
    if(level == 0 ){
        return lang("ADV_PICKAXE_NOT",prefix)
    }else{
        return lang("ADV_PICKAXE_LEVEL",level)
    }
}
function getAxe(level, lang, prefix){
    if(level == 0){
        return lang("ADV_AXE_NOT",prefix)
    }else{
        return lang("ADV_AXE_LEVEL",level)
    }
}

function getPriceBP(bpLvl){
    let n = bpLvl + 1;
    return bpPrice["BP_"+n];
}

exports.help = {
    name: 'adv_inv',
};