function getContext(body) {
  return {
    teamId: body.team_id,
    teamDomain: body.team_domain,
    channelId: body.channel_id,
    channelName: body.channel_name,
    userId: body.user_id,
    userName: body.user_name,
    command: body.command,
    text: body.text,
  };
};

module.exports = getContext;
