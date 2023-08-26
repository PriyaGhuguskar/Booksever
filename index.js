const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const connectMongo = require('./config/dbConnect')

dotenv.config()
connectMongo()

const BookRoutes = require('./routes/bookRoutes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


// app.get("/", (req, res) => {
//     res.send("You are Connected")
// })

app.use('/api/v1/book', BookRoutes)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})
