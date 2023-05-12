// const { workouts, equipment } = require("./AgileProject/database");

let Database = {
    equipment: ["dumbbell", "swiss ball"],
    exercises: [
        {
          "id": 1,
          "exercise": "Squats",
          "muscleGroups": ["quads", "hamstrings", "glutes"],
          "equipment": ["none", "barbell"],
          "description": "Stand with feet hip-width apart, lower your body down as if sitting in a chair, keeping your knees behind your toes, and then stand back up."
        },
        {
          "id": 2,
          "exercise": "Push-ups",
          "muscleGroups": ["chest", "triceps", "shoulders"],
          "equipment": ["none", "push-up bars"],
          "description": "Start in a plank position with hands shoulder-width apart, lower your body towards the ground, keeping your elbows close to your sides, then push back up."
        },
        {
          "id": 3,
          "exercise": "Lunges",
          "muscleGroups": ["quads", "glutes", "hamstrings"],
          "equipment": ["none", "dumbbells"],
          "description": "Step forward with one foot, lowering your back knee towards the ground, keeping your front knee behind your toes, and then step back up."
        },
        {
          "id": 4,
          "exercise": "Deadlifts",
          "muscleGroups": ["hamstrings", "glutes", "lower back"],
          "equipment": ["barbell", "dumbbells"],
          "description": "Stand with feet hip-width apart, bend at the hips, and lower your torso down towards the ground, keeping your back straight, then stand back up."
        },
        {
          "id": 5,
          "exercise": "Pull-ups",
          "muscleGroups": ["back", "biceps"],
          "equipment": ["pull-up bar"],
          "description": "Hang from a bar with hands slightly wider than shoulder-width apart, pull your body up towards the bar, keeping your elbows close to your sides, then lower back down."
        },
        {
          "id": 6,
          "exercise": "Plank",
          "muscleGroups": ["core"],
          "equipment": ["none"],
          "description": "Start in a push-up position, but with your forearms on the ground, hold your body in a straight line from head to heels."
        },
        {
          "id": 7,
          "exercise": "Bench press",
          "muscleGroups": ["chest", "triceps", "shoulders"],
          "equipment": ["barbell", "dumbbells", "bench"],
          "description": "Lie on a bench with feet flat on the ground, lift a barbell off the rack and lower it to your chest, keeping your elbows close to your sides, then push back up."
        },
        {
          "id": 8,
          "exercise": "Bicep curls",
          "muscleGroups": ["biceps"],
          "equipment": ["dumbbells"],
          "description": "Stand with feet hip-width apart, hold dumbbells at your sides, curl the weights up towards your shoulders, keeping your elbows close to your sides, then lower back down."
        },
        {
          "id": 9,
          "exercise": "Leg press",
          "muscleGroups": ["quads", "glutes", "hamstrings"],
          "equipment": ["leg press machine"],
          "description": "Sit in a leg press machine, push the weight away from you with your legs, then release back towards you."
        },
        {
          "id": 10,
          "exercise": "Decline bench press",
          "muscleGroups": ["chest"],
          "equipment": ["barbell", "decline bench"],
          "description": "Lie on a decline bench with feet elevated, hold a barbell with hands slightly wider than shoulder-width apart, lower the barbell towards your chest, then push it back up."
        },
        {
          "id": 11,
          "exercise": "Lat pulldowns",
          "muscleGroups": ["back", "biceps"],
          "equipment": ["cable machine"],
          "description": "Sit at a lat pulldown machine, grab the bar with hands slightly wider than shoulder-width apart, pull the bar down towards your chest, keeping your elbows close to your sides, then release back up."
        },
        {
          "id": 12,
          "exercise": "Chest flyes",
          "muscleGroups": ["chest"],
          "equipment": ["dumbbells", "fly machine"],
          "description": "Lie on a bench with feet flat on the ground, hold dumbbells with arms extended above your chest, lower the weights out to the sides, keeping a slight bend in your elbows, then bring them back up."
        },
        {
          "id": 13,
          "exercise": "Russian twists",
          "muscleGroups": ["core", "obliques"],
          "equipment": ["medicine ball"],
          "description": "Sit on the ground with your feet lifted off the ground, hold a medicine ball in your hands, twist your torso to one side, then twist to the other side."
        },
        {
          "id": 14,
          "exercise": "Burpees",
          "muscleGroups": ["full body"],
          "equipment": ["none"],
          "description": "Start in a standing position, lower down into a squat, jump your feet back into a plank position, jump back up into a squat, then jump up with arms extended overhead."
        },
        {
          "id": 15,
          "exercise": "Calf raises",
          "muscleGroups": ["calves"],
          "equipment": ["none", "dumbbells", "calf raise machine"],
          "description": "Stand with your feet hip-width apart, lift up onto the balls of your feet, then lower back down."
        },
        {
          "id": 16,
          "exercise": "Tricep dips",
          "muscleGroups": ["triceps"],
          "equipment": ["dip bars"],
          "description": "Sit on dip bars, lift your body off the bars, lower your body down towards the ground, keeping your elbows close to your sides, then push back up."
        },
        {
          "id": 17,
          "exercise": "Seated rows",
          "muscleGroups": ["back"],
          "equipment": ["cable machine"],
          "description": "Sit at a cable machine with your feet against the platform, grab the handles with arms extended in front of you, pull the handles towards your chest, keeping your elbows close to your sides, then release back out."
        },
        {
          "id": 18,
          "exercise": "Side plank",
          "muscleGroups": ["core", "obliques"],
          "equipment": ["none"],
          "description": "Lie on your side with one forearm on the ground, lift your hips off the ground so your body forms a straight line, hold for a specified time, then switch sides."
        },
        {
          "id": 19,
          "exercise": "Bulgarian split squats",
          "muscleGroups": ["quads", "glutes"],
          "equipment": ["dumbbells", "bench"],
          "description": "Stand facing away from a bench, place one foot on the bench behind you, lower your body down with the other foot, then push back up."
        },
        {
          "id": 20,
          "exercise": "Box jumps",
          "muscleGroups": ["quads", "glutes"],
          "equipment": ['box', 'bench'],
          "description": "Stand in front of a box or bench, jump onto the box with both feet, then jump back down."
        }
      ],
    workouts : [
        {
            'id' : 1,
            'name': 'Upper Body 1',
            'exercise_list' : ['Bench press', 'Seated rows', 'Tricep dips', 'Plank', 'Pull-ups' ]
        },
        {
            'id' : 2,
            'name' : 'Upper Body 2',
            'exercise_list' : ['Bicep curls', 'Tricep dips', 'Chest flyes', 'Decline bench press', 'Push-ups']
        },
        {
            'id' : 3,
            'name' : 'Lower Body 1',
            'exercise_list' : ['Squats', 'Deadlifts', 'Lunges', 'Calf raises', 'Leg press' ]
        },
        {
            'id' : 4,
            'name' : 'Core 1',
            'exercise_list' : [ 'Side plank', 'Russian twists', 'Plank']
        },
        {
            'id' : 5,
            'name' : 'Beginner 1',
            'exercise_list' : ['Burpees', 'Lunges', "Squats", 'Push-ups',  'Calf raises']
        },
        {
            'id' : 6,
            'name' : 'Intermediate 1',
            'exercise_list' : ['Push-ups', 'Deadlifts', 'Pull-ups', 'Bench press', 'Bicep curls']
        },
    ]
    }  
     
 
 module.exports = Database;