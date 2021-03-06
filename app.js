const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const path = require('path')
app.use('/', express.static(path.join(__dirname, 'todoapp/build')))


app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/profile', (req, res) => {
    res.send('here is your profile')
})
app.post('/profile', (req, res) => {
    res.send('profile is created')
})


app.put('/profile', (req, res) => {
    res.send('profile is updated')
})
app.delete('/profile', (req, res) => {
    res.send('profile is deleted')
})
app.get("/**", (req, res, next) => {
    res.sendFile(path.join(__dirname, "./todoapp/build/index.html"))
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})