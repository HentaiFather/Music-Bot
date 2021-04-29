module.exports = async (client) => {
  console.log(`[WXYCZ API] Logged in as ${client.user.username}`);
  await client.user.setActivity("w.help", {
    type: "LISTENING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
