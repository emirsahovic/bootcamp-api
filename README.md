# Bootcamp API
Backend API created to manage bootcamps, courses, users and authentication (JWT), built using Node.js, Express.js and MongoDB.

# API Documentation
https://documenter.getpostman.com/view/18219208/UVkqqEaC

# How To Run
- Git clone repository
- Create your own .env file that should contain:
  - PORT = <YOUR_PORT>
  - MONGO_URI = <YOUR_MONGO_URI>
  - JWT_SECRET = <YOUR_JWT_SECRET>
  - JWT_EXPIRE = <YOUR_JWT_EXPIRE>
- Run these commands in terminal/shell:
  -  npm install
  -  npm start

# Project Architecture
``` 
└───config
    │   db.js
└───controllers
    │   bootcamps.js
    │   courses.js
    │   users.js
└───middleware
    │   advancedResults.js
    │   auth.js
    │   error.js
└───models
    │   Bootcamp.js
    │   Course.js
    │   User.js
└───node_modules
└───routes
    │   bootcamps.js
    │   courses.js
    │   users.js
└───utils
    │   errorResponse.js
│   package-lock.json 
│   package.json
│   server.js   
```

