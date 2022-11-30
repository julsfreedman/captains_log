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

New
Create
Mongo
Logs Model
Upgrade your Create Route
Index Route
Show Route
Delete Route
Edit Route
Update Route
Router
