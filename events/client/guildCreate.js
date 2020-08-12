const Discord = require('discord.js');
const {colors, client, fs, database, msg} = require('./../../rox')

client.on('guildCreate',(guild) => {
    client.guilds.cache.get("733724420056547338").channels.cache.get("737651263612911672").send("Nouveau serveur: **" + guild.name + "**");

    /** SERVER **/
    database.query(`SELECT * FROM servers WHERE guildid = ${guild.id}`, function (error, results, fields) {
        if (error) {
            return false;
        } else if (results.length > 0) {
            sendWelcMsg(guild).then(r => console.log("Welcome message is send"));
            return;
        } else {
            sendWelcMsg(guild).then(r => console.log("Welcome message is send"));


            var postServer = {
                guildid: guild.id,
                lang: "en",
                prefix: "!",
                isGold: 0,
                isBeta: 0,

                // CONFIG - QUIT & JOIN
                joinText: "V2VsY29tZSB0byB7bWVudGlvbn0gaW4ge2d1aWxkTmFtZX0=",
                quitText: "Tm8uLiB7dXNlcm5hbWV9IGhhcyBsZWF2ZWQge2d1aWxkTmFtZX0=",
                interServerChannel: "false",
                announceChannel: "false",
                ticketCat: "----- Ticket -----",
                commandsChannel: "false",

                // CONFIG - ROLES
                adminRole: "none",
                modRole: "none",
                autoRole: "none",

                // CONFIG - EMBED ( GOLD SERVER )
                msgEmbed: 0,
                embedImgURL: "none",
                embedColor: "none",
                embedTitle: "none",

                // CONFIG - XP SYSTEM
                sysXp: 0,
                rwStus: 0,
                levelUpMsg: "V2VsbCBkb25lIHNvbGRpZXIsIHlvdSd2ZSBwYXNzZWQgbGV2ZWwge2xldmVsfQ==",

                // CONFIG - CUSTOM CMDS
                countCC: 0,
                limitCC: 15,

                level: 1,
                xp: 0
            };

            database.query('INSERT INTO servers SET ?', postServer, function (error, results, fields) {
                if (error) throw error;
            });
        }
    });

    let dbC = {};

    fs.writeFileSync("database/ccommands/" + guild.id + ".json", JSON.stringify(dbC), "utf-8");


    /** USERS XP BY SERVER **/
    const list = client.guilds.cache.get(guild.id);
    list.members.cache.forEach(member => {
        if (member.user.bot) return;

        database.query(`SELECT * FROM servers_xp WHERE guildid = ${guild.id} AND userid = ${member.id}`, function (error, results, fields) {
                if (error) {
                    return false;
                } else if (results.length > 0) {
                    return false;
                } else {
                    var postXp = {
                        guildid: guild.id,
                        userid: member.id,
                        xp: 0,
                        level: 1,
                        messagesCount: 0
                    };

                    database.query('INSERT INTO servers_xp SET ?', postXp, function (error, results, fields) {
                        if (error) throw error;
                    });
                }
            }
        );
    });
});

async function sendWelcMsg(guild){
    const channel = guild.channels.cache.filter(c => c.type === 'text').find(x => x.position == 0);
    const channel1 = guild.channels.cache.filter(c => c.type === 'text').find(x => x.position == 1);

    let embed = new Discord.MessageEmbed()
        .setTitle("Hello !")
        .setDescription("Thanks for adding me, so you have been chosen as a tester! All the bot features are not yet available!")
        .addField("<:rox:737051270980042783> Invite","You can't yet add me on other servers than those that the bot team has chosen, you can however come and test with us, on the support server")
        .addField("<:berry:737050710528753766> Support","For help join our discord by clicking [here](https://discord.gg/Yee8dWA), or use `!help`")
        .addField("<a:config:738108401208262738> Configuration","To start using the bot, configure one role as admin and another one as moderator, with the command `!roles` which is only usable by roles admins, and people with `ADMINISTRATOR` permission")
        .setTimestamp()
        .setFooter('Rox • ' + msg.version,client.user.avatarURL())
    channel.send(embed)
    channel1.send(embed)
}