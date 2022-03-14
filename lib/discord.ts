export const DISCORD_USER_AVATAR =
  "https://cdn.discordapp.com/avatars/" +
  process.env.NEXT_PUBLIC_DISCORD_USER_ID +
  "/";

export const DISCORD_GATEWAY_AUTH = {
  op: 2,
  d: {
    token: process.env.NEXT_PUBLIC_DISCORD_BOT_TOKEN,
    intents: 813,
    properties: {
      $os: "linux",
      $browser: "my_library",
      $device: "my_library",
    },
  },
};

export const DISCORD_GATEWAY_GUILD_GET_SPECIFIC_MEMBER = {
  op: 8,
  d: {
    guild_id: process.env.NEXT_PUBLIC_DISCORD_GUILD_ID,
    presences: true,
    user_ids: [process.env.NEXT_PUBLIC_DISCORD_USER_ID],
    limit: 1,
  },
};
