const app = require('./app');

const port = process.env.PORT;
const host = 'localhost';

app.listen(port, host);
console.log(`Express is running on http://${host}:${port}`);
