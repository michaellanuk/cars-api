# Cars API 

API using Express and Sequelize with MySQL

## Quick Start

``` bash
# Install dependencies
npm install

# Configure MySQL database connection inside:
- /db/config/config.json
- /db/config/database.js

# Run initial migrations
npx sequelize-cli db:migrate

# Execute seed file
npx sequelize-cli db:seed:all

# Serve on dev server with Nodemon
npm run dev
```

## Usage

e.g., on http://localhost:5000

### GET

- All cars: `/cars`
- Car by ID: `/cars/id/[id]`
- Car by make/model/both: `cars/search?make=fiat&model=500` or `cars/search?make=fiat`

### POST

- Add car: `/cars/add` with JSON body 
  ```
  {
    "make":"fiat",
    "model":"500"
  }
  ```

### DELETE

- Delete car by ID: `/cars/delete/[id]`
    
## App Info

### Author

Michael Lan

### Version

1.0.0
