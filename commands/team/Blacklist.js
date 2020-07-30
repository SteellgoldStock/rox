const Discord = require("discord.js");
const { client, database, msg, colors, fs, team} = require("../../rox");

module.exports.run = async (client, message, args, fs, colors, database, dataServer, language) => {
    if(!team.includes(message.author.id)){
        return await msg.sendMsg("TEAM_NOT", message, dataServer);
    }


    if(args[0] === "add"){

        var post = {
            userid: args[1],
        };
        database.query('INSERT INTO blacklist SET ?', post, function (err) {
            if (err) throw err;
        });
        return await msg.sendMsg("BLACKLIST_ADD", message, dataServer);
    } else if(args[0] === "remove"){
        var postr = {
            userid: args[1],
        };

        database.query(`SELECT * FROM blacklist WHERE userid=${args[1]}`, function (error, results, fields) {
            if (error) {
                return false;
            } else if (results.length > 0) {
                database.query(`DELETE FROM blacklist WHERE userid=${args[1]} , function (err) {
                    if (err) throw err;
                });

                return await msg.sendMsg("BLACKLIST_REMOVE", message, dataServer);
            } else {
                return msg.sendMsgA(language("PU_NO_ID_USER", mentionUser.user.username), message, dataServer);
            }
        });

    }  else {
        return await msg.sendMsg("INVALID_ARGS_BLACKLIST", message, dataServer);
    }
}

exports.help = {
    name: "blacklist",
}