const { v4: uuid } = require('uuid');
const Workouts = require('../database/workout.js')

//el servicio crea una funcion para llamar al modelo de datos de la DB para el controller
const getAllWorkouts = () => {
    const allWorkouts = Workouts.getAllWorkouts();
    return allWorkouts;
};

const getWorkoutById = (workoutId) => {
    const workoutDb = Workouts.getWorkoutById(workoutId);
    return workoutDb
};

const createWorkout = (newWorkout) => {
    const addingWorkout = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleDateString(),
        updatedAt: new Date().toLocaleDateString()
    }

    const fullWorkout = Workouts.createNewWorkout(addingWorkout);

};

const updateWorkout = (body , workoutId) => {
    const updatedWorkout = Workouts.updateWorkout(body, workoutId);
    return updatedWorkout;
};

const deleteWorkout = (workoutId) => {
    Workouts.deleteWorkout(workoutId);
};


module.exports = {
    getAllWorkouts,
    getWorkoutById,
    createWorkout,
    updateWorkout,
    deleteWorkout
};