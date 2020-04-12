const app = require('./app');

const port = 80;
const host = '0.0.0.0';

app.listen(port, host);
console.log(`Express is running on http://${host}:${port}`);
