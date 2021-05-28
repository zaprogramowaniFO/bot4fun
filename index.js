const token = require('./token');

const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '!';


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

});

client.on('message', msg => {
  if (msg.content === 'hello') {
    msg.channel.send('Witam!');
  }

  if(msg.content.includes('xD')) {
    msg.react('🍕').then(() => msg.react('847883676250275860')).catch(err => {
      console.log(err);
      msg.channel.send('Oups!')
    });
    

  }


    if (msg.content === '!pies') {
      const attachment = new Discord.MessageAttachment('https://cdn.discordapp.com/emojis/847883676250275860.png?v=1');
      msg.channel.send(attachment);
    }

    if(msg.content.startsWith(prefix)){
            const message = msg.content.slice(prefix.length);
            console.log(message);
        if(message === "pomoc"){
            msg.reply("W czym mogę pomóc?");
        }
        if(message === "info"){
            msg.author.send('jakie chcesz info?');
            if(msg.channel.type === 'dm') return;
            msg.reply('wysłałem Ci info na DM!');
        }
        if(message === "autor"){
          const author = "zaprogramowani"
          msg.channel.send(`Bot został stworzny na zajęciach **${author}**`)

        }
    }

});

//miejsce na token;

client.login(token.token);