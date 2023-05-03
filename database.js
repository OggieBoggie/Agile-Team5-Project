let Database = {
    equipment: ["dumbbell", "swiss ball"],
     workouts: [
             {      
                id : 1,
                 workout: 'Overhead Presses',
                 muscleGroups : ["shoulder", 'back', 'core'],
                 equipment : 'dumbbells',
                 description : 'standing straight, lift dumbbells above head'
             },
             {
                id : 2,
                 workout: 'deadlifts',
                 muscleGroups : ["legs", 'back'],
                 equipment : 'barbell',
                 description : 'pick up barbell'
             },
             {
                id : 3,
                 workout: 'plank',
                 muscleGroups : ['core'],
                 equipment : 'none',
                 description : 'rest on your toes and elbows with a straight back for 1 minute'
             }
         ]
     }  
     
 
 module.exports = Database;