const apicache = require('apicache');
const express = require('express');
const v1WorkoutRoute = require('./v1/routes/workoutRoute.js');

const app = express();
const PORT = process.env.PORT || 3001
const cache = apicache.middleware;

app.use(express.json());

//con esto cacheo por dos minutos (mantengo las cookies para mejor rendimiento por dos minutos)
app.use(cache('2 minutes'))

// llamamos a la ruta que queremos que se ejecute en esta dirección.
app.use('/api/v1', v1WorkoutRoute);

/* app.get("/", (req, res) => { 
    res.send("<h1> Holi ! </h1>")
}); */

app.listen(PORT, ()=> { console.log("listening") });