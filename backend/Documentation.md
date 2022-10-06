# Project: Backend API

## End-point: Get all events
### Method: GET
>```
>http://localhost:3000/eventdata
>```
### Response: 200
```json
[
    {
        "address": {
            "line1": "5324 6th St",
            "line2": "",
            "city": "Austin",
            "county": "Travis",
            "zip": "78741"
        },
        "_id": "633e54796fc501c6dc6c5803",
        "organizationId": "633bb4cbeb4079e3330de90e",
        "eventName": "Savings Awareness",
        "services": [
            "Spread Awareness"
        ],
        "date": "1988-04-09T13:33:10.745Z",
        "description": "Spread awareness about saving money.",
        "attendees": [
            "Tim",
            "Mike"
        ],
        "createdAt": "2022-10-06T04:07:21.765Z",
        "updatedAt": "2022-10-06T04:24:02.248Z",
        "__v": 0
    },
    {
        "address": {
            "line1": "100 Main St",
            "line2": "",
            "city": "Houston",
            "county": "Harris",
            "zip": "77000"
        },
        "_id": "633bb702eb4079e3330de913",
        "organizationId": "633bb4cbeb4079e3330de90e",
        "eventName": "Covid Vaccinations",
        "services": [
            "Facilitation"
        ],
        "date": "2002-06-24T08:38:40.850Z",
        "description": "Get covid vaccination for free!",
        "attendees": [
            "Hank"
        ]
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get event by ID
### Method: GET
>```
>http://localhost:3000/eventData/id/633bb702eb4079e3330de913
>```
### Response: 200
```json
[
    {
        "address": {
            "line1": "100 Main St",
            "line2": "",
            "city": "Houston",
            "county": "Harris",
            "zip": "77000"
        },
        "_id": "633bb702eb4079e3330de913",
        "organizationId": "633bb4cbeb4079e3330de90e",
        "eventName": "Covid Vaccinations",
        "services": [
            "Facilitation"
        ],
        "date": "2002-06-24T08:38:40.850Z",
        "description": "Get covid vaccination for free!",
        "attendees": [
            "Hank"
        ]
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get event entries by search
### Method: GET
>```
>http://localhost:3000/eventData/search?eventName=Savings%20Awareness&searchBy=name
>```
### Query Params

|Param|value|
|---|---|
|eventName|Savings%20Awareness|
|searchBy|name|


### Response: 200
```json
[
    {
        "address": {
            "line1": "5324 6th St",
            "line2": "",
            "city": "Austin",
            "county": "Travis",
            "zip": "78741"
        },
        "_id": "633e54796fc501c6dc6c5803",
        "organizationId": "633bb4cbeb4079e3330de90e",
        "eventName": "Savings Awareness",
        "services": [
            "Spread Awareness"
        ],
        "date": "1988-04-09T13:33:10.745Z",
        "description": "Spread awareness about saving money.",
        "attendees": [
            "Tim",
            "Mike"
        ],
        "createdAt": "2022-10-06T04:07:21.765Z",
        "updatedAt": "2022-10-06T04:24:02.248Z",
        "__v": 0
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get events for which a client is signed up
### Method: GET
>```
>http://localhost:3000/eventData/client/Hank
>```
### Response: 200
```json
[
    {
        "address": {
            "line1": "100 Main St",
            "line2": "",
            "city": "Houston",
            "county": "Harris",
            "zip": "77000"
        },
        "_id": "633bb702eb4079e3330de913",
        "organizationId": "633bb4cbeb4079e3330de90e",
        "eventName": "Covid Vaccinations",
        "services": [
            "Facilitation"
        ],
        "date": "2002-06-24T08:38:40.850Z",
        "description": "Get covid vaccination for free!",
        "attendees": [
            "Hank"
        ]
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Create an event
### Method: POST
>```
>http://localhost:3000/eventData
>```
### Body (**raw**)

```json
{
  "eventName": "Savings Awareness",
  "services": [
    "Spread Awareness"
  ],
  "date": "1988-04-09T13:33:10.745Z",
  "address": {
    "line1": "5324 6th St",
    "line2": "",
    "city": "Austin",
    "county": "Travis",
    "zip": "78741"
  },
  "description": "Spread awareness about saving money.",
  "attendees": [
    "Tim"
  ]
}
```

### Response: 200
```json
{
    "_id": "633e54796fc501c6dc6c5803",
    "organizationId": "633bb4cbeb4079e3330de90e",
    "eventName": "Savings Awareness",
    "services": [
        "Spread Awareness"
    ],
    "date": "1988-04-09T13:33:10.745Z",
    "address": {
        "line1": "5324 6th St",
        "line2": "",
        "city": "Austin",
        "county": "Travis",
        "zip": "78741"
    },
    "description": "Spread awareness about saving money.",
    "attendees": [
        "Tim"
    ],
    "createdAt": "2022-10-06T04:07:21.765Z",
    "updatedAt": "2022-10-06T04:07:21.765Z",
    "__v": 0
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update an event
### Method: PUT
>```
>http://localhost:3000/eventData/633e54796fc501c6dc6c5803
>```
### Body (**raw**)

```json
{
  "eventName": "Savings Awareness",
  "services": [
    "Spread Awareness"
  ],
  "date": "1988-04-09T13:33:10.745Z",
  "address": {
    "line1": "5324 6th St",
    "line2": "",
    "city": "Austin",
    "county": "Travis",
    "zip": "78741"
  },
  "description": "Spread awareness about saving money.",
  "attendees": [
    "Tim"
  ]
}
```

### Response: 200
```json
{
    "address": {
        "line1": "5324 6th St",
        "line2": "",
        "city": "Austin",
        "county": "Travis",
        "zip": "78741"
    },
    "_id": "633e54796fc501c6dc6c5803",
    "organizationId": "633bb4cbeb4079e3330de90e",
    "eventName": "Savings Awareness",
    "services": [
        "Spread Awareness"
    ],
    "date": "1988-04-09T13:33:10.745Z",
    "description": "Spread awareness about saving money.",
    "attendees": [
        "Tim"
    ],
    "createdAt": "2022-10-06T04:07:21.765Z",
    "updatedAt": "2022-10-06T04:07:21.765Z",
    "__v": 0
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Add attendee to event
### Method: PUT
>```
>http://localhost:3000/eventData/addAttendee/633e54796fc501c6dc6c5803
>```
### Body (**raw**)

```json
{"attendee": "Mike"}
```

### Response: 200
```json
{
    "acknowledged": true,
    "modifiedCount": 1,
    "upsertedId": null,
    "upsertedCount": 0,
    "matchedCount": 1
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Remove an event by ID
### Method: DELETE
>```
>http://localhost:3000/eventData/633e58b0eb4079e3330de94d
>```
### Response: 200
```json
{
    "acknowledged": true,
    "deletedCount": 1
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get all intakes
### Method: GET
>```
>http://localhost:3000/primaryData
>```
### Response: 200
```json
[
    {
        "address": {
            "line1": "1300 Crossing PL",
            "line2": "Unit 907",
            "city": "Austin",
            "county": "Travis",
            "zip": "78741"
        },
        "_id": "633bb78aeb4079e3330de91d",
        "organizationId": "633bb4cbeb4079e3330de90e",
        "firstName": "Hank",
        "middleName": "J",
        "lastName": "Mikalson",
        "email": "hankmikal@gmail.com",
        "phoneNumbers": [
            "8326472849"
        ],
        "createdAt": "2000-08-20T07:30:37.921Z",
        "updatedAt": "2017-11-22T23:26:46.039Z"
    },
    {
        "address": {
            "line1": "11555 Bissonnet St",
            "line2": "Unit 102",
            "city": "Houston",
            "county": "Harris",
            "zip": "77099"
        },
        "_id": "633bb7aeeb4079e3330de924",
        "organizationId": "633bb4cbeb4079e3330de90e",
        "firstName": "Tim",
        "middleName": "P",
        "lastName": "Wellington",
        "email": "wellingtontim@gmail.com",
        "phoneNumbers": [
            "8328493924"
        ],
        "createdAt": "1997-08-22T17:04:47.012Z",
        "updatedAt": "1988-09-20T12:51:28.580Z"
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get intake by ID
### Method: GET
>```
>http://localhost:3000/primaryData/id/633bb78aeb4079e3330de91d
>```
### Response: 200
```json
[
    {
        "address": {
            "line1": "1300 Crossing PL",
            "line2": "Unit 907",
            "city": "Austin",
            "county": "Travis",
            "zip": "78741"
        },
        "_id": "633bb78aeb4079e3330de91d",
        "organizationId": "633bb4cbeb4079e3330de90e",
        "firstName": "Hank",
        "middleName": "J",
        "lastName": "Mikalson",
        "email": "hankmikal@gmail.com",
        "phoneNumbers": [
            "8326472849"
        ],
        "createdAt": "2000-08-20T07:30:37.921Z",
        "updatedAt": "2017-11-22T23:26:46.039Z"
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get intake entries by search
### Method: GET
>```
>http://localhost:3000/primaryData/search?firstName=Hank&lastName=Mikalson&searchBy=name
>```
### Query Params

|Param|value|
|---|---|
|firstName|Hank|
|lastName|Mikalson|
|searchBy|name|


### Response: 200
```json
[
    {
        "address": {
            "line1": "1300 Crossing PL",
            "line2": "Unit 907",
            "city": "Austin",
            "county": "Travis",
            "zip": "78741"
        },
        "_id": "633bb78aeb4079e3330de91d",
        "organizationId": "633bb4cbeb4079e3330de90e",
        "firstName": "Hank",
        "middleName": "J",
        "lastName": "Mikalson",
        "email": "hankmikal@gmail.com",
        "phoneNumbers": [
            "8326472849"
        ],
        "createdAt": "2000-08-20T07:30:37.921Z",
        "updatedAt": "2017-11-22T23:26:46.039Z"
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get events for a client
### Method: GET
>```
>http://localhost:3000/primaryData/events/Hank
>```
### Response: 200
```json
[
    {
        "address": {
            "line1": "100 Main St",
            "line2": "",
            "city": "Houston",
            "county": "Harris",
            "zip": "77000"
        },
        "_id": "633bb702eb4079e3330de913",
        "organizationId": "633bb4cbeb4079e3330de90e",
        "eventName": "Covid Vaccinations",
        "services": [
            "Facilitation"
        ],
        "date": "2002-06-24T08:38:40.850Z",
        "description": "Get covid vaccination for free!",
        "attendees": [
            "Hank"
        ]
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Create an intake
### Method: POST
>```
>http://localhost:3000/primaryData/
>```
### Body (**raw**)

```json
{
  "firstName": "Tim",
  "middleName": "P",
  "lastName": "Wellington",
  "email": "wellingtontim@gmail.com",
  "phoneNumbers": [
    "8328493924"
  ],
  "address": {
    "line1": "11555 Bissonnet St",
    "line2": "Unit 102",
    "city": "Houston",
    "county": "Harris",
    "zip": "77099"
  },
  "createdAt": "1997-08-22T17:04:47.012Z",
  "updatedAt": "1988-09-20T12:51:28.580Z"
}
```

### Response: 200
```json
{
    "_id": "633e5b5cdb0cd5ef494078d5",
    "organizationId": "633bb4cbeb4079e3330de90e",
    "firstName": "Tim",
    "middleName": "P",
    "lastName": "Wellington",
    "email": "wellingtontim@gmail.com",
    "phoneNumbers": [
        "8328493924"
    ],
    "address": {
        "line1": "11555 Bissonnet St",
        "line2": "Unit 102",
        "city": "Houston",
        "county": "Harris",
        "zip": "77099"
    },
    "createdAt": "1997-08-22T17:04:47.012Z",
    "updatedAt": "1997-08-22T17:04:47.012Z",
    "__v": 0
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update an intake
### Method: PUT
>```
>http://localhost:3000/primaryData/633bb7aeeb4079e3330de924
>```
### Body (**raw**)

```json
{
  "firstName": "Tim",
  "middleName": "P",
  "lastName": "Wellington",
  "email": "wellingtontim@gmail.com",
  "phoneNumbers": [
    "8328493924"
  ],
  "address": {
    "line1": "11555 Bissonnet St",
    "line2": "Unit 102",
    "city": "Houston",
    "county": "Harris",
    "zip": "77099"
  },
  "createdAt": "1997-08-22T17:04:47.012Z",
  "updatedAt": "1988-09-20T12:51:28.580Z"
}
```

### Response: 200
```json
{
    "address": {
        "line1": "11555 Bissonnet St",
        "line2": "Unit 102",
        "city": "Houston",
        "county": "Harris",
        "zip": "77099"
    },
    "_id": "633bb7aeeb4079e3330de924",
    "organizationId": "633bb4cbeb4079e3330de90e",
    "firstName": "Tim",
    "middleName": "P",
    "lastName": "Wellington",
    "email": "wellingtontim@gmail.com",
    "phoneNumbers": [
        "8328493924"
    ],
    "createdAt": "1997-08-22T17:04:47.012Z",
    "updatedAt": "1988-09-20T12:51:28.580Z"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete an intake
### Method: DELETE
>```
>http://localhost:3000/primaryData/633e5be7eb4079e3330de950
>```
### Response: 200
```json
{
    "acknowledged": true,
    "deletedCount": 1
}
```
