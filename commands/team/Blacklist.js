database.query('INSERT INTO warns SET ?', post, function (err) {
    if (err) throw err;
});
const Discord = require("discord.js");
const { client, database, msg, colors, fs, team} = require("../../rox");

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if(!team.includes(message.author.id)){
        return await msg.sendMsg("TEAM_NOT", message, dataServer);
    }

    const mentionUser = message.mentions.members.first();
    if (!mentionUser) {
        return await msg.sendMsg("PU_NO_MENTION", message, dataServer);
    }

    if(args[0] === "add"){

        var post = {
            userid: mentionUser.user.id,
        };
        database.query('INSERT INTO blacklist SET ?', post, function (err) {
            if (err) throw err;
        });

        return await msg.sendMsg("BLACKLIST_ADD", message, dataServer);
    } else if(args[0] === "remove"){
        var postr = {
            userid: mentionUser.user.id,
        };
        database.query(`DELETE FROM blacklist WHERE userid=${mentionUser.user.id}`, function (err) {
            if (err) throw err;
        });

        return await msg.sendMsg("BLACKLIST_REMOVE", message, dataServer);
    }  else {
        return await msg.sendMsg("INVALID_ARGS_BLACKLIST", message, dataServer);
    }
}

exports.help = {
    name: "blacklist",
}