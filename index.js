const express = require('express')
const cors = require('cors')
const app = express();
const PORT = 8080;
const userRoute = require('./src/models/user.model');
const config = require('./src/config/db');

app.use(express.json());
app.use(cors())
app.use('/api/user', userRoute);

app.listen(PORT, async () => {
    await config();
    console.log('listening on port 8080')
})