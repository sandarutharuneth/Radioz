const app = require('express')();

app.get('/', (req, res) => res.send('Bot is Online'));

module.exports = () => {
  app.listen(3000);
}
