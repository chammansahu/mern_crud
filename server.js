const express = require('express');
const dbFile = require('./conn');
const PORT = 5000;
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const postRoute = require('./routes/post')
const userRoute = require('./routes/user')

app.use("/api/post", postRoute);
app.use("/api/user", userRoute);
app.get('/', (req, res) => {
    res.end('Hello from server')
})

app.listen(PORT, () => {
    console.log(`Server is Running at ${PORT}`);
})