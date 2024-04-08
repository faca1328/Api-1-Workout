const workoutServices = require('../services/workoutServices');

//El controller crea la logica de los datos que recive del servicio.
const getAllWorkouts = (req, res) => {
    const allWorkouts = workoutServices.getAllWorkouts();
    res.send({ status: 404, data: allWorkouts });
};

const getWorkoutById = (req, res) => {
    const workoutId = workoutServices.getWorkoutById(req.params.id);
};


//podemos hacer mas paramertos de validacion con una servicio de terceros ej: "express.validation" >> los datos se Validan en el Back y en el FrontEnd <<
const createWorkout = (req, res) => {
    const { body } = req;
    if (
        !body.name ||
        !body.mode ||
        !body.equipment ||
        !body.exercises ||
        !body.trainerTips
    ) {
        res.status(400).send(console.log('error, faltan datos'));
    }

    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips
    }

    const addNewWorkout = workoutServices.createWorkout(newWorkout);

    res.status(200).send(addNewWorkout);
};

const updateWorkout = (req, res) => {
    const updateWorkout = workoutServices.updateWorkout(req.params.id);
};

const deleteWorkout = (req, res) => {
    workoutServices.deleteWorkout(req.params.id);
};


module.exports = {
    getAllWorkouts,
    getWorkoutById,
    createWorkout,
    updateWorkout,
    deleteWorkout
};