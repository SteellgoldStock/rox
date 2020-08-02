const Discord = require("discord.js");
const { client, database, msg, colors, fs, team} = require("../../rox");

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if(!team.includes(message.author.id)) {
        return await msg.sendMsg("TEAM_NOT", message, dataServer);
    }

    let dbC = JSON.parse(fs.readFileSync("database/team/botsay.json", "utf8"));
    if(args[0] == "on"){
        if(!dbC.includes(message.author.id)){
            dbC[message.author.id] = {status:"on"}
            fs.writeFileSync("database/team/botsay.json", JSON.stringify(dbC), "utf-8");
        }else{
            dbC[message.author.id].status = "on";
            fs.writeFileSync("database/team/botsay.json", JSON.stringify(dbC), "utf-8");
        }
    }else{
        if(!dbC.includes(message.author.id)){
            dbC[message.author.id] = {status:"off"}
            fs.writeFileSync("database/team/botsay.json", JSON.stringify(dbC), "utf-8");
        }else{
            dbC[message.author.id].status = "off";
            fs.writeFileSync("database/team/botsay.json", JSON.stringify(dbC), "utf-8");
        }
    }
}

exports.help = {
    name: "resay",
}