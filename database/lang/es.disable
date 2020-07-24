const languageData = {
    // MSG UTIL
    MENTION_BOT: (prefix, username) => `Grrr ${username}, if you want to pet me do \`${prefix}rub\` if you want to know what I'm capable of, execute the command. \`${prefix}help\``,

    // ERROR MSG
    LANG_LIST: "Aquí está la lista de idiomas disponibles: `fr`, `en`,`jp`,`troll`",
    NOT_GUILD: `Lo siento, no puedes usar comandos en los mensajes privados.`,
    NOT_PRENIUM_GUILD: `Lo siento, este gremio no tiene un gold`,
    PERMISSION_DENIED: `No tienes permiso para usar este comando, pide a alguien más alto que tú que te ayude.`,
    NOT_PRENIUM: `No eres miembro de Rox Gold, así que no puedes activar un servidor.`,
    ALREADY_ACTIVED: `Este servidor ya ha sido activado`,
    ACTIVE_USED: `Ya ha activado un servidor`,
    MISSED_ARGUMENTS: `Te perdiste algunas discusiones`,
    CHANNEL_NOT_EXIST: `Este salón no existe`,
    IS_NAME_ALREADY: (name) => `El nombre de este servidor ya está *${name}*`,
    CC_EXIST: (prefix, command) => `Este orden ya existe, hecho \`${prefix}custcmds update ${command} [message]\` para cambiar el mensaje que envía o \`${prefix}custcmds del ${command}\` para eliminar la orden`,
    CC_NOT_EXIST: (prefix, command) => `Este comando no existe, use \`${prefix}custcmds add ${command} [message]\` para añadirlo`,

    // HELP MSG
    // ROLES
    ROLES_TYPE_HELP: (prefix) => `Olvidaste el argumento \`type\` aquí hay una ayuda para explicar mejor cómo funciona el comando: \`${prefix}roles [adminRole/modRole] [Role name]\``,
    ROLES_ROLE_HELP: (prefix) => `Olvidaste el argumento \`role\` aquí hay una ayuda para explicar mejor cómo funciona el comando: \`${prefix}roles [adminRole/modRole] [Role name]\``,
    ROLE_NOT_EXIST: (role) => `El role \`${role}\` no existe`,
    ROLES_TYPE_LIST: (action) => `El tipo \`${action}\` no existen, utilizar \`adminRole\` o \`modRole\``,
    ROLES_AUTOROLE_USE: (prefix) => `Olvidaste el argumento \`action\` aquí hay una ayuda para explicar mejor cómo funciona el comando: \`${prefix}autoRole [config/status]\``,
    ROLES_AUTOROLE_USE_2: (prefix) => `Olvidaste el argumento \`status\` aquí hay una ayuda para explicar mejor cómo funciona el comando: \`${prefix}autoRole status [on/off]\``,
    ROLES_AUTOROLE_USE_3: (prefix) => `Olvidaste el argumento \`role\` aquí hay una ayuda para explicar mejor cómo funciona el comando: \`${prefix}autoRole config [Role name]\``,
    // XP
    XP_TYPE_HELP: (prefix) => `Olvidaste el argumento \`type\` aquí hay una ayuda para explicar mejor cómo funciona el comando: \`${prefix}xpconf [status/xplevel/maxlevel/logsChannel/upMsg]\``,
    XP_TYPE_STATUS: (prefix) => `Olvidaste el argumento \`status\` aquí hay una ayuda para explicar mejor cómo funciona el comando: \`${prefix}xpconf status [on/off]\``,

    // JOIN & QUIT
    JQ_ARGS: (prefix) => `Olvidaste el argumento \`param\` aquí hay una ayuda para explicar mejor cómo funciona el comando: \`${prefix}jqconf [join/quit] [channel/msg/status]\``,
    JQ_CHANNEL: (prefix) => `Olvidaste el argumento \`channelName\` aquí hay una ayuda para explicar mejor cómo funciona el comando: \`${prefix}jqconf [join/quit] channel [Channel Name]\``,
    JQ_MSG: (prefix) => `Olvidaste el argumento \`msg\` aquí hay una ayuda para explicar mejor cómo funciona el comando: \`${prefix}jqconf [join/quit] channel [msg]\` you can use use \`${prefix}jqconf tags\` tags to set in your msg`,
    JQ_STATUS: (prefix) => `Olvidaste el argumento \`status\` aquí hay una ayuda para explicar mejor cómo funciona el comando: \`${prefix}jqconf [join/quit] status [on/off]\``,

    // EMBED
    EMBED_CONF_OPTION: `Olvidaste el argumento \`option\` Aquí está la lista de opciones disponibles, \`[config/status]\``,
    EMBED_CONF_OPTION_ARGS: `Olvidaste el argumento \`param\` Aquí está la lista de opciones disponibles, \`[title/imgUrl]\``,
    EMBED_CONF_OPTION_STATUS: `Olvidaste el argumento \`status\` Aquí está la lista de opciones disponibles, \`[on/off]\``,

    // SUCCESS MSG
    ACTIVED_SERVER: (serverName, prefix) => `Se ha activado el servidor **${serverName}** ejecutar la orden \`${prefix}benefits\` para ver las ventajas de gold`,
    UPDATED: `Sus cambios se han guardado`,
    CC_ADD: (command) => `Ha añadido el comando \`${command}\``,
    CC_DELETED: (command) => `Has borrado la orden \`${command}\``,

    // CUSTOM COMMANDS
    CC_ARGUMENTS: (prefix) => `Olvidaste el argumento \`type\` aquí hay una ayuda para explicar mejor cómo funciona el comando: \`${prefix}custcmds [add/del/update] [command name]\` y \`[message] pour add et update\`, puedes usar \`${prefix}custcmds tags\` el comando te dará diferentes etiquetas que puedes colocar si lo gritas en tu mensaje`
};

const translate = (key, ...args) => {
    const translation = languageData[key];
    if(typeof translation === "function") return translation(...args);
    else return translation;
};

module.exports = translate;
