const express = require('express')
const app = express()
const PORT = 4444

app.use('/', express.static(__dirname + '/www'));
app.get('/*', (req, res) => {
	res.sendFile(__dirname + '/www/index.html')
})

app.listen(PORT, () => {
	console.log('listening on' + PORT)
})