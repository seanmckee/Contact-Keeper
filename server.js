const express = require('express')
const connectDB = require('./config/db')
const app = express()

// Connect DB
connectDB()

// init middleware
app.use(express.json({ extended: false }))

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.json({msg: 'Welcome to ContactKeeper API'})
})

// Define Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))


app.listen(PORT, () => console.log(`server started on port ${PORT}`))