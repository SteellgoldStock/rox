const { client, colors, botConfg, fs, database, msg, team} = require("../../rox");
const utf8 = require('utf8');

client.on("message", message => {
    if (!message.guild) return;
    if (message.author.bot) return;

    let sql = `SELECT * FROM servers WHERE guildid = ${message.guild.id}`;
    database.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }

        const prefix = results[0].prefix
        const dataServer = results[0];

        const language = require('../../database/lang/' + dataServer.lang)

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        const cmd = client.commands.get(command);

        if (!message.member.roles.cache.find(role => role.name === 'MUTE')) {
            if (!cmd) {
                database.query(`SELECT * FROM servers WHERE guildid = ${message.guild.id}`, (error, results, fields) => {
                    if (error) {
                        return console.error(error.message);
                    }

                    if (results[0].sysXp === 1) {
                        database.query(`SELECT * FROM servers_xp WHERE guildid = ${message.guild.id} AND userid = ${message.author.id}`, (error, resultsXp, fields) => {
                            if (error) {
                                return console.error(error.message);
                            }

                            if(resultsXp[0].length === 0){

                                var postXp = {
                                    guildid: message.guild.id,
                                    userid: message.author.id,
                                    xp: 0,
                                    level: 1,
                                    messagesCount: 0
                                };

                                database.query('INSERT INTO servers_xp SET ?', postXp, function (error) {
                                    if (error) throw error;
                                    client.guilds.cache.get("733724420056547338").channels.cache.get("737651263612911672").send('Nouvelle donnée d\'xp pour l\'utilisateur **' + message.author.username + '** sur le serveur: **' + message.guild.name + "**");
                                });

                            }

                            const msgToAdd = parseInt(resultsXp[0].messagesCount) + parseInt("1")
                            let sqladdMSg = `UPDATE servers_xp SET messagesCount=${msgToAdd} WHERE userid = ${message.author.id} AND guildid = ${message.guild.id}`
                            database.query(sqladdMSg);

                            let MaxXp = resultsXp[0].level * 150 + resultsXp[0].level * 35

                            if (resultsXp[0].xp >= MaxXp) {
                                /** SERVEUR **/
                                let toAddSrvXp = dataServer.xp;
                                let sqladdXpSrv = `UPDATE servers SET xp=${toAddSrvXp} + 15 WHERE guildid = ${message.guild.id}`
                                database.query(sqladdXpSrv);
                                let MaxXpSrv = dataServer.level * 150 + dataServer.level * 35
                                if (dataServer.xp >= MaxXpSrv) {
                                    msg.sendMsg("LEVEL_SERVER_UP", message, dataServer)
                                }

                                /** USER **/
                                let toAddLvl = resultsXp[0].level;
                                let sqladdlvl = `UPDATE servers_xp SET level=${toAddLvl} + 1 WHERE userid = ${message.author.id} AND guildid = ${message.guild.id}`
                                database.query(sqladdlvl);

                                const lUpText = Buffer.from(results[0].levelUpMsg, 'base64').toString('utf8');
                                console.log(lUpText);

                                msg.sendMsgA(lUpText.allReplace({
                                    "{mention}": "<@" + message.author.id + ">",
                                    "{username}": message.author.name,
                                    "{guildName}": message.guild.name,
                                    "{level}": parseInt(resultsXp[0].level) + parseInt("1")
                                }), message, dataServer)
                            }

                            const toAdd = resultsXp[0].xp;
                            let sqladd = `UPDATE servers_xp SET xp=${toAdd} + 1 WHERE userid = ${message.author.id} AND guildid = ${message.guild.id}`
                            database.query(sqladd);
                        });
                    }
                });
            } else {
                if (message.content.indexOf(prefix) !== 0) return;

                if(dataServer.commandsChannel !== "false"){
                    if(message.channel.id == dataServer.commandsChannel){
                        database.query(`SELECT * FROM blacklist WHERE userid=${message.author.id}`, function (error, results, fields) {
                            if (error) {
                                return false;
                            } else if (results.length > 0) {
                                message.reply(language("BLACKLISTED"));
                            } else {
                                cmd.run(client, message, args, fs, colors, database, dataServer, language);
                            }
                        });
                    }else{
                        if(msg.Role(message.member, "admin", message, dataServer) === true){
                            return cmd.run(client, message, args, fs, colors, database, dataServer, language);
                        }

                        if(msg.Role(message.member, "modo", message, dataServer) === true){
                            return cmd.run(client, message, args, fs, colors, database, dataServer, language);
                        }

                        if(team.includes(message.author.id)){
                            return cmd.run(client, message, args, fs, colors, database, dataServer, language);
                        }

                        msg.sendMsgA(language("INVALID_CHANNEL_COMMANDS", dataServer.commandsChannel),message,dataServer)
                    }
                }else{
                    database.query(`SELECT * FROM blacklist WHERE userid=${message.author.id}`, function (error, results, fields) {
                        if (error) {
                            return false;
                        } else if (results.length > 0) {
                            message.reply(language("BLACKLISTED"));
                        } else {
                            cmd.run(client, message, args, fs, colors, database, dataServer, language);
                        }
                    });
                }
            }
        } else {
            message.delete();
        }
    });
});


String.prototype.allReplace = function (obj) {
    var retStr = this;
    for (var x in obj) {
        retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
    }
    return retStr;
};
