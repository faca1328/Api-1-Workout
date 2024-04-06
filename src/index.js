const express = require('express');
const v1WorkoutRoute = require('./v1/routes/workoutRoute.js');

const app = express();
const PORT = process.env.PORT || 3001

app.use(express.json());


app.use('/api/v1', v1WorkoutRoute);

/* app.get("/", (req, res) => { 
    res.send("<h1> Holi ! </h1>")
}); */

app.listen(PORT, ()=> { console.log("listening") });