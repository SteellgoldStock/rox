const Discord = require('discord.js');
const { client, botConfg, fs, colors, database, msg} = require("../../rox");

exports.addEnergy = async(userid, enA, enB, database) => {
    let e = parseInt(enA) + parseInt(enB);
    const sql = `UPDATE adventure SET energy = '${e}' WHERE userid = '${userid}'`;
    database.query(sql, function (err) {
        if (err) throw err;
    });
}

exports.setEnergy = async(userid, energy, database) => {
    let e = parseInt(energy);
    const sql = `UPDATE adventure SET energy = '${e}' WHERE userid = '${userid}'`;
    database.query(sql, function (err) {
        if (err) throw err;
    });
}

exports.removeEnergy = async(userid, enA, enB, database) => {
    let e = parseInt(enA) - parseInt(enB);
    const sql = `UPDATE adventure SET energy = '${e}' WHERE userid = '${userid}'`;
    database.query(sql, function (err) {
        if (err) throw err;
    });
}