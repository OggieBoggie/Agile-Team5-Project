// const { workouts, equipment } = require("./AgileProject/database");

let Database = {
    equipment: ["dumbbell", "swiss ball"],
    exercises: [
             {      
                id : 1,
                 exercise: 'Overhead Presses',
                 muscleGroups : ["shoulder", 'back', 'core'],
                 equipment : ['dumbbells'],
                 description : 'standing straight, lift dumbbells above head'
             },
             {
                id : 2,
                 exercise: 'Deadlift',
                 muscleGroups : ["legs", 'back'],
                 equipment : ['barbell'],
                 description : 'pick up barbell'
             },
             {
                id : 3,
                 exercise: 'Plank',
                 muscleGroups : ['core'],
                 equipment : [],
                 description : 'rest on your toes and elbows with a straight back for 1 minute'
             },
             {
                id : 4,
                exercise : 'Chest Press',
                muscleGroups : ['arms', 'shoulders', 'chest'],
                equipment : ['barbell', 'dumbbell'],
                description : ''
             },
             {
                id : 5,
                exercise : 'Row Machine',
                muscleGroups : ['back', 'arms'],
                equipment : ['rowing machine'],
                description : ''
             },
             {
                id : 6,
                exercise: 'Cable Face Pulls',
                muscleGroups : ['shoulders', 'chest' ],
                equipment : ['cable machine', 'resistance bands'],
                description : ''
            },
            {
                id : 7,
                exercise: 'Triceps Extension',
                muscleGroups : ['arms', 'back', 'chest'],
                equipment : ['cable machine'],
                description : ''
            },
            {
                id : 8, 
                exercise: 'Dead Bugs', 
                muscleGroups : ['core', 'back'],
                equipment : [],
                description : ''
            },
            {
                id : 9,
                exercise: 'Squat',
                muscleGroups: ['legs'],
                equipment: [],
                description: ''
            },
            {
                id : 10,
                exercise: 'Lunge',
                muscleGroups : ['legs'],
                equipment : [],
                description : ''
            },
            {
                id : 11,
                exercise: 'Incline Run',
                muscleGroups: ['legs', 'cardio'],
                equipment : [],
                description : ''
            },

             
         ],
    workouts : [
        {
            'id' : 1,
            'name': 'Upper Body',
            'exercise_list' : ['Chest Press', 'Row Machine', 'Cable Face Pulls', 'Triceps Extension', 'Dead Bugs']
        },
        {
            'id' : 2,
            'name' : 'Lower Body',
            'exercise_list' : ['Squat', 'Deadlift', 'Lunge', 'Incline Run']
        }
    ]
    }  
     
 
 module.exports = Database;