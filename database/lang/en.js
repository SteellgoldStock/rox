const languageData = {
    /** Errors **/
    PERMISSION_DENIED: "You don't have permission to use this command",
    MISSED_ARGUMENTS: "You missed someone's arguments, please try again.",
    MAXIMUM_VALUE: "You cannot use more than 3 characters, symbols, or letters in your prefix, exemple `rox!` is not allowed, but `r!` is allowed, and you can again add 1 character",
    HELP_UNKNOW_COMMAND: (command) => `The command command \`!${command}\` not exist`,
    LANG_NOT_FOUND: (lang, langs) => "The lang `" + lang + "` not found please, set a valid lang " + langs,
    NOT_YOURSELF: "You can't ban yourself",
    NOT_IMG: `You didn't send an image, try again, only \`.png\` is allowed, if your picture is \`.jpg\` you can just rename the extension \`.jpg\` by \`.png\``,
    NOT_GOLD_USER: "You are not a Rox Gold user",
    NOT_GOLD_SERVER: "This server don't have Rox Gold",
    IS_NAME_ALREADY: "The server as already this name, please try another",

    /** SUCCESS **/
    UPDATED: "Your changes have been successfully saved",
    DOWNLANDED: (prefix) => `Well done, you have defined your background, to see it do the command ${prefix}level`,

    /** EMBED **/
    HELP_ADMIN_FIELD: "Administrator",
    HELP_MOD_FIELD: "Moderator",
    HELP_FUN_FIELD: "Fun",
    HELP_XP_FIELD: "XP System",
    HELP_BASIC_FIELD: "Basics",
    HELP_CC_FIELD: (serverName) => "Customs Command (**" + serverName + "**)",
    HELP_GOLD_USER_FIELD: "Gold User benefits",
    HELP_GOLD_SERVER_FIELD: "Gold Server benefits",
    HELP_DESCRIPTION: (prefix) => `<:rox:737051270980042783> To help you better you can use the \`${prefix}help [command]\` to get the uses, arguments, description all that can help you to use the bot`,

    // Moderations commands messages
    PUNISH_Y: `You can't punish yourself`,
    PU_NO_MENTION: "Please enter a user mention",
    PU_NO_USER: "This user doesn't exist in this guild",
    PU_IMPOSSIBLE: "I cannot punish this user",
    SUCCESS_BAN: (moderator,user, reason) => `${moderator} has banned ${user} for ${reason}`,
    SUCCESS_KICK: (moderator,user, reason) => `${moderator} has kick ${user} for ${reason}`,
    SUCCESS_MUTE: (moderator,user, reason) => `${moderator} has mute ${user} for ${reason}`,
    SUCCESS_TMUTE: (moderator,user, reason, time) => `${moderator} has tempmuted ${user} for ${reason} while ${time}`,
    SUCCESS_UNMUTE: (moderator,user) => `${moderator} has unmuted ${user}`,
    ALREADY_MUTE: (user) => `${user} This person is already muted`,
    NO_TIME: "You must specify numbers, not letters.",
    NO_MUTE: (user) => `${user} This person is currently not being silenced`,
};

const translate = (key, ...args) => {
    const translation = languageData[key];
    if(typeof translation === "function") return translation(...args);
    else return translation;
};

module.exports = translate;
