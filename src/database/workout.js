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

const getWorkoutById = (workoutId) => {
    const findWorkout = db.workouts.find(workout => workout.id === workoutId);
    return findWorkout;
}

const updateWorkout = (body , workoutId) => {
    const indexForUpdate = db.workouts.findIndex(workout => workout.id === workoutId);

    if (indexForUpdate === -1) return;

    const updatedWorkout = {
        ...db.workouts[indexForUpdate],
        ...body,
        updateAt: new Date().toLocaleDateString()
    
    }

    db.workouts[indexForUpdate] = updatedWorkout;
    saveInDB(db);
    return updatedWorkout;

}

const deleteWorkout = (workoutId) => {
    const workout = db.workouts.findIndex(workout => workout.id === workoutId);
    if (workout === -1) return;

    db.workouts.splice(workout, 1)
    saveInDB(db)
    return workout
};

module.exports = {getAllWorkouts , createNewWorkout , getWorkoutById , updateWorkout , deleteWorkout}