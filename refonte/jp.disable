const languageData = {
    // MSG UTIL
    MENTION_BOT: (prefix, username) => `Grrr ${username}, 撫でたければ撫でて \`${prefix}rub\` 私の能力を知りたければ コマンドを実行してください \`${prefix}help\``,

    // ERROR MSG
    LANG_LIST: "利用可能な言語のリストは以下の通りです: `fr`, `en`,`es`,`jp`,`it`,`troll`",
    NOT_GUILD: `申し訳ありませんが、プライベートメッセージではコマンドは使用できません。`,
    NOT_PRENIUM_GUILD: `申し訳ありませんが、このギルドにはロックスゴールドがありません。`,
    PERMISSION_DENIED: `このコマンドを使用する許可を持っていない場合は、あなたよりも上の人に助けを求めてください。`,
    NOT_PRENIUM: `ロックスゴールドの会員ではないので、サーバーのアクティベーションはできません。`,
    ALREADY_ACTIVED: `このサーバーはすでに起動されています`,
    ACTIVE_USED: `すでにサーバーを有効化しています`,
    MISSED_ARGUMENTS: `あなたはいくつかの議論を見逃した`,
    CHANNEL_NOT_EXIST: `このサロンは存在しない`,
    IS_NAME_ALREADY: (name) => `このサーバーの名前はすでに *${name}*`,
    CC_EXIST: (prefix, command) => `この注文はすでに存在していて、作られています。 \`${prefix}custcmds update ${command} [message]\` を使用して、送信するメッセージを変更したり \`${prefix}custcmds del ${command}\` 注文を削除するには`,
    CC_NOT_EXIST: (prefix, command) => `このコマンドが存在しない場合は \`${prefix}custcmds add ${command} [message]\` 付け足すために`,

    // HELP MSG
    // ROLES
    ROLES_TYPE_HELP: (prefix) => `議論を忘れている \`type\` コマンドがどのように動作するかを説明するためのヘルプはこちらです。: \`${prefix}roles [adminRole/modRole] [Role name]\``,
    ROLES_ROLE_HELP: (prefix) => `議論を忘れている \`role\` コマンドがどのように動作するかを説明するためのヘルプはこちらです。: \`${prefix}roles [adminRole/modRole] [Role name]\``,
    ROLE_NOT_EXIST: (role) => `役割 \`${role}\` 無い`,
    ROLES_TYPE_LIST: (action) => `タイプ \`${action}\` が存在しない場合は \`adminRole\` or \`modRole\``,
    ROLES_AUTOROLE_USE: (prefix) => `議論を忘れている \`action\` コマンドがどのように動作するかを説明するためのヘルプはこちらです。: \`${prefix}autoRole [config/status]\``,
    ROLES_AUTOROLE_USE_2: (prefix) => `議論を忘れている \`status\` コマンドがどのように動作するかを説明するためのヘルプはこちらです。: \`${prefix}autoRole status [on/off]\``,
    ROLES_AUTOROLE_USE_3: (prefix) => `議論を忘れている \`role\` コマンドがどのように動作するかを説明するためのヘルプはこちらです。: \`${prefix}autoRole config [Role name]\``,
    // XP
    XP_TYPE_HELP: (prefix) => `議論を忘れている \`type\` コマンドがどのように動作するかを説明するためのヘルプはこちらです。: \`${prefix}xpconf [status/xplevel/maxlevel/logsChannel/upMsg]\``,
    XP_TYPE_STATUS: (prefix) => `議論を忘れている \`status\` コマンドがどのように動作するかを説明するためのヘルプはこちらです。: \`${prefix}xpconf status [on/off]\``,

    // JOIN & QUIT
    JQ_ARGS: (prefix) => `議論を忘れている \`param\` コマンドがどのように動作するかを説明するためのヘルプはこちらです。: \`${prefix}jqconf [join/quit] [channel/msg/status]\``,
    JQ_CHANNEL: (prefix) => `議論を忘れている \`channelName\` コマンドがどのように動作するかを説明するためのヘルプはこちらです。: \`${prefix}jqconf [join/quit] channel [Channel Name]\``,
    JQ_MSG: (prefix) => `議論を忘れている \`msg\` コマンドがどのように動作するかを説明するためのヘルプはこちらです。: \`${prefix}jqconf [join/quit] channel [msg]\` 使える \`${prefix}jqconf tags\` タグを設定します。`,
    JQ_STATUS: (prefix) => `議論を忘れている \`status\` コマンドがどのように動作するかを説明するためのヘルプはこちらです。: \`${prefix}jqconf [join/quit] status [on/off]\``,

    // EMBED
    EMBED_CONF_OPTION: `議論を忘れている \`option\` 利用可能なオプションのリストは以下の通りです, \`[config/status]\``,
    EMBED_CONF_OPTION_ARGS: `議論を忘れている \`param\` 利用可能なパラメータのリストは以下の通りです。, \`[title/imgUrl]\``,
    EMBED_CONF_OPTION_STATUS: `議論を忘れている \`status\` 利用可能なステータスのリストは以下の通りです。, \`[on/off]\``,

    // SUCCESS MSG
    ACTIVED_SERVER: (serverName, prefix) => `あなたはサーバーを活性化されています **${serverName}** 命令を実行する \`${prefix}benefits\` をご覧になり、プリウムの良さを実感してください。`,
    UPDATED: `変更内容が保存されました`,
    CC_ADD: (command) => `コマンドを追加しました。 \`${command}\``,
    CC_DELETED: (command) => `注文を削除しました \`${command}\``,

    // CUSTOM COMMANDS
    CC_ARGUMENTS: (prefix) => `議論を忘れている \`type\` コマンドがどのように動作するかを説明するためのヘルプはこちらです。: \`${prefix}custcmds [add/del/update] [command name]\` そして \`[message] 追加と更新のために\`, 使える \`${prefix}custcmds tags\` このコマンドは、あなたがメッセージの中でそれをshouaitezした場合に配置することができる異なるタグを与えます。`
};

const translate = (key, ...args) => {
    const translation = languageData[key];
    if(typeof translation === "function") return translation(...args);
    else return translation;
};

module.exports = translate;
