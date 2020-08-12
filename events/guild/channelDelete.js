const Discord = require('discord.js');
const {colors, client, fs, database, msg} = require('./../../rox')

client.on('channelDelete', channel => {
    /** SERVER **/
    database.query(`SELECT * FROM servers WHERE interServerChannel = ${channel.id}`, function (error, results, fields) {
        if (error) {
            return false;
        } else if (results.length > 0) {
            console.log(channel.name)

            if(results[0].interServerChannel == channel.id){
                var eventCHANNELDELETE = `UPDATE servers SET interServerChannel = 'false' WHERE interServerChannel = '${channel.id}'`;
                return database.query(eventCHANNELDELETE, function (err) {
                    if (err) throw err;
                });
            }
        } else {

        }
    });
});