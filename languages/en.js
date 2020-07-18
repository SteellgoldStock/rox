const prefix = require('../servers/config');

const languageData = {
    PING: (ms) => `:ping_pong: Bot's latency: ${ms}ms`,
    MAINTENANCE_MESSAGE: (reason) => "The bot is currently under maintenance for the reason `" + reason + "`",
    LANGUAGE_UPDATED: prefix.prefixOk + "Bot language updated!",
    PREFIX_UPDATED: (np) => prefix.prefixOk + "Your prefix updated in `" + `${np}` + "`",
    MISSING_LANGUAGE: prefix.prefixNo + "You must specify a valid language! (english or french)",
    HELLO: "Hello!",
    LANGUAGE_NO_EXIST: prefix.prefixNo + "This langage doesn't exist!",
    MISSING_ARGUMENTS: prefix.prefixNo + "You have missed arguments",

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
};

const translate = (key, ...args) => {
    const translation = languageData[key]; 
    if(typeof translation === "function") return translation(args);
    else return translation;
};

module.exports = translate;
