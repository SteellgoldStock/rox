const languageData = {
    // MSG UTIL
    MENTION_BOT: (prefix, username) => `Grrr ${username}, if you want to pet me do \`${prefix}rub\` if you want to know what I'm capable of, execute the command. \`${prefix}help\``,

    // ERROR MSG
    LANG_LIST: "Vaouci lé lengues dispaubibles: `fr`, `en`,`es`,`jp`,`it`,`troll`",
    NOT_GUILD: `Dersolé, mai fo utilisér lé comendes du baut dan dé serveuhrs zinon za fonktione pa`,
    NOT_PRENIUM_GUILD: `Dersolé, mai se cerveur na pa Rox Gold`,
    PERMISSION_DENIED: `Dersolé, vou neu pouvé pa utilisér caite comende kar vou n'avé pa la pairmision`,
    NOT_PRENIUM: `Vounétte pa Rox Gold`,
    ALREADY_ACTIVED: `Se cerveur né pa aqui deuh Rox Gold`,
    ACTIVE_USED: `Vou vené daktiver leu cerveur`,
    MISSED_ARGUMENTS: `Vou avé oublé dé argumants`,
    CHANNEL_NOT_EXIST: `Se calon néxist pa`,
    IS_NAME_ALREADY: (name) => `Leuh non deu ce sairveureuh ai derja *${name}*`,
    CC_EXIST: (prefix, command) => `Caitte kommande aixiste derja, uhtilisér \`${prefix}custcmds update ${command} [message]\` poureuh maudifier leu maissage kel envoi, é \`${prefix}custcmds del ${command}\` paour la zuprimé`,
    CC_NOT_EXIST: (prefix, command) => `Caitte kommande n'existeu pa, uhtilisér \`${prefix}custcmds add ${command} [message]\` paour lazouter`,

    // HELP MSG
    // ROLES
    ROLES_TYPE_HELP: (prefix) => `Vou avé ouhblié largumant \`type\` Vouaci uneuh aideu paour mieu expliqué leu fonktionemen deu la commende: \`${prefix}roles [adminRole/modRole] [Role name]\``,
    ROLES_ROLE_HELP: (prefix) => `Vou avé ouhblié largumant \`role\` Vouaci uneuh aideu paour mieu expliqué leu fonktionemen deu la commende: \`${prefix}roles [adminRole/modRole] [Role name]\``,
    ROLE_NOT_EXIST: (role) => `Leu gradeu \`${role}\` n'existeu pa`,
    ROLES_TYPE_LIST: (action) => `L'autption \`${action}\` n'existeuh pa, utilisére \`adminRole\` ouh \`modRole\``,
    ROLES_AUTOROLE_USE: (prefix) => `Vou avé ouhblié largumant \`action\` Vouaci uneuh aideu paour mieu expliqué leu fonktionemen deu la commende: \`${prefix}autoRole [config/status]\``,
    ROLES_AUTOROLE_USE_2: (prefix) => `Vou avé ouhblié largumant \`status\` Vouaci uneuh aideu paour mieu expliqué leu fonktionemen deu la commende: \`${prefix}autoRole status [on/off]\``,
    ROLES_AUTOROLE_USE_3: (prefix) => `Vou avé ouhblié largumant \`role\` Vouaci uneuh aideu paour mieu expliqué leu fonktionemen deu la commende: \`${prefix}autoRole config [Role name]\``,
    // XP
    XP_TYPE_HELP: (prefix) => `Vou avé ouhblié largumant \`type\` Vouaci uneuh aideu paour mieu expliqué leu fonktionemen deu la commende: \`${prefix}xpconf [status/xplevel/maxlevel/logsChannel/upMsg]\``,
    XP_TYPE_STATUS: (prefix) => `Vou avé ouhblié largumant \`status\` Vouaci uneuh aideu paour mieu expliqué leu fonktionemen deu la commende: \`${prefix}xpconf status [on/off]\``,

    // JOIN & QUIT
    JQ_ARGS: (prefix) => `Vou avé ouhblié largumant \`param\` Vouaci uneuh aideu paour mieu expliqué leu fonktionemen deu la commende: \`${prefix}jqconf [join/quit] [channel/msg/status]\``,
    JQ_CHANNEL: (prefix) => `Vou avé ouhblié largumant \`channelName\` Vouaci uneuh aideu paour mieu expliqué leu fonktionemen deu la commende: \`${prefix}jqconf [join/quit] channel [Channel Name]\``,
    JQ_MSG: (prefix) => `Vou avé ouhblié largumant \`msg\` Vouaci uneuh aideu paour mieu expliqué leu fonktionemen deu la commende: \`${prefix}jqconf [join/quit] channel [msg]\` vou pouvé urtilisé la commende \`${prefix}jqconf tags\` poureu voir dé argumment ke vou pouvé maittre dan le mezzage`,
    JQ_STATUS: (prefix) => `Vou avé ouhblié largumant \`status\` Vouaci uneuh aideu paour mieu expliqué leu fonktionemen deu la commende: \`${prefix}jqconf [join/quit] status [on/off]\``,

    // EMBED
    EMBED_CONF_OPTION: `Vou avé ouhblié largumant \`option\` voizi lah listeu dé auption dispaunibleus, \`[config/status]\``,
    EMBED_CONF_OPTION_ARGS: `Vou avé ouhblié largumant \`param\` voizi lah listeu dé auption dispaunibleus, \`[title/imgUrl]\``,
    EMBED_CONF_OPTION_STATUS: `Vou avé ouhblié largumant \`status\` voizi lah listeu dé auption dispaunibleus, \`[on/off]\``,

    // SUCCESS MSG
    ACTIVED_SERVER: (serverName, prefix) => `Vou avé aktiver le cairveur **${serverName}** aixécuté lah commende \`${prefix}benefits\` poureu voair lé aventage deu Rox Gold`,
    UPDATED: `Vaus maudifikations on eter anregistréees`,
    CC_ADD: (command) => `Vou avé ajouté la commende \`${command}\``,
    CC_DELETED: (command) => `Vou avé suprimé la commande \`${command}\``,

    // CUSTOM COMMANDS
    CC_ARGUMENTS: (prefix) => `Vou avé ouhblié largumant \`type\` Vouaci uneuh aideu paour mieu expliqué leu fonktionemen deu la commende: \`${prefix}custcmds [add/del/update] [command name]\` et \`[message] poureu add é del\`, vous pouvez utilisé \`${prefix}custcmds tags\` la comende vou daunnera différen tagues paour méttre dan votr mezzage`
};

const translate = (key, ...args) => {
    const translation = languageData[key];
    if(typeof translation === "function") return translation(...args);
    else return translation;
};

module.exports = translate;
