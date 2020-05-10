// include packages and define ser ver related variables
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const port = 3000
const makeSentence = require('./random-sentence')
const jobs = require('./jobs.json')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// setting routes
app.get('/', (req, res) => {
  res.render('index', {job: jobs.allJobs})
})

app.post('/', (req, res) => {
  const option = req.body.option
  const sentence = makeSentence(req.body.option)
  res.render('index', {job: jobs.allJobs, sentence, option})
})

// handlebars helper => if else expression
const Handlebars = require("handlebars")
Handlebars.registerHelper('if_eq', (a, b, opts) => {
  if(a === b) {
    return opts.fn(this)
  } else {
    return opts.inverse(this)
  }
})

// start the express server and listening for connection
app.listen(port, () => {
  console.log(`Express app listening on port ${port}`)
})