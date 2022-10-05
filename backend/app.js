const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan"); //better debugging
const cors = require("cors");
//allow using a .env file
require("dotenv").config();

  //sets up mongoose for the mongoDB connection
  mongoose
    .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@${process.env.DB_HOST}/team16`)
    .then(() => {
      console.log("Database connection Success!");
    })
    .catch((err) => {
      console.error("Mongo Connection Error", err);
    });

const main = async () => {
  // initialize cache
  const CACHE = require("./cache/cache")
  await CACHE.init()

  //creates a new instance of express application
  const app = express();

  // add cors header to the server
  app.use(cors({
    origin: '*'
  }));

  //declare port number for the api
  const PORT = process.env.PORT || 3000;

  //setup
  app.use(express.json());
  app.use(morgan("dev"));

  //import routes
  const primaryDataRoute = require('./routes/primaryData');
  const eventsDataRoute = require('./routes/eventsData');

  //setup middle ware for routes
  app.use('/primaryData', primaryDataRoute);
  app.use('/eventData', eventsDataRoute)

  app.listen(PORT, () => {
    console.log("Server started listening on port : ", PORT);
  });

  //error handler
  app.use(function (err, req, res, next) {
    // logs error and error code to console
    console.error(err.message, req);
    if (!err.statusCode)
      err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
  });

}

main()
