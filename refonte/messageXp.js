const { client, colors, botConfg, fs, database, msg} = require("../../rox");

client.on("message", message => {
    if (!message.guild) return;
    if (message.author.bot) return;

    if(!message.member.roles.cache.find(role => role.name === 'MUTE')){

        let sql = `SELECT * FROM servers WHERE guildid = ${message.guild.id}`;
        database.query(sql, (error, results, fields) => {
            if (error) {
                return console.error(error.message);
            }

            if (results[0].sysXp === 1) {
                let sqlselect = `SELECT * FROM servers_xp WHERE guildid = ${message.guild.id} AND userid = ${message.author.id}`;
                database.query(sqlselect, (error, resultsXp, fields) => {
                    if (error) {
                        return console.error(error.message);
                    }

                    let MaxXp = resultsXp[0].level * 150 + resultsXp[0].level * 35

                    if (resultsXp[0].xp >= MaxXp) {
                        const toAddLvl = resultsXp[0].level;
                        let sqladdlvl = `UPDATE servers_xp SET level=${toAddLvl} + 1 WHERE userid = ${message.author.id} AND guildid = ${message.guild.id}`
                        database.query(sqladdlvl);

                        msg.sendMsgA(results[0].levelUpMsg.allReplace({
                            "{mention}": "<@" + message.author.id + ">",
                            "{username}": message.author.name,
                            "{guildName}": message.guild.name,
                            "{level}": resultsXp[0].level + 1
                        }),message)
                    }

                    const toAdd = resultsXp[0].xp;
                    let sqladd = `UPDATE servers_xp SET xp=${toAdd} + 1 WHERE userid = ${message.author.id} AND guildid = ${message.guild.id}`
                    database.query(sqladd);
                });
            }
        });
    }else{
        message.delete();
    }
});

