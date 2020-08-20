const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages, team, msg, green, red, beta, embedBuilder, advBank, advGems, advEnergy, advResources} = require("../../../rox");

const STONE_MINE = 0;
const IRON_MINE = 1;
const GOLD_MINE = 2;
const OBSIDIAN_MINE = 3;

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if (!message.guild) return;
    if (!beta.includes(message.author.id)) return message.channel.send("This command is not avaible, is only for the staff, is a feature avaible in really, really, really, long time");

    let sql = `SELECT * FROM adventure WHERE userid = ${message.author.id}`;
    database.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        } else if (results.length > 0) {
            if (args[0]) {
                switch (args[0]){
                    case "mine":
                        if(results[0].pickaxeLvl !== 0){
                            if(!results[0].energy >= 4){ return message.channel.send("pas assez d'énergie pour l'instant"); }

                            switch (getRandomInt(0,4)){
                                case 0:
                                    if(results[0].energy >= 4){
                                        let c = getRandomInt(60, 151)
                                        advEnergy.removeEnergy(message.author.id,results[0].energy,4,database)
                                        advResources.addStone(message.author.id,results[0].stone,c,database)
                                        embedBuilder.embed0Field(message.channel,"",language("ADV_MINE",c,language("ADV_STONE"),"<:stone:745706191857909860>"),embedBuilder.bColor,embedBuilder.bFooter);
                                    }else{
                                        return message.channel.send("pas assez d'énergie pour l'instant");
                                    }
                                    break;
                                case 1:
                                    if(results[0].energy >= 5){
                                        let c = getRandomInt(20, 51)
                                        advEnergy.removeEnergy(message.author.id,results[0].energy,5,database)
                                        advResources.addIron(message.author.id,results[0].iron,c,database)
                                        embedBuilder.embed0Field(message.channel,"",language("ADV_MINE",c,language("ADV_IRON"),"<:iron:745648871815774380>"),embedBuilder.bColor,embedBuilder.bFooter);
                                    }else{
                                        return message.channel.send("pas assez d'énergie pour l'instant");
                                    }
                                    break;
                                case 2:
                                    if(results[0].energy >= 5){
                                        let c = getRandomInt(30, 121)
                                        advEnergy.removeEnergy(message.author.id,results[0].energy,5,database)
                                        advResources.addGold(message.author.id,results[0].gold,c,database)
                                        embedBuilder.embed0Field(message.channel,"",language("ADV_MINE",c,language("ADV_GOLD"),"<:gold:745648873300557855>"),embedBuilder.bColor,embedBuilder.bFooter);
                                    }else{
                                        return message.channel.send("pas assez d'énergie pour l'instant");
                                    }
                                    break;
                                case 3:
                                    if(results[0].energy >= 10){
                                        let c = getRandomInt(40, 101)
                                        advEnergy.removeEnergy(message.author.id,results[0].energy,10,database)
                                        advResources.addObsidian(message.author.id,results[0].obsidian,c,database)
                                        embedBuilder.embed0Field(message.channel,"",language("ADV_MINE",c,language("ADV_OBSIDIAN"),"<:obsidian:745728200998518905>"),embedBuilder.bColor,embedBuilder.bFooter);
                                    }else{
                                        return message.channel.send("pas assez d'énergie pour l'instant");
                                    }
                                    break;
                            }
                        }else{
                            // n'a pas de pioche
                        }
                        break;
                    case "forest":

                        break;
                    default:
                        break;
                }
            }else {

            }
        } else {
            msg.sendMsg("ADV_NOT_IN", message, dataServer)
        }
    });
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

exports.help = {
    name: 'adv_res',
};