const Discord = require("discord.js");
const { client, botConfg, fs, colors,messages, team, msg, green, red, beta, embedBuilder, advBp, advGems, advBank} = require("../../../rox");

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if (!message.guild) return;

    let sql = `SELECT * FROM adventure WHERE userid = ${message.author.id}`;
    database.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        } else if (results.length > 0) {
            const n = results[0].robTime;
            if(n >= Date.now()){
                embedBuilder.embed0Field(message.channel, language("ADV_ROB_MEMBER_TITLE"), language("ADV_ROB_COOLDOWN"), red, embedBuilder.bFooter);
            }else{
                const user = message.mentions.users.first();
                if(!user){return msg.sendMsg("PU_NO_MENTION", message, dataServer);}

                let sql2 = `SELECT * FROM adventure WHERE userid = ${user.id}`;
                database.query(sql2, (error, resultsu, fields) => {
                    if (error) {
                        return console.error(error.message);
                    } else if (results.length > 0) {
                        if(resultsu[0].gems >= 1){
                            const num = Math.round(resultsu[0].gems/2);

                            var sql3 = `UPDATE adventure SET robTime = '${Date.now() + 86400000}' WHERE userid = '${message.author.id}'`;
                            database.query(sql3, function (err) {if (err) throw err;});

                            advGems.removeGems(user.id,resultsu[0].gems,num,database)
                            advGems.addGems(message.author.id,resultsu[0].gems,num,database)

                            embedBuilder.embed0Field(message.channel, language("ADV_ROB_MEMBER_TITLE"), language("ADV_ROBBED",num,user.username), green,embedBuilder.bFooter);
                        }else{
                            embedBuilder.embed0Field(message.channel, language("ADV_ROB_MEMBER_TITLE"), language("ADV_USER_NOT_GEM"), red,embedBuilder.bFooter);
                        }
                    }else{
                        embedBuilder.embed0Field(message.channel, language("ADV_ROB_MEMBER_TITLE"), language("ADV_NOT_IN_0"), red,embedBuilder.bFooter);
                    }
                });
            }
        } else {
            msg.sendMsg("ADV_NOT_IN", message, dataServer)
        }
    });
}

exports.help = {
    name: 'adv_rob',
};