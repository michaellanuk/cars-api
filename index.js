const express = require('express')
const path = require('path')

const sequelize = require('./config/database')

// Test database connection
try {
    sequelize.authenticate();
    console.log('Database connected.');
} catch (error) {
    console.error('Unable to connect to the database', error);
}

const app = express()

app.get('/', (req, res) => res.send('Cars API'))

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Application listening on http://localhost:${PORT}`))