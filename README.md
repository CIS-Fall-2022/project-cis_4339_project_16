# Data Platform Project Setup

Requirements:

This project uses NodeJS and MongoDB.

## Backend Node Application
```
cd backend
```
Follow instructions in backend README

## Frontend Vue 3 Application
```
cd frontend
```
Follow instructions in frontend README


# Backend API Overview

There are two schemas that the API uses, Intake and Event. Both schemas have functions for creating, updating, and deleting entrys. Endpoints are different depending on which schema is being accessed.

Event data will use http://localhost:3000/eventData/
Intake data will use http://localhost:3000/primaryData/


# Event Data Endpoints
There are eight endpoints for manipulating data in the Events schema.

You can query the database to GET either all entries, a specific entry by ID, multiple entrys that match certain criteria, or all events assosicated with a specific client ID.

# Examples 
```
http://localhost:3000/eventData/   //GET all entries 
http://localhost:3000/eventData/id/633bb702eb4079e3330de913   //GET by ID
http://localhost:3000/eventData/search/?eventName=View&searchBy=name  //GET by criteria 
http://localhost:3000/eventData/client/633bb79beb4079e3330de91f  //GET event by client ID
```
There are three endpoints for adding data to the database. One is for adding a new entry, while the other two are for updating entries with new information.

#Examples
```
http://localhost:3000/eventData/  // POST method, adds a new event to the database. Data in request body.
http://localhost:3000/eventData/633bb720eb4079e3330de91a  // PUT method. Updates an Event entry with new data. Data in request body.
http://localhost:3000/eventData/addAttendee/633bb798eb4079e3330de91e // PUT method. Uses a clients ID to add them to the Event entry. 
```
There is one method to remove Event entries.

```
http://localhost:3000/eventData/633bb720eb4079e3330de91a //DELETE method. will delete the entry with the matching ID.
 
