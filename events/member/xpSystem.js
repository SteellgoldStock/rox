const { client, colors, botConfg, fs, messages } = require("../../rox");

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

    let db = JSON.parse(fs.readFileSync("database/guilds/base/" + message.guild.id + ".json", "utf8"));
    let dbXp = JSON.parse(fs.readFileSync("database/guilds/xp/" + message.guild.id + ".json", "utf8"));
    
    if(db["sysXp"] == true) {
        // NON-EXIST
        if (!dbXp[message.author.id]) dbXp[message.author.id] = {
            xp: 0,
            level: 0,
            time: Date.now()
        };
     
        if(dbXp[message.author.id].time <= Date.now()){
            executeCode(dbXp,message,db);
        }

    }
});

async function executeCode(dbXp, message, db) {
    time = Date.now() + 5000;
    dbXp[message.author.id].xp++;
    dbXp[message.author.id].time = time;
    let userInfo = dbXp[message.author.id];

    if (userInfo.xp >= 1000) {
        userInfo.level++
        userInfo.xp = 0
        messages.sendMsg(message, message.guild.id, db["levelUpMsg"].allReplace({
            "{mention}": "<@" + message.author.id + ">",
            "{username}": message.author.name,
            "{guildName}": message.guild.name,
            "{level}": userInfo.level
        }))
    }

    fs.writeFile("./database/guilds/xp/" + message.guild.id + ".json", JSON.stringify(dbXp), (x) => {
        if (x) console.error(x)
    });
}
