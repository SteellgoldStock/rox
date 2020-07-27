const { client, colors, botConfg, fs, database, msg} = require("../../rox");

String.prototype.allReplace = function (obj) {
    var retStr = this;
    for (var x in obj) {
        retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
    }
    return retStr;
};

client.on("message", message => {
    if (!message.guild) return;
    if (message.author.bot) return;

    let sql = `SELECT * FROM servers WHERE guildid = ${message.guild.id}`;
    database.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }

        if (results[0].sysXp == 1) {
            let sqlselect = `SELECT * FROM servers_xp WHERE guildid = ${message.guild.id} AND userid = ${message.author.id}`;
            database.query(sqlselect, (error, resultsXp, fields) => {
                if (error) {
                    return console.error(error.message);
                }

                let MaxXp = resultsXp[0].level * 150 + resultsXp[0].level * 35
                console.log(MaxXp)

                if (resultsXp[0].xp >= MaxXp) {
                    const toAddLvl = resultsXp[0].level;
                    let sqladdlvl = `UPDATE servers_xp SET level=${toAddLvl} + 1 WHERE userid = ${message.author.id} AND guildid = ${message.guild.id}`
                    database.query(sqladdlvl);

                    msg.sendMsgA(results[0].levelUpMsg.allReplace({
                        "{mention}": "<@" + message.author.id + ">",
                        "{username}": message.author.name,
                        "{guildName}": message.guild.name,
                        "{level}": resultsXp[0].level
                    }),message)
                }

                const toAdd = resultsXp[0].xp;
                let sqladd = `UPDATE servers_xp SET xp=${toAdd} + 1 WHERE userid = ${message.author.id} AND guildid = ${message.guild.id}`
                database.query(sqladd);
            });
        }
    });
});

async function executeCode(dbXp, message, db) {
    time = Date.now() + 5000;
    dbXp[message.author.id].xp = dbXp[message.author.id].xp + 2;
    dbXp[message.author.id].time = time;
    let userInfo = dbXp[message.author.id];
    let MaxXp = userInfo.level * 150 + userInfo.level * 35

    if (userInfo.xp >= MaxXp) {
        userInfo.level++

        msg.sendMsg(message, message.guild.id, db["levelUpMsg"].allReplace({
            "{mention}": "<@" + message.author.id + ">",
            "{username}": message.author.name,
            "{guildName}": message.guild.name,
            "{level}": userInfo.level
        }),message.guild.name)
    }
}
