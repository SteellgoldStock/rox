const languageData = {
    // MSG UTIL
    MENTION_BOT: (prefix, username) => `Grrr ${username}, if you want to pet me do \`${prefix}rub\` if you want to know what I'm capable of, execute the command. \`${prefix}help\``,

    // ERROR MSG
    LANG_LIST: "Here is the list of avaible langs: `fr`, `en`,`es`,`jp`,`it`,`troll`",
    NOT_GUILD: `Sorry, you can't use commands in privates messages`,
    NOT_PRENIUM_GUILD: `Sorry, this guild doesn't have a prenium`,
    PERMISSION_DENIED: `You do not have permission to use this command, ask someone higher up than you to help you`,
    NOT_PRENIUM: `You are not a member of Rox prenium, so you cannot activate a server.`,
    ALREADY_ACTIVED: `This server has already been activated.`,
    ACTIVE_USED: `You have already actived a server`,
    MISSED_ARGUMENTS: `You have missed arguments`,
    CHANNEL_NOT_EXIST: `This channel not exist`,
    IS_NAME_ALREADY: (name) => `The name of this server is already *${name}*`,
    CC_EXIST: (prefix, command) => `This command already exist, use \`${prefix}custcmds update ${command} [message]\` for update the message while send this command or use \`${prefix}custcmds del ${command}\` for delete the command`,
    CC_NOT_EXIST: (prefix, command) => `This command don't exist, use \`${prefix}custcmds add ${command} [message]\` for adding this command`,

    // HELP MSG
    // ROLES
    ROLES_TYPE_HELP: (prefix) => `You forgot the argument \`type\` here is a help to better explain how the command works: \`${prefix}roles [adminRole/modRole] [Role name]\``,
    ROLES_ROLE_HELP: (prefix) => `You forgot the argument \`role\` here is a help to better explain how the command works: \`${prefix}roles [adminRole/modRole] [Role name]\``,
    ROLE_NOT_EXIST: (role) => `The role \`${role}\` is not exist`,
    ROLES_TYPE_LIST: (action) => `The type \`${action}\` not exist, use \`adminRole\` or \`modRole\``,
    ROLES_AUTOROLE_USE: (prefix) => `You forgot the argument \`action\` here is a help to better explain how the command works: \`${prefix}autoRole [config/status]\``,
    ROLES_AUTOROLE_USE_2: (prefix) => `You forgot the argument \`status\` here is a help to better explain how the command works: \`${prefix}autoRole status [on/off]\``,
    ROLES_AUTOROLE_USE_3: (prefix) => `You forgot the argument \`role\` here is a help to better explain how the command works: \`${prefix}autoRole config [Role name]\``,
    // XP
    XP_TYPE_HELP: (prefix) => `You forgot the argument \`type\` here is a help to better explain how to command works: \`${prefix}xpconf [status/xplevel/maxlevel/logsChannel/upMsg]\``,
    XP_TYPE_STATUS: (prefix) => `You forgot the argument \`status\` here is a help to better explain how to command works: \`${prefix}xpconf status [on/off]\``,

    // JOIN & QUIT
    JQ_ARGS: (prefix) => `You forgot the argument \`param\` here is a help to better explain how to command works: \`${prefix}jqconf [join/quit] [channel/msg/status]\``,
    JQ_CHANNEL: (prefix) => `You forgot the argument \`channelName\` here is a help to better explain how to command works: \`${prefix}jqconf [join/quit] channel [Channel Name]\``,
    JQ_MSG: (prefix) => `You forgot the argument \`msg\` here is a help to better explain how to command works: \`${prefix}jqconf [join/quit] channel [msg]\` you can use use \`${prefix}jqconf tags\` tags to set in your msg`,
    JQ_STATUS: (prefix) => `You forgot the argument \`status\` here is a help to better explain how to command works: \`${prefix}jqconf [join/quit] status [on/off]\``,

    // EMBED
    EMBED_CONF_OPTION: `You have missed the argument \`option\` here is the list of options avaible, \`[config/status]\``,
    EMBED_CONF_OPTION_ARGS: `You have missed the argument \`param\` here is the list of parameters avaible, \`[title/imgUrl]\``,
    EMBED_CONF_OPTION_STATUS: `You have missed the argument \`status\` here is the list of status avaible, \`[on/off]\``,

    // SUCCESS MSG
    ACTIVED_SERVER: (serverName, prefix) => `You have been activated the server **${serverName}** execute the \`${prefix}benefits\` to see the advantages of prenium`,
    UPDATED: `Your changes have been saved`,
    CC_ADD: (command) => `You have added the command \`${command}\``,
    CC_DELETED: (command) => `You have deleted the command \`${command}\``,

    // CUSTOM COMMANDS
    CC_ARGUMENTS: (prefix) => `You forgot the argument \`type\` here is a help to better explain how to command works: \`${prefix}custcmds [add/del/update] [command name]\` and \`[message] for add & update\`, you can use use \`${prefix}custcmds tags\` the command will give you different tags that you can place if you shouaitez it in your message`
};

const translate = (key, ...args) => {
    const translation = languageData[key];
    if(typeof translation === "function") return translation(...args);
    else return translation;
};

module.exports = translate;
