import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './index.css'

const app = createApp(App);
app.use(router);
app.mount('#app');

//setup
app.use(express.json());
app.use(morgan("dev"));

//import routes
const primaryDataRoute = require('./routes/primaryData');
const eventsDataRoute = require('./routes/eventsData');
const organizationDataRoute = require('./routes/organizationData');
const dashboardDataRoute = require('./routes/dashboardData');

//setup middle ware for routes
app.use('/primaryData', primaryDataRoute);
app.use('/eventData', eventsDataRoute)
app.use('/organizationData', organizationDataRoute)
app.use('/dashboardData', dashboardDataRoute)

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