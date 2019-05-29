const path = require('path');
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {

	res.sendFile(path.join(__dirname + '/public/index.html'))
})

app.use(express.static(__dirname + '/public/'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))