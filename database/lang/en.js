const languageData = {
    /** Errors **/
    PERMISSION_DENIED: "You don't have permission to use this command",
    MISSED_ARGUMENTS: "You missed someone's arguments, please try again.",
    MAXIMUM_VALUE: "You cannot use more than 3 characters, symbols, or letters in your prefix, exemple `rox!` is not allowed, but `r!` is allowed, and you can again add 1 character",

    /** SUCCESS **/
    UPDATED: "Your changes have been successfully saved",

    /** EMBED **/
    HELP_ADMIN_FIELD: "Administrator",
    HELP_MOD_FIELD: "Moderator",
    HELP_FUN_FIELD: "Fun",
    HELP_XP_FIELD: "XP System",
    HELP_BASIC_FIELD: "Basics Command",
    HELP_CC_FIELD: (serverName) => "Customs Command (**" + serverName + "**)"
};

const translate = (key, ...args) => {
    const translation = languageData[key];
    if(typeof translation === "function") return translation(...args);
    else return translation;
};

module.exports = translate;