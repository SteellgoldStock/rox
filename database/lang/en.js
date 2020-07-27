const languageData = {
    /** Errors **/
    PERMISSION_DENIED: "You don't have permission to use this command",
    MISSED_ARGUMENTS: "You missed someone's arguments, please try again.",
    MAXIMUM_VALUE: "You cannot use more than 3 characters, symbols, or letters in your prefix, exemple `rox!` is not allowed, but `r!` is allowed, and you can again add 1 character",
    HELP_UNKNOW_COMMAND: (command) => `The command command \`!${command}\` not exist`,
    LANG_NOT_FOUND: (lang, langs) => "The lang `" + lang + "` not found please, set a valid lang " + langs,
    NOT_YOURSELF: "You can't ban yourself",

    /** SUCCESS **/
    UPDATED: "Your changes have been successfully saved",

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
    TMUTED: (username) => `You are tempmute ${username} for ${time} with success`,
    BANNED: (username) => `You have banned ${username} with success`,
    KICKED: (username) => `You have kick ${username} with success`,
    MUTED: (username) => `You have muted ${username} forever with success`,
    PUNISH_Y: `You can't punish yourself`,

    PU_NO_MENTION: "Please enter a user mention",
    PU_NO_USER: "This user doesn't exist in this guild",
    PU_IMPOSSIBLE: "I cannot punish this user",
    SUCCESS_BAN: (user, reason, moderator) => `${moderator} has banned ${user} for ${reason}`,
    SUCCESS_KICK: (user, reason, moderator) => `${moderator} has kick ${user} for ${reason}`,
    SUCCESS_MUTE: (user, reason, moderator) => `${moderator} has mute ${user} for ${reason}`,
    SUCCESS_TMUTE: (user, reason, moderator, timem) => `${moderator} has tempmute ${user} for ${reason} while ${timem}`,
};

const translate = (key, ...args) => {
    const translation = languageData[key];
    if(typeof translation === "function") return translation(...args);
    else return translation;
};

module.exports = translate;
