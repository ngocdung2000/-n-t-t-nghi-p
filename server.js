require('dotenv').config();
const http = require('http')
const app = require('./app')
const DB = require('./config/db')

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(PORT, async () => {
    console.log(`Listening on ${PORT}`);
    DB.connect();
});
