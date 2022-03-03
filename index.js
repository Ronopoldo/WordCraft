const express = require('express')
const app = express();
const port = 3000;
const fs = require("fs");
const talkedRecently = new Set();
app.get('/', function(request, response) { response.send(`Монитор активен. Локальный адрес: http://localhost:${port}`); });
app.listen(port, () => console.log());
const Discord = require('discord.js');
const { Client, Intents, MessageActionRow, MessageButton, GuildMemberRoleManager } = require('discord.js');
let client; {
  client = new Discord.Client({
    partials: ['MESSAGE', 'REACTION', 'CHANNEL'],
    intents: [
      "GUILDS",
      "GUILD_MEMBERS",
      "GUILD_VOICE_STATES",
      "GUILD_PRESENCES",
      "GUILD_MESSAGES",
      "DIRECT_MESSAGES",
    ],
     allowedMentions: ['repliedUser'],
  })
}



client.on('messageCreate', msg => {
console.log('123')
  if (msg.content.toLowerCase() == '/wordcraft' && msg.author.id == '544902183007813652')
  {
    console.log('123')
    let users = ['']
    let currentNum = ""

      client.on('messageCreate', msg1 => {
          console.log('looll')
          if (msg1.content.toLowerCase() == '/join1')
          {
            users[length] == msg1.author.id
            console.log(users)
          }
        });
      }

});


client.login(process.env.DISCORD_TOKEN);