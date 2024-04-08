const express = require('express');
const router = express();
const workoutControllers = require('../../controllers/workoutController.js')


//Obtenemos todos los datos y logicas de ejecucion del controller
router.get('/', workoutControllers.getAllWorkouts);

router.get('/:workoutId', workoutControllers.getWorkoutById)

    .post('/', workoutControllers.createWorkout)

    .patch('/:workoutId', workoutControllers.updateWorkout)

    .delete('/:workoutId', workoutControllers.deleteWorkout);

module.exports = router;