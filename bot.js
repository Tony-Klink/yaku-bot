const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => {
    ctx.reply('Добро пожаловать на Поле Чудес!');
    ctx.replyWithVideo({
        source: fs.createReadStream('./assets/images/game_screen.png')
      })
});



bot.command('new', (ctx) => {

});

bot.command('roll', (ctx) => {

});

bot.command('wrong', (ctx) => {
    ctx.replyWith
});



bot.help((ctx) => ctx.reply('Help message'));
bot.action('delete', ({ deleteMessage }) => deleteMessage());
bot.startPolling();