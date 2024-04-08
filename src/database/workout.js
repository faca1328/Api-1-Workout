const db = require('./db.json'); // Aca recuperariamos la db de mongoDB x ej
const { saveInDB } = require('./utils'); 

//aca recuperamos los datos de la DB para los servicios.
const getAllWorkouts = () => {
    return db.workouts;
}

const createNewWorkout = (newWorkout) => {
    const itsAlreadyExists = 
        db.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;

    if(itsAlreadyExists) return console.log('fallo en workout.js');

    db.workouts.push(newWorkout);
    saveInDB(db);
    return newWorkout;
}


module.exports = {getAllWorkouts , createNewWorkout}