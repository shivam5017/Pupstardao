const TeleBot = require('telebot');

const bot = new TeleBot('7343526389:AAE60yTHHYDefd1PRv6jp3C2ukzF5yqnf6o');

bot.sendAction

bot.on('text', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  console.log(msg.chat.id)

  if (text === '/start') {
    bot.sendMessage(chatId, 'Welcome to my bot!');
  } else {
    bot.sendMessage(chatId, 'Unknown command.');
  }
  console.log(text,chatId)
});

bot.start();