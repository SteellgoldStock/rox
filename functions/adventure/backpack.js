const Discord = require('discord.js');
const { client, botConfg, fs, colors, database, msg} = require("../../rox");

exports.setBackpackLevel = async(userid, level, database) => {
    const sql = `UPDATE adventure SET backpackLvl = '${level}' WHERE userid = '${userid}'`;
    database.query(sql, function (err) {
        if (err) throw err;
    });
}

exports.setPickaxeLevel = async(userid, level, database) => {
    const sql = `UPDATE adventure SET pickaxeLvl = '${level}' WHERE userid = '${userid}'`;
    database.query(sql, function (err) {
        if (err) throw err;
    });
}

exports.setAxeLevel = async(userid, level, database) => {
    const sql = `UPDATE adventure SET axeLvl = '${level}' WHERE userid = '${userid}'`;
    database.query(sql, function (err) {
        if (err) throw err;
    });
}