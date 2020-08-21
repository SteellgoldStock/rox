const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages, team, msg, beta, embedBuilder, advResources, advBank, advEnergy, advGems, advBp, green, red} = require("../../../rox");

const types = {
    "wood": 1,
    "stone": 1,
    "iron": 2,
    "gold": 3,
    "obsidian": 30,
}

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if (!message.guild) return;
    if (!beta.includes(message.author.id)) return message.channel.send("This command is not avaible, is only for the staff, is a feature avaible in really, really, really, long time");

    let sql = `SELECT * FROM adventure WHERE userid = ${message.author.id}`;
    database.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        } else if (results.length > 0) {
            if(args[0]){
                if(args[1]){
                    let c = types[args[0]] * args[1];

                    switch (args[0]){
                        case "wood":
                            if(args[1] >= results[0].wood){
                                advGems.addGems(message.author.id,results[0].gems,c,database);
                                advResources.removeWood(message.author.id,results[0].wood,args[1],database)
                                return embedBuilder.embed0Field(message.channel,"",language("ADV_SELLED",args[1],getEMJType(args[0])),green,embedBuilder.bFooter);
                            }else{
                                msg.sendMsgA(language("ADV_NOT_HAVE_TO_SELL",args[1]), message, dataServer)
                            }
                            break;
                        case "stone":
                            if(args[1] >= results[0].stone){
                                advGems.addGems(message.author.id,results[0].gems,c,database);
                                advResources.removeStone(message.author.id,results[0].stone,args[1],database)
                                return embedBuilder.embed0Field(message.channel,"",language("ADV_SELLED",args[1],getEMJType(args[0])),green,embedBuilder.bFooter);
                            }else{
                                msg.sendMsgA(language("ADV_NOT_HAVE_TO_SELL",args[1]), message, dataServer)
                            }
                            break;
                        case "iron":
                            if(args[1] >= results[0].iron){
                                advGems.addGems(message.author.id,results[0].gems,c,database);
                                advResources.removeIron(message.author.id,results[0].iron,args[1],database)
                                return embedBuilder.embed0Field(message.channel,"",language("ADV_SELLED",args[1],getEMJType(args[0])),green,embedBuilder.bFooter);
                            }else{
                                msg.sendMsgA(language("ADV_NOT_HAVE_TO_SELL",args[1]), message, dataServer)
                            }
                            break;
                        case "gold":
                            if(args[1] >= results[0].gold){
                                advGems.addGems(message.author.id,results[0].gems,c,database);
                                advResources.removeGold(message.author.id,results[0].gold,args[1],database)
                                return embedBuilder.embed0Field(message.channel,"",language("ADV_SELLED",args[1],getEMJType(args[0])),green,embedBuilder.bFooter);
                            }else{
                                msg.sendMsgA(language("ADV_NOT_HAVE_TO_SELL",args[1]), message, dataServer)
                            }
                            break;
                        case "obsidian":
                            if(parseInt(results[0].obsidian) >= args[1]){
                                advGems.addGems(message.author.id,results[0].gems,c,database);
                                advResources.removeObsidian(message.author.id,results[0].obsidian,args[1],database)
                                return embedBuilder.embed0Field(message.channel,"",language("ADV_SELLED",args[1],getEMJType(args[0])),green,embedBuilder.bFooter);
                            }else{
                                msg.sendMsgA(language("ADV_NOT_HAVE_TO_SELL",args[1]), message, dataServer)
                            }
                            break;
                    }
                }else{
                    msg.sendMsgA(language("ADV_SHOP_USE_SELL",dataServer.prefix), message, dataServer)
                }
            }else{
                msg.sendMsg("ADV_ITEMS_SELL", message, dataServer)
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

exports.help = {
    name: 'adv_sell',
};