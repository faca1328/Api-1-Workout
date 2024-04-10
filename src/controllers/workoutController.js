const workoutServices = require('../services/workoutServices');

//ESTO ES LO QUE SE VA A VER EN LA PAGINA

//El controller crea la logica de los datos que recive del servicio.
const getAllWorkouts = (req, res) => {
    const allWorkouts = workoutServices.getAllWorkouts();
    res.send({ status: 404, data: allWorkouts });
};

const getWorkoutById = (req, res) => {
    const {params: {workoutId} } = req;
    
    if(!workoutId) return res.send({ status: 404, data: 'error por id' });

    const workout = workoutServices.getWorkoutById(workoutId);
    res.status(200).send({data: workout});
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
    const {body , params: {workoutId}} = req;
    if(!workoutId) return res.send({ status: 404, data: 'error al actualizar' });

    const updatedWorkout = workoutServices.updateWorkout(body, workoutId);
    res.status(200).send(updatedWorkout);
};

const deleteWorkout = (req, res) => {
    const {params: {workoutId} } = req;
    
    if(!workoutId) return res.send({ status: 404, data: 'error por id al borrar' });

    workoutServices.deleteWorkout(workoutId);
    res.status(204).send(workoutId);
};


module.exports = {
    getAllWorkouts,
    getWorkoutById,
    createWorkout,
    updateWorkout,
    deleteWorkout
};