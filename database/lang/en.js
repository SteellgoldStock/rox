const languageData = {
    /** Errors **/
    PERMISSION_DENIED: "You don't have permission to use this command",
    MISSED_ARGUMENTS: "You missed someone's arguments, please try again.",
    MAXIMUM_VALUE: "You cannot use more than 3 characters, symbols, or letters in your prefix, exemple `rox!` is not allowed, but `r!` is allowed, and you can again add 1 character",
    HELP_UNKNOW_COMMAND: (command) => `The command command \`!${command}\` not exist`,
    LANG_NOT_FOUND: (lang, langs) => "The lang `" + lang + "` not found please, set a valid lang " + langs,
    NOT_YOURSELF: "You can't ban yourself",
    NOT_IMG: `You didn't send an image, try again, only \`.png\`,\`.jpg\` and \`.jpeg\` is supported for now, wait a update please`,
    NOT_GOLD_USER: "You are not a Rox Gold user",
    NOT_GOLD_SERVER: "This server don't have Rox Gold",
    IS_NAME_ALREADY: "The server as already this name, please try another",
    CHANNELS_ARGS: "You did not enter a valid value, here are the available values: `logs`, `joinquit`",
    MENTION_CHANNEL: "You didn't mention any channels",
    MENTION_ROLE: "You didn't mention any role",
    ARGS_BACKGROUND: "The argument, is invalid, those that exist are `color`, and `img`",
    ARGS_BACKGROUND_1: "You must enter a valid color code, you can use this generator: [Colors](https://colors.rox.wtf)",

    INVALID_ARGS_ROLES: "You must enter a valid role type, the avaibles roles to config is: `adminRole`, `modRole` or `autoRole`",
    INVALID_ARGS_TEXTS: "You must enter a valid text type, the avaibles texts to config is: `joinText`, `quitText` or `lvlUpText`",
    INVALID_ARGS_CHANNELS: "You must enter a valid channel type, the avaibles channels to config is: `joinquit` or `logs`",

    MISSED_TEXT: (prefix, type) => `You have missed the text, you can add a differents tags to diversify your text, use the \`${prefix}tags ${type}\` to see the avaible tags`,

    /** SUCCESS **/
    UPDATED: "Your changes have been successfully saved",
    DOWNLANDED: (prefix) => `Well done, you have defined your background, to see it do the command \`${prefix}level\``,

    /** EMBED **/
    HELP_ADMIN_FIELD: "Administrator",
    HELP_MOD_FIELD: "Moderator",
    HELP_FUN_FIELD: "Fun",
    HELP_XP_FIELD: "XP System",
    HELP_BASIC_FIELD: "Basics",

    WARN_TITLE: "Warns of ",
    WARNS_REASON_FIELD: "Reason: ",
    WARNS_MOD_FIELD: "Moderator: ",

    HELP_CC_FIELD: (serverName) => "Customs Command (**" + serverName + "**)",
    HELP_GOLD_USER_FIELD: "Gold User benefits",
    HELP_GOLD_SERVER_FIELD: "Gold Server benefits",
    HELP_DESCRIPTION: (prefix) => `<:rox:737051270980042783> To help you better you can use the \`${prefix}help [command]\` to get the uses, arguments, description all that can help you to use the bot`,

    // Moderations commands messages
    PUNISH_Y: `You can't punish yourself`,
    PU_NO_MENTION: "Please enter a user mention",
    PU_NO_REASON: "Please enter a reason",
    PU_NO_ID: "Please enter a valid id",
    PU_NO_ID_USER: (user) => `This ID is not appropriate for ${user}, please look in the ${user} warning list and check the correct ID`,
    PU_NO_USER: "This user doesn't exist in this guild",
    PU_IMPOSSIBLE: "I cannot punish this user",
    SUCCESS_BAN: (moderator,user, reason) => `${moderator} has banned ${user} for ${reason}`,
    SUCCESS_KICK: (moderator,user, reason) => `${moderator} has kick ${user} for ${reason}`,
    SUCCESS_WARN: (moderator,user, reason) => `${moderator} has warned ${user} for ${reason}`,
    SUCCESS_UNWARN: (moderator,user) => `${moderator} has unwarned ${user}`,
    SUCCESS_MUTE: (moderator,user, reason) => `${moderator} has mute ${user} for ${reason}`,
    SUCCESS_TMUTE: (moderator,user, reason, time) => `${moderator} has tempmuted ${user} for ${reason} while ${time}`,
    SUCCESS_UNMUTE: (moderator,user) => `${moderator} has unmuted ${user}`,
    ALREADY_MUTE: (user) => `${user} This person is already muted`,
    NO_TIME: "You must specify numbers, not letters.",
    NO_MUTE: (user) => `${user} This person is currently not being silenced`,

    BLACKLISTED: "Sorry, but I can't let you use the bot. You're blacklisted.",
    PICTURE_NOT_ALLOWED: `Your picture is not allowed please choose a other`,
    CHECK_PICTURE: "Please be patient we are checking the image",

    // FUN
    CHOICE_PROGRESS: "I'm choose.. hmm is difficult",
    CHOICE_DONE: "I'm answering it.",

    // SERVER
    LEVEL_SERVER_UP: (prefix) => `The server as level up, you can see your level with \`${prefix}server\`, use \`${prefix}server top\` to see your level compared to other servers using Rox`,

    // 8BALL
    DESCRIPTION: "I'm telling you the truth!",
    ERR_QUESTION: "You have to enter a question to ask me!",
    RESPONSE_1: "I'm sure of it.",
    RESPONSE_2: "it's definitely safe.",
    RESPONSE_3: "yes, definitely.",
    RESPONSE_4: "better not tell you now.",
    RESPONSE_5: "ask again later.",
    RESPONSE_6: "don't count on it.",
    RESPONSE_7: "I don't think.",
    RESPONSE_8: "my sources say no.",
    RESPONSE_9: "no.",
    RESPONSE_10: "outlook not so good.",
};

const translate = (key, ...args) => {
    const translation = languageData[key];
    if(typeof translation === "function") return translation(...args);
    else return translation;
};

module.exports = translate;
