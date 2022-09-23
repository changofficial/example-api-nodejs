let express = require('express');
let bodyParser = require( 'body-parser');

let usersRoutes = require('./routes/users.js');

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (reg, res) =>  res.send('HELLO FROM HOMEPAGE.'));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
