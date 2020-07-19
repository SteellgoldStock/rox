const prefix = require('../servers/config');
const fs = require('fs');

const languageData = {
    PING: (ms) => `:ping_pong: Bot's latency: ${ms}ms`,
    INVITE: prefix.prefixMap + `Oh.. do you want invite me ? Here's an invitation, thank you very much : **discord.gg/Rnq9959**, here is a link to the support server in case of bugs, ideas or others **discord.gg/Rnq9959**`,
    MAINTENANCE_MESSAGE: (reason) => "The bot is currently under maintenance for the reason `" + reason + "`",
    LANGUAGE_UPDATED: prefix.prefixOk + "Bot language updated!",
    PREFIX_UPDATED: (np) => prefix.prefixOk + "Your prefix updated in `" + `${np}` + "`",
    MISSING_LANGUAGE: prefix.prefixNo + "You must specify a valid language! (en or fr)",
    HELLO: "Hello!",
    LANGUAGE_NO_EXIST: prefix.prefixNo + "This langage doesn't exist!",
    MISSING_ARGUMENTS: prefix.prefixNo + "You have missed arguments",
    MISSING_PERMISSIONS: prefix.prefixNo + "You don't have permissions",
    NOT_IN_TEAM: prefix.prefixNo + "You're not on The Bot's team.",
    LEFT: (u) => prefix.prefixOk + "I left this discord, Chief " + u,
    GUILD_NOT_EXIST: (id) => prefix.prefixOk + "The guild **" + id + "** not exist",
    GUILD_DELETED: (id) => prefix.prefixOk + "The data of **" + JSON.parse(fs.readFileSync("database/guilds/" + id + ".json", "utf8"))["name"] + "** has been deleted",
    GUILD_INVITE: prefix.prefixMap + "Here is an invitation from the server: ",

    // AUTOROLE
    NO_ROLE_SET: (pr) => prefix.prefixNo + "Your server don't have a role configured, so is was impossible active the autorole, please use " + `${pr}joinRole [on] [roleId]`,
    AUTO_ROLE_ENABLE: (roleId) => prefix.prefixOk + "You have been actived the autorole in your server, the role is <@&" + roleId + ">",
    AUTO_ROLE_DISABLE: prefix.prefixOk + "You have been disable the autorole in your server",

    AUTO_ROLE_ALREADY_ENABLE: (pr) =>  prefix.prefixOk + `The autorole is already enable use \`${pr}joinRole off\` for disable it`,
    AUTO_ROLE_ALREADY_DISABLE: (pr) =>  prefix.prefixOk + `The autorole is already disable use \`${pr}joinRole on\` for enable it`,

    // Help text
    HELP_EMBED_TITLE: "Help document",
    HELP_EMBED_DESCRIPTION: "Here are the commands that are available on me",

    HELP_EMBED_FIELD_INFORMATIONS: "Informations Commands",
    HELP_EMBED_FIELD_SETTINGS: "Settings Commands",
    HELP_EMBED_FIELD_MODERATION: "Moderation Commands",
    HELP_EMBED_FIELD_ADMINISTRATOR: "Administration Commands",
    HELP_EMBED_FIELD_TEAM: "Team Commands",
    HELP_EMBED_FIELD_FUN: "Commands fun",

    // Help Commands
    HELP_COMMAND_INVITE: (p) => "`" + p + "invite`: invite the bot on your server, help us to make the fox even more powerful!",

    HELP_COMMAND_PREFIX_SET: (p) => "`" + p + "prefix`: allows you to set the prefix of the bot on the server, the default prefix when the bot join for the first time is `!` you can set any prefix, even letters. \n",
    HELP_COMMAND_LANG_SET: (p) => "`" + p + "lang`: allows to define the language of the bot on the server the available languages are, `en`, `fr`, other languages will be added afterwards.\n",
    HELP_COMMAND_XP_STATUS_SET: (p) => "`" + p + "sysxp`: allows to activate or deactivate the xp system, when it is activated members earn xp per message sent it is possible to set the number of xp to move from one level to another with the command `!?`.\n",

    // CONFIG MSGS EVENT
    JOIN_MSG_HELP: (p) => `To configure the welcome message, execute the command \`${p}joinMsg [on/off] [channelName] [msg]\` you can use some tags to diversify your message: \n\n- \`{mention}\` to ping the user\n- \`{username}\` to display only the username\n- \`{users}\` to display the number of people on your discord\n- \`{serverName}\` to display the name of the server.`,
    JOIN_MSG_MISSING_ARGUMENTS: (p) => `You have missed arguments, if you want help with this commande use \`${p}joinMsg help\``
};

const translate = (key, ...args) => {
    const translation = languageData[key]; 
    if(typeof translation === "function") return translation(args);
    else return translation;
};

module.exports = translate;
