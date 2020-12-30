# BLOOD BANK MANAGEMENT SYSTEM

- - -

Project Collaborators:-

- [Ishani Maduwanthi](https://github.com/ishaniMadhuwanthi)
+ [Kshithija Wanniarachchi](https://github.com/kshithi)
- [Wathsari Premathilake](https://github.com/wathsariPremathilaka)

-------------------

## About Project

This is a web application including the database developed by targeting blood bank. Following are the functionalites in the system.

**Administration:**

* Update available blood stock
* Hospitals can request blood bags from blood bank
* Display notices to inform blood donation campaigns
* Inform blood types that lack in the stock.

**Donors:**

* Can register to the system
* Can view their donating history
* Can find hospital, where they can donate blood.

## Instructions

1. Clone the repository
2. In the project directory you can run:
         
         npm start
          
If it makes errors, run 
         
         npm install or
         npm update
          
Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

3. Create database named **"login"** in your MySQL and edit configurations. You can download database using **login.sql** in this repository.
 
 **Database name:** login
 
 **Database password0**: root

```JavaScript
const sequelize = new Sequelize('login', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})
```

## Dependencies

### For Client Directory
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.5.0",
    "@testing-library/user-event": "^7.2.1",
    "axios": "^0.19.2",
    "jsonwebtoken": "^8.5.1",
    "jwt-decode": "^2.2.0",
    "muicss": "^0.10.2",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-mdl": "^2.1.0",
    "react-router-dom": "^5.1.2",
    "react-scripts": "^2.1.8"

### For Database Directory

    "bcrypt": "^4.0.1",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "mongodb": "^3.5.8",
    "mongoose": "^5.9.17"
