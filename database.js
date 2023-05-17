// const { workouts, equipment } = require("./AgileProject/database");

let Database = {
    equipment: ["dumbbell", "swiss ball"],
    exercises: [
        {
          "id": 1,
          "exercise": "Barbell Squats",
          "muscleGroups": ["quads", "hamstrings", "glutes"],
          "equipment": ["none", "barbell"],
          "description": "Stand with feet hip-width apart, lower your body down as if sitting in a chair, keeping your knees behind your toes, and then stand back up.",
          "video": "https://www.youtube.com/embed/-bJIpOq-LWk"
        },
        {
          "id": 2,
          "exercise": "Push-ups",
          "muscleGroups": ["chest", "triceps", "shoulders"],
          "equipment": ["none", "push-up bars"],
          "description": "Start in a plank position with hands shoulder-width apart, lower your body towards the ground, keeping your elbows close to your sides, then push back up.",
          "video": "https://www.youtube.com/embed/_l3ySVKYVJ8"
        },
        {
          "id": 3,
          "exercise": "Lunges",
          "muscleGroups": ["quads", "glutes", "hamstrings"],
          "equipment": ["none", "dumbbells"],
          "description": "Step forward with one foot, lowering your back knee towards the ground, keeping your front knee behind your toes, and then step back up.",
          "video": "https://www.youtube.com/embed/L8fvypPrzzs"
        },
        {
          "id": 4,
          "exercise": "DB Deadlifts",
          "muscleGroups": ["hamstrings", "glutes", "lower back"],
          "equipment": ["barbell", "dumbbells"],
          "description": "Stand with feet hip-width apart, bend at the hips, and lower your torso down towards the ground, keeping your back straight, then stand back up.",
          "video": "https://www.youtube.com/embed/JNpUNRPQkAk"
        },
        {
          "id": 5,
          "exercise": "Pull-ups",
          "muscleGroups": ["back", "biceps"],
          "equipment": ["pull-up bar"],
          "description": "Hang from a bar with hands slightly wider than shoulder-width apart, pull your body up towards the bar, keeping your elbows close to your sides, then lower back down.",
          "video": "https://www.youtube.com/embed/9yVGh3XbJ34"
        },
        {
          "id": 6,
          "exercise": "Plank",
          "muscleGroups": ["core"],
          "equipment": ["none"],
          "description": "Start in a push-up position, but with your forearms on the ground, hold your body in a straight line from head to heels.",
          "video": "https://www.youtube.com/embed/mwlp75MS6Rg"
        },
        {
          "id": 7,
          "exercise": "Barbell Bench press",
          "muscleGroups": ["chest", "triceps", "shoulders"],
          "equipment": ["barbell", "dumbbells", "bench"],
          "description": "Lie on a bench with feet flat on the ground, lift a barbell off the rack and lower it to your chest, keeping your elbows close to your sides, then push back up.",
          "video": "https://www.youtube.com/embed/CayG6UYqL8g"
        },
        {
          "id": 8,
          "exercise": "Bicep curls",
          "muscleGroups": ["biceps"],
          "equipment": ["dumbbells"],
          "description": "Stand with feet hip-width apart, hold dumbbells at your sides, curl the weights up towards your shoulders, keeping your elbows close to your sides, then lower back down.",
          "video": "https://www.youtube.com/embed/YRql7vwS_B0"
        },
        {
          "id": 9,
          "exercise": "Leg press",
          "muscleGroups": ["quads", "glutes", "hamstrings"],
          "equipment": ["leg press machine"],
          "description": "Sit in a leg press machine, push the weight away from you with your legs, then release back towards you.",
          "video": "https://www.youtube.com/embed/Am0ZpGwWTFQ"
        },
        {
          "id": 10,
          "exercise": "Incline DB bench press",
          "muscleGroups": ["chest"],
          "equipment": ["barbell", "decline bench"],
          "description": "Lie on a incline bench with feet elevated, hold DBs with hands slightly wider than shoulder-width apart, lower the DBs towards your chest, then push them back up.",
          "video": "https://www.youtube.com/embed/6tW4LUaOxlE"
        },
        {
          "id": 11,
          "exercise": "Lat pulldowns",
          "muscleGroups": ["back", "biceps"],
          "equipment": ["cable machine"],
          "description": "Sit at a lat pulldown machine, grab the bar with hands slightly wider than shoulder-width apart, pull the bar down towards your chest, keeping your elbows close to your sides, then release back up.",
          "video": "https://www.youtube.com/embed/OebX_D6Byuc"
        },
        {
          "id": 12,
          "exercise": "Chest flyes",
          "muscleGroups": ["chest"],
          "equipment": ["dumbbells", "fly machine"],
          "description": "Lie on a bench with feet flat on the ground, hold dumbbells with arms extended above your chest, lower the weights out to the sides, keeping a slight bend in your elbows, then bring them back up.",
          "video": "https://www.youtube.com/embed/8feKOJ5LQag"
        },
        {
          "id": 13,
          "exercise": "Russian twists",
          "muscleGroups": ["core", "obliques"],
          "equipment": ["medicine ball"],
          "description": "Sit on the ground with your feet lifted off the ground, hold a medicine ball in your hands, twist your torso to one side, then twist to the other side.",
          "video": "https://www.youtube.com/embed/Tau0hsW8iR0"
        },
        {
          "id": 14,
          "exercise": "Burpees",
          "muscleGroups": ["full body"],
          "equipment": ["none"],
          "description": "Start in a standing position, lower down into a squat, jump your feet back into a plank position, jump back up into a squat, then jump up with arms extended overhead.",
          "video": "https://www.youtube.com/embed/B45id1P3_dg"
        },
        {
          "id": 15,
          "exercise": "Calf raises",
          "muscleGroups": ["calves"],
          "equipment": ["none", "dumbbells", "calf raise machine"],
          "description": "Stand with your feet hip-width apart, lift up onto the balls of your feet, then lower back down.",
          "video": "https://www.youtube.com/embed/UV8gOrHmuKc"
        },
        {
          "id": 16,
          "exercise": "Tricep dips",
          "muscleGroups": ["triceps"],
          "equipment": ["dip bars"],
          "description": "Sit on dip bars, lift your body off the bars, lower your body down towards the ground, keeping your elbows close to your sides, then push back up.",
          "video": "https://www.youtube.com/embed/WVeZDBhZwLA"
        },
        {
          "id": 17,
          "exercise": "Seated rows",
          "muscleGroups": ["back"],
          "equipment": ["cable machine"],
          "description": "Sit at a cable machine with your feet against the platform, grab the handles with arms extended in front of you, pull the handles towards your chest, keeping your elbows close to your sides, then release back out.",
          "video": "https://www.youtube.com/embed/ePPKiOO_95c"
        },
        {
          "id": 18,
          "exercise": "Side plank",
          "muscleGroups": ["core", "obliques"],
          "equipment": ["none"],
          "description": "Lie on your side with one forearm on the ground, lift your hips off the ground so your body forms a straight line, hold for a specified time, then switch sides.",
          "video": "https://www.youtube.com/embed/_R389Jk0tIo"
        },
        {
          "id": 19,
          "exercise": "DB Bulgarian split squats",
          "muscleGroups": ["quads", "glutes"],
          "equipment": ["dumbbells", "bench"],
          "description": "Stand facing away from a bench, place one foot on the bench behind you, lower your body down with the other foot, then push back up.",
          "video": "https://www.youtube.com/embed/BkRMbSKfQx0"
        },
        {
          "id": 20,
          "exercise": "Box jumps",
          "muscleGroups": ["quads", "glutes"],
          "equipment": ['box', 'bench'],
          "description": "Stand in front of a box or bench, jump onto the box with both feet, then jump back down.",
          "video": "https://www.youtube.com/embed/52r_Ul5k03g"
        },
        {
          "id": 21,
          "exercise": "DB Chest Press",
          "muscleGroups": ["pecs", "triceps"],
          "equipment": ["DBs", "Bench"],
          "description": "Lie on your back on a bench or mat with a dumbbell in each hand at chest level. Press the weights up until your arms are straight, then lower them back down to chest level.",
          "video": "https://www.youtube.com/embed/I2zysDiUjCw"
        },
        {
          "id": 22,
          "exercise": "Seated DB Shoulder Press",
          "muscleGroups": ["shoulders", "triceps"],
          "equipment": ["DBs", "Bench"],
          "description": "Sit on a bench with a dumbbell in each hand at shoulder level. Press the weights straight up until your arms are fully extended, then lower them back down to shoulder level",
          "video": "https://www.youtube.com/embed/SSXS4Z8OkCg"
        },
        {
          "id": 23,
          "exercise": "SA DB Row",
          "muscleGroups": ["Lats", "Biceps"],
          "equipment": ["DBs", "Bench"],
          "description": "Hold a dumbbell in one hand and place the opposite knee and hand on a bench. Pull the weight up towards your chest, then lower it back down",
          "video": "https://www.youtube.com/embed/8SO71gogt5M"
        }
      ],
    workouts : [
        {
            'id' : 1,
            'name': 'Beginner Upper Body Workout',
            'exercise_list': ['DB Chest Press', 'SA DB Row', 'Seated DB Shoulder Press', 'Tricep dips', 'Bicep curls']
        },
        {
            'id' : 2,
            'name' : 'Intermediate Upper Body Workout',
            'exercise_list': ['Barbell Bench press', 'Seated DB Shoulder Press', 'Pull-ups', 'SA DB Row', 'Bicep curls', 'Tricep dips']
        },
        {
            'id' : 3,
            'name' : 'Lower Body 1',
            'exercise_list': ['Squats', 'DB Deadlifts', 'Lunges', 'Calf raises', 'Leg press']
        },
        {
            'id' : 4,
            'name' : 'Core 1',
            'exercise_list': ['Side plank', 'Russian twists', 'Plank']
        },
        {
            'id' : 5,
            'name' : 'Beginner 1',
            'exercise_list': ['Burpees', 'Lunges', "Barbell Squats", 'Push-ups',  'Calf raises']
        },
        {
            'id' : 6,
            'name' : 'Intermediate 1',
            'exercise_list': ['Push-ups', 'DB Deadlifts', 'Pull-ups', 'Barbell Bench press', 'Bicep curls']
        },
    ]
    }  
     
 
 module.exports = Database;