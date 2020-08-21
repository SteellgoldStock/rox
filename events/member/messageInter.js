const { client, colors, botConfg, fs, database, msg, team} = require("../../rox");

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

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        const cmd = client.commands.get(command);

        if(message.channel.id == results[0].interServerChannel) {
            if (!cmd) {
                message.delete();
                console.log(colors.cyan("(IS " + results[0].interServerNetwork +") " + message.author.username + " : " + message.content));
                client.guilds.cache.forEach((guild) => {
                    let sql2 = `SELECT * FROM servers WHERE guildid = ${guild.id}`;
                    database.query(sql2, (error, results2, fields) => {
                        if (error) {
                            return console.error(error.message);
                        }

                        if(results2[0].interServerNetwork == dataServer.interServerNetwork){
                            if (results2[0].interServerChannel !== "false") {
                                guild.channels.cache.get(`${results2[0].interServerChannel}`).send(Buffer.from(dataServer.tag, 'base64').toString('utf8') + isTeam(message.author.id) + " " + correctName(message.author.id, message.author.username) + ": " + isIn(message.content));
                            }
                        }
                    });
                });
            } else {
                message.delete();
            }
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

function isTeam(id){
    if(team.includes(id)){
        return "<:rox:746093259432001687>";
    }else{
        return "";
    }
}

function correctName(id, name){
    if(id == 504392983244832780){
        return "`Gaëtan`";
    }else if(id == 503717289829335060){
        return `<:NitroPomme:746467354820476980> \`${name}\``;
    }else if(id == 533306853317279773) {
        return `<:RomainTuCasseLesCouilles:746472720551641118> \`${name}\``;
    }else{
        return `\`${name}\``;
    }
}

function isIn(msg) {
    return msg.allReplace({
        "https://": " ",
        "http://": " ",
        "discord.gg": " ",
        "@": " ",
        "tg": " ",
        "Tg": " ",
        "tG": " ",
        "fTG": " ",
        "Sex": " ",
        "sex": " ",
        "FtG": " ",
        "FTg": " ",
        "FTG": " ",
        "Ftg": " ",
        "fTg": " ",
        "ftG": " ",
        "cory chase": " ",
        "mia khalifa": " ",
        "xvideos": " ",
        "xhamster": " ",
        "xxx": " ",
        "fuck": " ",
        "merde": " ",
        "grosse merde": " ",
        "youporn": " ",
        "porn": " ",
        "pornhub": " ",
        "fuck you": " ",
        "ftg": " ",
        "tg": " ",
        "ntm": " ",
        "ta mere": " ",
        "fils de pute": " ",
        "squirt": " ",
        "bdsm": " ",
        "teen": " ",
        "lesbienne": " ",
        "gay": " ",
        "hentai": " ",
        "orgamses": " ",
        "milf": " ",
        "bondage": " ",
        "gangbang": " ",
        "bite": " ",
        "queue": " ",
        "chibre": " ",
        "dick": " ",
        "chatte": " ",
        "pussy": " ",
        "orgasm": " ",
        "ejaculation": " ",
        "éjac": " ",
        "ejac": " ",
        "masturbation": " ",
        "branlette": " ",
        "pipe": " ",
        "pénétration": " ",
        "penetration": " ",
        "seins": " ",
        "boobs": " ",
        "tits": " ",
        "tit": " ",
        "gode": " ",
        "sex toy": " ",
        "bukkake": " ",
        "fist": " ",
        "fister": " ",
        "porno": " ",
        "fisting": " ",
        "doigtage": " ",
        "péné": " ",
        "bisexuel": " ",
        "trans": " ",
        "transgenre": " ",
        "fantasmes": " ",
        "orgie": " ",
        "orgi": " ",
        "sodo": " ",
        "sodomie": " ",
        "streaptease": " ",
        "anal": " ",
        "bbw": " ",
        "shemale": " ",
        "tukiff": " ",
        "tukif": " ",
        "xnxx": " ",
        "jacquie michel": " ",
        "nudes": " ",
        "nude": " ",
        "sexe": " ",
        "erotique": " ",
        "erotic": " ",
        "voyeur": " ",
        "ass": " ",
        "couilles": " ",
        "sperme": " ",
        "mange tes morts": " ",
        "batard": " ",
        "enculé": " ",
        "fils de putte": " ",
        "fdp": " ",
        "mange morts": " ",
        "pute": " ",
        "trainer": " ",
        "salope": " ",
        "biatch": " ",
        "connard": " ",
        "connasse": " ",
        "putain": " ",
        "salop": " ",
        "attardé": " ",
    })
}