const Discord = require('discord.js');
const { client, botConfg, fs, colors, database, msg} = require("../../rox");

exports.removeBread = async(userid, enA, enB, database) => {
    let e = parseInt(enA) - parseInt(enB);
    const sql = `UPDATE adventure SET bread = '${e}' WHERE userid = '${userid}'`;
    database.query(sql, function (err) {
        if (err) throw err;
    });
}