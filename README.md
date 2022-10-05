# Data Platform Project Setup

To run project 

    1. cd backend 

    2. npm install

    3. node app.js
    
Project will be running on port 3000  
# 1. Backend API Overview

There are two schemas that the API uses, Intake and Event. Both schemas have functions for creating, updating, and deleting entrys. Endpoints are different depending on which schema is being accessed.

Event data will use http://localhost:3000/eventData/
Intake data will use http://localhost:3000/primaryData/


# 2. Event Data Endpoints
There are eight endpoints for manipulating data in the Events schema.

You can query the database to GET either all entries, a specific entry by ID, multiple entrys that match certain criteria, or all events assosicated with a specific client ID.

# 2.1 GET Examples 
```
http://localhost:3000/eventData/   //GET all entries 
http://localhost:3000/eventData/id/633bb702eb4079e3330de913   //GET by ID
http://localhost:3000/eventData/search/?eventName=View&searchBy=name  //GET by criteria 
http://localhost:3000/eventData/client/633bb79beb4079e3330de91f  //GET event by client ID
```
There are three endpoints for adding data to the database. One is for adding a new entry, while the other two are for updating entries with new information.

# 2.2 POST/PUSH Examples
```
http://localhost:3000/eventData/  // POST method, adds a new event to the database. Data in request body.
http://localhost:3000/eventData/633bb720eb4079e3330de91a  // PUT method. Updates an Event entry with new data. Data in request body.
http://localhost:3000/eventData/addAttendee/633bb798eb4079e3330de91e // PUT method. Uses a clients ID to add them to the Event entry. 
```
# 2.3 DELETE Example

```
http://localhost:3000/eventData/633bb720eb4079e3330de91a //DELETE method. will delete the entry with the matching ID.
```

# 3. Intake Data Endpoints 

There Are six endpoints for manipulating data in the Intake schema. They follow the same structure as the Event schema.

# 3.1 GET Examples
```
http://localhost:3000/primaryData/  //GET all entrys
http://localhost:3000/primaryData/id/633bb7aeeb4079e3330de924  //GET by client ID
http://localhost:3000/primaryData/search/?firstName=Books&searchBy=firstName  //GET client by criteria
http://localhost:3000/primaryData/events/633bb79feb4079e3330de920  //GET all events assosicated with a client ID
```

# 3.2 POST/PUT Examples
```
http://localhost:3000/primaryData/  // POST method, adds a new Client to the database. Data in request body
http://localhost:3000/eventData/633bb79feb4079e3330de920  // PUT method. Updates a Client entry with new data. Data in request body, ID in the endpoint URL.

```

# 3.3 DELETE Example
```
http://localhost:3000/primaryData/633bb7aeeb4079e3330de924  //DELETE method. will delete the entry with the matching ID.
