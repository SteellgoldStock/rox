const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages, team, msg, beta, embedBuilder} = require("../../rox");

const bpSizes = {
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
            embedBuilder.embedAdvInv(
                message.channel,`${getBpEmoji(results[0].backpackLvl)} ` + language("ADV_INVENTORY_TITLE") + message.author.username,
                language("ADV_INVENTORY_DESCRIPTION", results[0].backpackLvl, getSizeBP(results[0].backpackLvl), dataServer.prefix),
                embedBuilder.bColor,
                language("ADV_INV_FIELD_PROFIL"),
                "<:energy:745650376900083723> " + results[0].energy + " "+language("ADV_ENERGY") +"\n"+
                "<:miner_helmet:745704167254917140> "+ getMinerHelmet(results[0].minerHelmetLvl,language, dataServer.prefix) +"\n"+
                "<:pickaxe:745704711230849205> "+ getPickaxe(results[0].pickaxeLvl, language, dataServer.prefix) +"\n"+
                "<:axe1:745721053791125564> "+ getAxe(results[0].axeLvl,language, dataServer.prefix) +"\n"+
                "<:ring1:745727946253402123> "+ getRing(results[0].ringLvl,language, dataServer.prefix) +"\n"+
                "<:gems:740261046480142377> "+ results[0].gems+" "+language("ADV_GEMS") +"\n"+
                "<:gems:740261046480142377> "+ results[0].bank+" "+language("ADV_BANK",dataServer.prefix),
                language("ADV_INV_FIELD_ORES"),
                language("ADV_INVENTORY_ORES",results[0].wood,results[0].stone,results[0].iron,results[0].gold,results[0].obsidian),
                embedBuilder.bFooter)
        } else {
            msg.sendMsg("ADV_NOT_IN", message, dataServer)
        }
    });
}

function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}

function getSizeBP(bpLvl){
    return bpSizes["BP_"+bpLvl];
}

function getBpEmoji(level){
    if(level == 0){
        return "<:backpack0:745755704425578563>";
    }else if(level == 1){
        return "<:backpack1:745753724038807663>";
    }else if(level == 2){
        return "<:backpack2:745755347209158747>";
    }else if(level == 3){
        return "<:backpack3:745755347339182090>";
    }else if(level == 4){
        return "<:backpack4:745755347372998657>";
    }else if(level == 5){
        return "<:backpack5:745755347431456809>";
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
    if(level == 0 ){
        return lang("ADV_AXE_NOT",prefix)
    }else{
        return lang("ADV_AXE_LEVEL",level)
    }
}

exports.help = {
    name: 'adv_inv',
};