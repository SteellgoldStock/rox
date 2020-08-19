const Discord = require('discord.js');
const { client, botConfg, fs, colors, database, msg} = require("../../rox");

exports.setBackpackLevel = async(userid, level, database) => {
    const sql = `UPDATE adventure SET backpackLvl = '${level}' WHERE userid = '${userid}'`;
    database.query(sql, function (err) {
        if (err) throw err;
    });
}