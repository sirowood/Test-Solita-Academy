## Description

This application will be developed using Docker from the very starting point. Due to the fact the data is too large to find a free database cloud provider, I decide to use local Postgres Docker container as the database instance.

According to the test requirement, the application will have the following features:

### Data import

1. Import data from the CSV files to a database
2. Validate data before importing
3. Only import journeys that lasted **AT LEAST** 10 seconds
4. Only import journeys that covered **AT LEAST** 10 meters

### Journey list view

1. List all journeys
2. Each journey shows:
   - Departure station
   - Return station
   - Covered distance (in kilometers)
   - Duration (in minutes)

#### Bonus

- [x] Pagination
- [x] Ordering per column
- [x] Searching
- [x] Filtering
- [x] Adding journey in backend and frontend

### Station list view

1. List all stations

#### Bonus

- [x] Pagination
- [x] Searching

### Single station view

1. Station name
2. Station address
3. Total number of journeys starting from the station
4. Total number of journeys ending at the station

#### Bonus

- [x] Station location on the map
- [x] The average distance of a journey starting from the station
- [x] The average distance of a journey ending at the station
- [x] Top 5 most popular return stations for journeys starting from the station
- [x] Top 5 most popular departure stations for journeys ending at the station
- [ ] Ability to filter all the calculations per month
- [x] Adding station in backend and frontend

## Techenology choices

### Database

- PostgreSQL
  - Currently the most popular Open Source solution
  - I'm familiar with and feels comfortable to use :)
- Sequelize:
  - Table -> Model
  - Easier to apply server-side pagination
- Umzug:
  - Manage the database migrations

### Backend

- Node.js
- Express

### Frontend

- React.js
- ~~Redux~~
- Axios
- TailwindCSS

### Testing

- Unit
  - Jest
  - React Testing Library
- Integration: Supertest
- ~~Cypress: E2E~~

## Prerequisites

- Docker v20.10.22
- Docker Compose v2.15.1
- Node v16.14.2

## How to run the project

1. Make sure the prerequisite softwares installed
2. Make sure port 3000 - 3003 is free
3. Make sure you have internet connection
4. Run `npm ci` under the server folder
5. Run `npm ci` under the client folder
6. Run `docker-compose -f docker-compose.dev.yml up` under this project's root folder
7. Take a coffee and wait until you get this message from the terminal `webpack 5.75.0 compiled successfully in xxxxx ms`
8. Visit `localhost:3000` in your favorite browser

## Tests

**Make sure you have the docker-compose already up**

### Server

- Run `npm run test` under the server folder

### Client

- Run `npm run test` under the client folder

## Others

### What could be done in the future

1. Display the Stations/Journeys page in card style
2. E2E test
3. Build and deploy the test online
4. Further extract the src/components/table/Pagination.tsx into smaller code
5. Use Nginx container to configure the reverse proxy

### Additional handling the invalid journey records

#### With invalid station id

There are some journey records has departure/arrival station id which is not in the given station data.

For example, there are 37 records with the `departure_station_id = 999` in 05.csv

Such journey records has been handled as invalid record as well.

#### Possible duplicates

When writing the journeys filter function, I notices there are many cases that two journey records has exactly the same values, then I found each csv file has two sets of record with identical data, I assume only one set of the data is valid. That's why I added the constriant for journey table.
