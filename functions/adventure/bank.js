const Discord = require('discord.js');
const { client, botConfg, fs, colors, database, msg} = require("../../rox");

exports.addGems = async(userid, gemsA, gemsB, database) => {
    let gems = parseInt(gemsA) + parseInt(gemsB);
    const sql = `UPDATE adventure SET bank = '${gems}' WHERE userid = '${userid}'`;
    database.query(sql, function (err) {
        if (err) throw err;
    });
}

exports.setGems = async(userid, gemsA, database) => {
    let gems = parseInt(gemsA);
    const sql = `UPDATE adventure SET bank = '${gems}' WHERE userid = '${userid}'`;
    database.query(sql, function (err) {
        if (err) throw err;
    });
}

exports.removeGems = async(userid, gemsA, gemsB, database) => {
    let gems = parseInt(gemsA) - parseInt(gemsB);
    const sql = `UPDATE adventure SET bank = '${gems}' WHERE userid = '${userid}'`;
    database.query(sql, function (err) {
        if (err) throw err;
    });
}

exports.setBankLevel = async(userid, level, database) => {
    const sql = `UPDATE adventure SET bankLvl = '${level}' WHERE userid = '${userid}'`;
    database.query(sql, function (err) {
        if (err) throw err;
    });
}