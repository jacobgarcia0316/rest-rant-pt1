# Project REST-Rant

REST-Rant is an app where users can review restaurants.


| Method | Path | Purpose |
| :---:  |:--- :| :---:    |
| GET | / | Home Page |
| GET | /places | places index page |
| POST | /places | creates new place |
| GET | /places/new | form page for creating new place | 
| GET | /places/:id | details about a particular place | 
| PUT | /places/:id | update a particular place | 
| GET | /places/:id | form page for editing an existing place | 
| DELETE | /places/:id | delete a particular place | 
| POST | /places.:id/rant | create a rant (comment) about particular place | 
| DELETE | /places/:id/rant/:rantId | delete a rant (comment) about a particular place | 
| GET | * | 404 page (matches any route not defined above) |