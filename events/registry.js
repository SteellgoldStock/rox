require('./client/onJoinGuild');
require('./client/onQuitGuild');

require('./member/memberJoin');
require('./member/memberQuit');

// Commands
require('./../commands/default/SetLangCommand')
require('./../commands/default/SetPrefixCommand')
require('./../commands/default/HelpCommand')
require('./../commands/default/admin/AutoRoleCommand')
require('./../commands/default/infos/PingCommand')
require('./../commands/default/admin/JoinMsgCommand')
require('./../commands/default/infos/ServersCommand')
require('../commands/default/team/LeftServerCommand')
require('../commands/default/team/DeleteGuildDataCommand')
require('./../commands/default/infos/InviteCommand')