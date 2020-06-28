## Our Work:

1) Login API: http://localhost:8000/api/login 
Authenticate the user by checking its email, password and type. if all these things are correct then return the response successfull and get the user logged in, otherwise return the respective error.

2) SchoolRegistration API: http://localhost:8000/api/schoolRegistration
By hitting this API, it passes an object containing keys and values(i.e: email,password,amount,location,ownerName,ownerNic,registrationDate,schoolName,schoolId,type) saving it in database and register a new School.

3) employeeRegistration API:  http://localhost:8000/api/employeeRegistration
By hitting this API, it passes an object containing keys and values(i.e: email,password,employeeName,fatherName,registrationDate,employeeType,employeeID,schoolID,salary, type) saving it in database and register a new Employee.

4) studentRegistration API: http://localhost:8000/api/studentRegistration
By hitting this API, it passes an object containing keys and values(i.e: password,studentName,fatherName,registrationDate,schoolID,class,QRno,studentFees,type ) saving it in database and register a new Student.

5) viewSchool API: http://localhost:8000/api/viewSchool
This API displays list of all the registered schools to super admin.

6) schoolDelete API: http://localhost:8000/api/schoolDelete
This API deletes the school from the current record and update the view.    

7) employeeDetail ApI:  http://localhost:8000/api/employeeDetail
This API determine all the information of an employee and update the view.

8) employeeDelete API:  http://localhost:8000/api/employeeDelete
This API finds empolyee by its ID and deletes the employee from the current record and update the view.      

9) studentDetail API:  http://localhost:8000/api/studentDetail
This API checks for the student corresponding to ID if it exists then display the details, otherwise return error.

10) studentDelete API: http://localhost:8000/api/studentDelete     
This API finds student by its ID and deletes from the current record and update the view.    

11) attendanceSubmit API: http://localhost:8000/api/attendanceSubmit     
Maintains attendance of employee (submit one at a time)     

12) attendanceRecord API: http://localhost:8000/api/attendanceRecord
Display all the attendance record of employee.

13) feesSubmit API:  http://localhost:8000/api/feesSubmit
This API works for fee collection.

14) feesRecord API:  http://localhost:8000/api/feesRecord
This API maintains the fee record of each student.

15) salarySubmit API: http://localhost:8000/api/salarySubmit
This API works for salary creation of staff.

16) salaryRecord API: http://localhost:8000/api/salaryRecord
This API maintains the salary record of each employee.
                                                                     

using technologies/tools:
1) Node-js
2) Express-js
3) Mongolab (Data will store on cloud, benefits of Mongolab we can fetch data anywhere from database and don't have to start database any time)
4) Mongoose


# node-js-getting-started

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application supports the [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone git@github.com:heroku/node-js-getting-started.git # or clone your own fork
$ cd node-js-getting-started
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
