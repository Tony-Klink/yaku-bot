const Telegraf = require('telegraf');

const token = process.env.BOT_TOKEN;
const bot = new Telegraf(token);

bot.start((ctx) => {
    ctx.reply('Добро пожаловать на Поле Чудес!');
});

bot.command('hipster', Telegraf.reply('λ'))
bot.startPolling()