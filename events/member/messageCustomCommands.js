const { client, colors, botConfg, fs, database, msg} = require("../../rox");

const figlet = require('figlet');

client.on('message',message => {
    if (!message.guild) return;
    let dbC = JSON.parse(fs.readFileSync("database/ccommands/" + message.guild.id + ".json", "utf8"));

    let sql = `SELECT * FROM servers WHERE guildid = ${message.guild.id}`;
    database.query(sql, (error, results, fields) => {
        if (error) {
            return console.error(error.message);
        }

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

                    const args = message.content.slice(prefix.length).trim().split(/ +/g);

                    message.guild.members.fetch().then(fetchedMembers => {
                        const vert = fetchedMembers.filter(member => member.presence.status === 'online').size;
                        const jaune = fetchedMembers.filter(member => member.presence.status === 'Inactive').size;
                        const rouge = fetchedMembers.filter(member => member.presence.status === 'dnd').size;
                        const blanc = fetchedMembers.filter(member => member.presence.status === 'invisible').size;
                        const totalOnline = vert + jaune + rouge + blanc
                        const totalOffline = fetchedMembers.filter(member => member.presence.status === 'offline').size;
                        exports.online = totalOnline;
                        exports.offline = totalOffline;
                    });

                    figlet(args.slice(0).join(" "), function(err, data) {
                        if (err) {
                            console.log('Something went wrong...');
                            console.dir(err);
                            return;
                        }

                        exports.ascii = data;
                    });

                    message.channel.send(dbC[prop].allReplace(
                        {
                            '{mention}': "<@" + message.author.id + ">",
                            '{guildName}': message.guild.name,
                            '{username}': message.author.username,
                            '{sayMessage}': args.slice(1).join(" "),
                            '{asciiMessage}': exports.ascii,
                            '{userCount}': message.guild.memberCount,
                            '{countOnline}': exports.online,
                            '{countOffline}': exports.offline

                        }))
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