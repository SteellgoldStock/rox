const { client, colors, botConfg, fs, database, msg} = require("../../rox");

client.on("message", message => {
    if (!message.guild) return;
    if (message.author.bot) return;

    let dbC = JSON.parse(fs.readFileSync("database/team/botsay.json", "utf8"));
    if(dbC.includes(message.author.id)){
        if(dbC[message.author.id].status == "on"){
            message.delete();
            message.channel.send(message)
        }
    }
});


String.prototype.allReplace = function (obj) {
    var retStr = this;
    for (var x in obj) {
        retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
    }
    return retStr;
};