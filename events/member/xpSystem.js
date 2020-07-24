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
    
    if(db["sysXp"] == true){
        // NON-EXIST
        if (!dbXp[message.author.id]) dbXp[message.author.id] = {
            xp: 0,
            level: 0
        };

        let cooldown = new Set();

        if(cooldown.has(message.author.id + " - " + message.guild.id)) return ;

        else{
            cooldown.add(message.author.id + " - " + message.guild.id);
            setTimeout(() => {cooldown.delete(message.author.id + " - " + message.guild.id)}, 20000);
            dbXp[message.author.id].xp++;
            let userInfo = dbXp[message.author.id];

            if(userInfo.xp >= db["xpByLevel"]) {
                userInfo.level++
                userInfo.xp = 0
                messages.sendMsg(message,message.guild.id,db["levelUpMsg"].allReplace({
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
    }
});