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

            const GUILD_NAME = Buffer.from(guild.name).toString('base64');
            console.log(GUILD_NAME)

            var postServer = {
                tag: "IA==",
                name: GUILD_NAME,
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
                logsChannel: "false",
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
    let dbR = {};

    fs.writeFileSync("database/ccommands/" + guild.id + ".json", JSON.stringify(dbC), "utf-8");
    fs.writeFileSync("database/rlevels/" + guild.id + ".json", JSON.stringify(dbR), "utf-8");


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
    const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))

    let embed = new Discord.MessageEmbed()
        .setTitle("Hello !")
        .setDescription("Thanks for adding me, i hope I don't disappoint you.")
        .addField("<:rox:737051270980042783> Invite","To invite me it's very simple, use the command `!invite` [to receive the invitation link or click here](https://discord.com/api/oauth2/authorize?client_id=733760070503890994&permissions=8&scope=bot), **why do I ask for admin permission?** because I have a lot of features, so you don't have to bother, you can give me all the permissions, don't worry, I'm very secure, [I give you another link](https://discord.com/api/oauth2/authorize?client_id=733760070503890994&permissions=2147483639&scope=bot) to the one you don't trust or don't trust me, which will be his free choice. ")
        .addField("<:book3:733698761171271750> Support","Do you need help? If so, I invite you to join my [discord](https://discord.gg/NVBwmFz) which is made for that, or go see my [wiki](https://doc.rox.wtf), it's very well provided!")
        .addField("<a:config:738108401208262738> Configuration","To start using the bot, configure one role as admin and another one as moderator, with the command `!roles` which is only usable by roles admins, and people with `ADMINISTRATOR` permission")
        .setTimestamp()
        .setColor("#4e64b5")
        .setFooter('Rox • ' + msg.version,client.user.avatarURL())
    channel.send(embed)
    channel.send(":flag_fr: Pour une version française du message executez la commande `!fr_start`")
}