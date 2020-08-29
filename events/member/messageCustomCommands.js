const { client, colors, botConfg, fs, database, msg} = require("../../rox");
const Discord = require('discord.js');

var figlet = require('figlet');

client.on('message',message => {
    if (!message.guild) return;
    let dbC = JSON.parse(fs.readFileSync("database/ccommands/" + message.guild.id + ".json", "utf8"));

    let sql = `SELECT * FROM servers WHERE guildid = ${message.guild.id}`;
    database.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }

        const dataServer = results[0];

        const prefix = results[0].prefix

        Object.keys(dbC).forEach(function (prop) {
            exports.commandName = prop;

            if (message.content.startsWith(prefix + exports.commandName)) {
                if (Object.keys(dbC).includes(exports.commandName)) {
                    String.prototype.allReplace = function (obj) {
                        var retStr = this;
                        for (var x in obj) {
                            retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
                        }
                        return retStr;
                    };

                    database.query(`SELECT * FROM blacklist WHERE userid=${message.author.id}`, function (error, results, fields) {
                        if (error) {
                            return false;
                        } else if (results.length > 0) {
                            const language = require('../../database/lang/'+dataServer.lang+".js")
                            return message.reply(language("BLACKLISTED"));
                        } else {
                            const args = message.content.slice(prefix.length).trim().split(/ +/g);

                            message.guild.members.fetch().then(fetchedMembers => {
                                const vert = fetchedMembers.filter(member => member.presence.status === 'online').size;
                                const jaune = fetchedMembers.filter(member => member.presence.status === 'idle').size;
                                const rouge = fetchedMembers.filter(member => member.presence.status === 'dnd').size;
                                const totalOnline = vert + jaune + rouge
                                const totalOffline = fetchedMembers.filter(member => member.presence.status === 'offline').size;
                                exports.online = totalOnline;
                                exports.offline = totalOffline;
                            });

                            figlet(args.slice(1).join(" "), function(err, data) {
                                console.log(args.slice(1).join(" "))
                                if (err) {
                                    console.log('Something went wrong...');
                                    console.dir(err);
                                    message.channel.send(err)
                                    return;
                                }
        
                                exports.asciiMessage = data;
                            });

                            let embed = new Discord.MessageEmbed()
                            embed.setDescription(dbC[prop].allReplace({
                                    '@here': 'ping',
                                    '@everyone': 'ping',
                                    '{mention}': "<@" + message.author.id + ">",
                                    '{guildName}': message.guild.name,
                                    '{username}': message.author.username,
                                    '{sayMessage}': args.slice(1).join(" ").allReplace({
                                        '@here': 'ping',
                                        '@everyone': 'ping',
                                    }),
                                    '{asciiMessage}': "`ASCII Disabled`",
                                    '{userCount}': message.guild.memberCount,
                                    '{countOnline}': exports.online,
                                    '{countOffline}': exports.offline
                                }))
                                embed.setTimestamp()
                                embed.setFooter(message.author.username, message.author.avatarURL({dynamic:true}))
                                
                            message.channel.send(embed);
                        }
                    });
               } else {

                }
            }
        });
    });
});


String.prototype.allReplace = function (obj) {
    var retStr = this;
    for (var x in obj) {
        retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
    }
    return retStr;
};

async function ascii(text, message){
    figlet(text, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            message.channel.send(err)
            return;
        }

        console.log(data)
        return data;
    });
}