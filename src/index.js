require('module-alias/register');
require('dotenv').config();

const { WebClient } = require('@slack/web-api');
const bot = new WebClient(process.env.SLACK_TOKEN);

const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const logger = require('@helpers/logger');
const getContext = require('@helpers/get_context');

const app = express();

app.use(helmet());
app.use(helmet.hidePoweredBy({ setTo: 'PHP/5.2.4' })); // :P

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/command', async (req, res) => {
  const ctx = getContext(req.body);

  console.log(ctx);

  try {
    await bot.chat.postEphemeral({
      channel: ctx.channelId,
      user: ctx.userId,
      blocks: sampleBlock,
    });

    res.status(200).end();
  } catch (err) {
    logger('error', err);
  }
});

app.post('/action', async (req, res) => {
  console.log(req.body);
  return 'ok';
});

(async () => {
  try {
    await app.listen(process.env.PORT, () => process.env.NODE_ENV === 'development' ? console.log(`Server running on port ${process.env.PORT}. Nice.`) : true);
  } catch (err) {
    logger('error', err);
    process.exit(1);
  }
})();
