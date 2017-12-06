const https = require('https');
const fs = require('fs');
const router = require('./router');

const options = {
  key : fs.readFileSync('./server.key'),
  cert: fs.readFileSync('./server.crt')
}

https.createServer(options, router).listen(4000, () => {
  console.log(`Listening on port 4000`);
})
