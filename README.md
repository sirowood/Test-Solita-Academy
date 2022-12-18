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
- Pagination
- Ordering per column
- Searching
- Filtering
- Adding journey in backend and frontend

### Station list view
1. List all stations

#### Bonus
- Pagination
- Searching

### Single station view
1. Station name
2. Station address
3. Total number of journeys starting from the station
4. Total number of journeys ending at the station

#### Bonus
- Station location on the map
- The average distance of a journey starting from the station
- The average distance of a journey ending at the station
- Top 5 most popular return stations for journeys starting from the station
- Top 5 most popular departure stations for journeys ending at the station
- Ability to filter all the calculations per month
- Adding station in backend and frontend

### Other highlights:
1. Docker
2. Test Driven Development
3. E2E tests

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
  - Redux
  - Axios

### Testing
  - Jest: Unit
  - Supertest: Integration
  - Cypress: E2E

## Prerequisites
TODO

## Configurations
TODO

## How to run the project
TODO

## Tests
TODO

