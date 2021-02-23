# Workout-tracker

![image](Workout-tracker-landing-page.png)

Description
------------

Tracker will track current workout being performed. Exercises can be added throughout the workout. Plus there is a stats page giving an infographic of the exercises that have been performed. The frontend files were given by Trilogy. 

 Table of contents
---------------
[Tools used](#Tools-used)<br />
[Deployed here](#Deployed-here)<br />
[Features](#Features)<br />
[Lessons learned](#Lessons-learned)<br />
[Credits](#Credits)<br />
[License](#License)

Tools used
-------------------
* Express - Link front end and back end together via routes.
* GitBash - Assist with version control via commits, push, and pull to and from GitHub.
* GitHub - Site where the repository lies for deployment and edits.
* MongoDB - Stores the data of the exercises being performed.
* Mongoose - Object data modeler allowing for creation of models to be used with mongoDB.
* Node.js - Build the template and all functions in application. 
* VS Code - Application used to write and edit code for the application.

Deployed here
-------------

Below is the link to the deployed site. <br />
[Link to deployed site](https://personal-workout-tracking.herokuapp.com/)


Features
------------------

The application utilizes the MVC architecture. This allows for nice organization of the files by their purpose. There is also continuous calculations of all the exercises performed throughout the workout to keep the user up to date with what they have done. 

Lessons learned
---------------------
The biggest struggle with this application has been to find the proper routes to create in order to link with the existing frontend files. I believe I had gotten the routes correct and functional however no data is being passed from the frontend to the backend, specifically to the file workout.js in the public folder. This hiccup has taken a significant time to debug and no resolution has been reached.

There is a task to have another field created dynamically that adds the total length of workout time based on every exercise done. This test could not be performed due to the above task being unsolved.

These combined errors have also made it so that the application on Heroku will not load. I imagine that once these issues have a solution along with no other errors coming up, the app will run with mongoDB on Heroku.


Credits
---------------
LinkedIn: [https://www.linkedin.com/in/vincent-nguyen-74226a107/](https://www.linkedin.com/in/vincent-nguyen-74226a107/) <br />
GitHub: [https://github.com/vincent-nguyen8931](https://github.com/vincent-nguyen8931) <br />
Portfolio: [https://vincent-nguyen8931.github.io/Vincent-Nguyen-Portfolio/](https://vincent-nguyen8931.github.io/Vincent-Nguyen-Portfolio/)


License
----------
MIT License

Copyright (c) [2021] [Vincent Nguyen]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.