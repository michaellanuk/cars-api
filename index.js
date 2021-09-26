const express = require('express')
const carRoutes = require('./routes/carRoutes')

const sequelize = require('./db/config/database')

// Test database connection
try {
    sequelize.authenticate()
    console.log('Database connected.')
} catch (error) {
    console.error('Unable to connect to the database', error)
}

const app = express()

app.use(express.json())

app.get('/', (req, res) => res.send('Cars API index'))

app.use('/cars', carRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Application listening on http://localhost:${PORT}`))