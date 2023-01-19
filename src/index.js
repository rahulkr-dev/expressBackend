const express = require('express')
const cors = require('cors')
const app = express();
const PORT = 8080;
const userRoute = require('./route/user.route');
const config = require('./config/db');

app.use(express.json());
app.use(cors())
app.use('/api/user', userRoute);

app.listen(PORT, async () => {
    await config();
    console.log('listening on port 8080')
})