const express = require('express')
const app = express()
const port = 3005

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.render('home'))

app.listen(port, _=> console.log(`app listen at http://localhost:${port}`))