const Telegraf = require('telegraf');
const Extra = require('telegraf/extra');
const Markup = require('telegraf/markup');
const fs = require('fs');
const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.end();
});

server.listen(PORT);

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => {
    ctx.reply('Добро пожаловать на Поле Чудес!');
});



bot.command('new', (ctx) => {
    ctx.replyWithPhoto({
        source: fs.createReadStream('./assets/images/game_screen.png')
    })
});

bot.command('roll', (ctx) => {

});

bot.command('wrong', (ctx) => {
    //ctx.replyWith
});



bot.help((ctx) => ctx.reply('Help message'));
bot.action('delete', ({ deleteMessage }) => deleteMessage());
bot.startPolling();