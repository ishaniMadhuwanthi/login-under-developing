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
