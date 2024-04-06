const express = require('express');
const router = express();
const workoutControllers = require('../../controllers/workoutController.js')



router.get('/', workoutControllers.getAllWorkouts);

router.get('/:workoutId', workoutControllers.getWorkoutById)

    .post('/:workoutId', workoutControllers.createWorkout)

    .patch('/:workoutId', workoutControllers.updateWorkout)

    .delete('/:workoutId', workoutControllers.deleteWorkout);

module.exports = router;