const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages, team, msg, green, red, beta, embedBuilder, advBank, advGems, advResources} = require("../../../../rox");

const pkMax = 5;

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if (!message.guild) return;

    let sql = `SELECT * FROM adventure WHERE userid = ${message.author.id}`;
    database.query(sql, (error, results) => {
        if (error) {
            return console.error(error.message);
        } else if (results.length > 0) {
            if (!args[0]) {
                return embedBuilder.embed0Field(
                    message.channel,
                    language("ADV_INVENTORY_TITLE") + message.author.username,
                    language("ADV_AXE_DESCRIPTION",results[0].axeLvl),
                    embedBuilder.bColor,
                    embedBuilder.bFooter
                )
            } else {
                switch (args[0]) {
                    case "upg":
                    case "upgrade":
                        if (results[0].pickaxeLvl == pkMax) {
                            return embedBuilder.embed0Field(message.channel,"",language("MAX"),red,embedBuilder.bFooter);
                        }
                        
                        switch(results[0].pickaxeLvl){
                            case 1: // Pour niveau 2
                                if(results[0].iron >= 100){
                                    if(results[0].gold >= 200){
                                    advResources.removeIron(message.author.id,results[0].iron, 100, database);
                                    advResources.removeGold(message.author.id,results[0].gold, 200, database);
                                    advBp.setAxeLevel(message.author.id,2,database)
                                    return embedBuilder.embed0Field(message.channel,"",language("ADV_UPGRADED",2),green,embedBuilder.bFooter)
                                
                                    }else{
                                        return embedBuilder.embed0Field(message.channel,"",language("ADV_RESSOURCE_MISSING",200 - results[0].gold,"<:gold:746093115265384622>"),red,embedBuilder.bFooter);
                                    }
                                }else{
                                    return embedBuilder.embed0Field(message.channel,"",language("ADV_RESSOURCE_MISSING",100 - results[0].iron,"<:iron:746093114996817920>"),red,embedBuilder.bFooter                                    )
                                }
                            break;
                            case 2: // Pour niveau 3
                                if(results[0].iron >= 500){
                                    if(results[0].gold >= 300){
                                        if(results[0].energy >= 1){
                                            advResources.removeIron(message.author.id,results[0].iron, 500, database);
                                            advResources.removeGold(message.author.id,results[0].gold, 300, database);
                                            advEnergy.removeEnergy(message.author.id,results[0].energy, ringEnergy(results[0].ringLvl, 1), database);
                                            advBp.setAxeLevel(message.author.id,3,database)
                                            return embedBuilder.embed0Field(message.channel,"",language("ADV_UPGRADED",3),green,embedBuilder.bFooter)
                                        }else{
                                            return embedBuilder.embed0Field(message.channel,"",language("ADV_RESSOURCE_MISSING",3 - results[0].energy,"<:energy:746093115043086336>"),red,embedBuilder.bFooter);
                                        }
                                    }else{
                                        return embedBuilder.embed0Field(message.channel,"",language("ADV_RESSOURCE_MISSING",300 - results[0].gold,"<:gold:746093115265384622>"),red,embedBuilder.bFooter);
                                    }
                                }else{
                                    return embedBuilder.embed0Field(message.channel,"",language("ADV_RESSOURCE_MISSING",500 - results[0].iron,"<:iron:746093114996817920>"),red,embedBuilder.bFooter                                    )
                                }
                            break;
                            case 3: // Pour niveau 4
                                if(results[0].iron >= 1000){
                                    if(results[0].gold >= 600){
                                        advResources.removeIron(message.author.id,results[0].iron, 1000, database);
                                        advResources.removeGold(message.author.id,results[0].gold, 600, database);
                                        advBp.setAxeLevel(message.author.id,4,database)
                                        return embedBuilder.embed0Field(message.channel,"",language("ADV_UPGRADED",4),green,embedBuilder.bFooter)
                                    }else{
                                        return embedBuilder.embed0Field(message.channel,"",language("ADV_RESSOURCE_MISSING",600 - results[0].gold,"<:gold:746093115265384622>"),red,embedBuilder.bFooter);
                                    }
                                }else{
                                    return embedBuilder.embed0Field(message.channel,"",language("ADV_RESSOURCE_MISSING",1000 - results[0].iron,"<:iron:746093114996817920>"),red,embedBuilder.bFooter                                    )
                                }
                            break;
                            case 4: // Pour niveau 
                                if(results[0].iron >= 2500){
                                    if(results[0].gold >= 1000){
                                        if(results[0].energy >= 3){
                                            advResources.removeIron(message.author.id,results[0].iron, 2500, database);
                                            advResources.removeGold(message.author.id,results[0].gold, 1000, database);
                                            advEnergy.removeEnergy(message.author.id,results[0].energy, ringEnergy(results[0].ringLvl, 3), database);
                                            advBp.setAxeLevel(message.author.id,5,database)
                                            return embedBuilder.embed0Field(message.channel,"",language("ADV_UPGRADED",5),green,embedBuilder.bFooter)
                                        }else{
                                            return embedBuilder.embed0Field(message.channel,"",language("ADV_RESSOURCE_MISSING",3 - results[0].energy,"<:energy:746093115043086336>"),red,embedBuilder.bFooter);
                                        }
                                    }else{
                                        return embedBuilder.embed0Field(message.channel,"",language("ADV_RESSOURCE_MISSING",1000 - results[0].gold,"<:gold:746093115265384622>"),red,embedBuilder.bFooter);
                                    }
                                }else{
                                    return embedBuilder.embed0Field(message.channel,"",language("ADV_RESSOURCE_MISSING",2500 - results[0].iron,"<:iron:746093114996817920>"),red,embedBuilder.bFooter                                    )
                                }
                            break;
                        }
                        break;
                }
            }
        } else {
            msg.sendMsg("ADV_NOT_IN", message, dataServer)
        }
    });
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

exports.help = {
    name: 'adv_axe',
};