const Insta = require('@androz2091/insta.js');
const { keep_alive } = require("./keep_alive");
const client = new Insta.Client();
const fetch = require("node-fetch");
 //Made by Atreya YT
client.on('connected', () => {
    console.log(`Logged in as ${client.user.username}`);
});
 //Made by Atreya YT
client.on('messageCreate', (message) => {
    if (message.author.id === client.user.id) return
    message.markSeen();//Made by Atreya YT
    fetch(`https://api.affiliateplus.xyz/api/chatbot?message=${encodeURIComponent(message.content)}&botname=${client.user.username}&ownername=Diwas Atreya`)
    .then(res => res.json())
    .then(json => {
      if(!json.message) return;
      return message.reply(json.message);
    }).catch(err => {});
});
 //Made by Atreya YT
client.login('instaID', 'instaPassword'); 
//Made by Atreya YT


