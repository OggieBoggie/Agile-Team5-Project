let Database = {
    'equipment': ["dumbbell", "swiss ball"],
     'workouts': [
             {
                 'workout': 'Overhead Presses',
                 'muscleGroups' : ["shoulder", 'back', 'core'],
                 'equipment' : 'dumbbells',
                 'description' : 'standing straight, lift dumbbells above head'
             },
             {
                 'workout': 'deadlifts',
                 'muscleGroups' : ["legs", 'back'],
                 'equipment' : 'barbell',
                 'description' : 'pick up barbell'
             },
             {
                 'workout': 'plank',
                 'muscleGroups' : ['core'],
                 'equipment' : 'none',
                 'description' : 'rest on your toes and elbows with a straight back for 1 minute'
             }
         ]
     }  
     
 
 module.exports = Database;