Captain's Log
Practice What You Learned
The Captain's LogLearning Objectives
Full CRUD app with a mongo database
Prerequisites
JavaScript
Express / Node
Mongo / Mongoose
Multi-part/Multi-day Lab
Every great captain, whether on the waters or in the skies, keeps a daily log.

Let's build the perfect Captain's Log App for our extraordinary captains.

There are many ways to get started building an app. This lab follows a specific order for two reasons:

to align with the content of lecture
to give you an order to guide you to create small bits of functionality and test each one before moving on to the next part
If you finish lab early consider:

adding some CSS and practice styling your app
try working with the date object! Try to make it look human readable in HTML. It's tricky! A Hin
try working through the next section of the lab before it is covered in lecture - see what you can figure out

Set up
Let's keep track of our Restful Routes as we build out our app. Copy/paste this table into a fresh file, open an excel/sheets spreadsheet or draw on a piece of paper. Feel free to add more columns and notes to help you put it all together.

Index, New and Create has been completed for you.

Restful Routes

# Action URL HTTP Verb jsx view filename mongoose method

1 Index /logs/ GET Index.jsx Log.find()
2 Show
3 New /logs/new GET New.jsx none
4 Create /logs/ POS T none Log.create(req.body)
5 Edit
6 Update
7 Destroy

In your student_labs folder
mkdir captains_log
cd catpains_log
create a new express app
New
create a newroute in your server.js - be sure to follow the Restful convention
just have it res.send('new') as the response for now
make a views directory
install express-react-views react react-dom
touch views/New.jsx
Create the view, it should contain a form with the following:
form with action="/logs"and method="POST"
input type text for a title
input type textarea for an entry
input type checkbox for shipIsBroken
input type submit
change your res.send to res.render this view
don't forget to git add and git commit your work, give yourself an informative commit message so you can trace back your work, if you need to
Create
create a create route in your server.js- be sure to follow the Restful convention
just have it res.send('received') as the response for now
use and configure body-parser in your server.js (note, this package was once separate, but has been added back in to express more detail
check to make sure it works by changing the res.send from a string to sending the req.body- it should send the data you inputted to your newform
upgrade your data
change the input of your checkbox to be true/false rather than on
now when you check your res.send(req.body) you should see true/false rather than 'on/off' - the rest of your data should stay the same
don't forget to git add and git commityour work, give yourself an informative commit message so you can trace back your work, if you need to
Mongo
install mongoose and configure it in your server.js
Logs Model
mkdir models
touch models/logs.js
Create the logs schema
title: string
entry: string
shipIsBroken: Boolean (bonus: set a default to true)

Super bonus:

as a second argument to mongoose.Schema(), add { timestamps: true }
Upgrade your Create Route
upgrade your code to create your log in MongoDB
have your route redirect to the show page after create
don't forget to git add and git commit your work, give yourself an informative commit message so you can trace back your work, if you need to
Stretch: make a seed file and seed it
Index Route
In server.js make an index route, be sure to follow the Restful convention
first, just test it by having it res.send('index')
Don't forget to fill out your Restful table!
create Index.jsx and change your res.send to res.render this page
upgrade your route and jsx to render all the logs in your database, just make an unordered list of the titles for now
Add a link to the create page
don't forget to git add and git commit your work, give yourself an informative commit message so you can trace back your work, if you need to
Show Route
Fill out your Restful table
In server.js make a show route, be sure to follow the Restful convention
create a mongo query and res.send your data as a string
upgrade your Index.jsx so that each title links to its show page
Create a Show.jsx and add HTML
show the title
show the entry
show whether the ship is broken or not
add a link back to the index page
bonus:
if you had added time stamps to your model, display the date the entry was created
upgrade your res.send to a res.render of your Show.jsx
don't forget to git add and git commit your work, give yourself an informative commit message so you can trace back your work, if you need to
Delete Route
Fill out your Restful table
in your Index.jsx, add a delete form
install and configure method-override
upgrade your delete form to have the appropriate action and method
make your delete route in your server.js
make your delete route delete your log and redirect back to your index route
don't forget to git add and git commit your work, give yourself an informative commit message so you can trace back your work, if you need to
Edit Route
Fill out your Restful table
in your Index.jsx, add a link to your edit route
create your edit route in your server.js
create your Edit.jsx
test it to make sure it works as expected (be sure to populate your form with your log's data)
don't forget to git add and git commit your work, give yourself an informative commit message so you can trace back your work, if you need to
Update Route
Fill out your Restful table
upgrade your Edit.jsx form to have the appropriate action and method
create your PUT route
First, just have it res.send the updated log and check it is as expected
change the res.send to a res.redirect to your index page
don't forget to git add and git commit your work, give yourself an informative commit message so you can trace back your work, if you need to
Router
mkdir controllers
touch controllers/logs.js
work on refactoring your code so your logs routes are in your controller file, rather than in server.js
