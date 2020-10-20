# EatTheFood
This is the Eat the food app.
# How It Works
Type in a food in add food it will then appear in the devour the deliciousness list with the option to devour click devour
for it to be placed in the devoured list
# Behind the scenes 
## First
The code is comprised of multiple folders with a server file to run the program and all the files talk to the other files in the other folders. In the configuration folder there is two files one named connection.js and the other named orm.js, 
connection.js makes a connection to mysql while the orm.js manipulates the data from the mysql library so you can interact with the objects produced directly.
## Next
The controller and models folders, the controller folder talks to the model folder and exports all the functions to post delete and add things onto the page then the model folder talks to the orm to know how to manipulate the data to create. A better way of explaining it is the is that the model talks to the controller so its knows how to do everything it needs to do then the controller calls it in every function and uses it to add put and delete from the page.
## Lastly
Lastly I will be talking about the public and views folders the public folder holds a css and js folder inside the js folder holds click functions that make ajax calls to the data so when you click devour it talks to the data and moves the data on the page. The views folder has 3 handle bar files one for the layout one for the buttons named partial and the last one contains holds the body content and is outside both layout and partial folder and uses the partial folder to make buttons appear and is inserted inside the the layouts body.
## Heroku Deployed
https://eat-thefood.herokuapp.com/