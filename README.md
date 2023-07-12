[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/Rx1afNgR)

# FitTrack - Fitness Exercises App

## Project Description

The Fitness Exercises App is a comprehensive fitness guide that aims to provide users with a wide range of exercises to help them achieve their fitness goals. This application is built using modern React 18 and integrates with two separate APIs to deliver a seamless and interactive user experience.

The app allows users to choose from various exercise categories and specific muscle groups, offering a personalized workout routine. With access to over a thousand exercises, users can browse through practical examples, detailed descriptions, and related YouTube videos for each exercise. The app also features a pagination system to easily navigate through the vast exercise library.

One of the key features of the Fitness Exercises App is its ability to pull related videos from YouTube. This not only provides users with a visual guide on how to perform each exercise but also adds an element of interactivity to the app. Additionally, the app can display similar exercises, allowing users to diversify their workout routine and target different muscle groups.

Beyond exercises, the app also includes features for users to create a personal profile, manage their workout schedule, track their progress, and access a food and nutrition guide. The profile feature allows users to have a personalized experience, while the workout schedule helps them plan their exercises. The progress tracker enables users to monitor their fitness journey, and the food and nutrition guide assists them in maintaining a healthy diet.

The Fitness Exercises App is not just a fitness guide; it's a complete fitness companion that caters to both beginners and fitness enthusiasts alike. Whether you're looking to start your fitness journey or spice up your existing workout routine, the Fitness Exercises App has got you covered.

# Team Members

1. Raksha Israni
2. Himanshu Walia
3. Sunayana Shivanagi
4. Vignesh Perumal Samy

## Project Features

1. **User Authentication**: The application supports user sign in and sign up, allowing tracking of personal fitness journeys.
2. **Progress Tracking**: FitTrack monitors and records the daily progress of the user.
3. **Workout Schedule**: Users can design a workout schedule tailored to their individual targets.
4. **Nutrition Guidance**: The application encourages the development of mindful eating habits to achieve and maintain desired fitness levels.

## User Stories

**1. User Authentication**

- As a user, I want to sign in/sign up, so that I can get onboarded to the application.

**2. Database Design**

- As a developer, I want to design the database architecture, including tables/collections, to support the application features.

**3. User API Development**

- As a developer, I want to create APIs to display user details such as Name, Phone, Email, etc., for the user tab.

**4. User Profile Development**

- As a user, I want to enter my basic details such as height, weight, age, etc., and determine my BMI based on these parameters.

**5. Progress Tracking**

- As a user, I want to be able to enter all the values I want to track in a calendar-based progress tracking menu.

**6. Nutrition Menu**

- As a user, I want a food and nutrition menu with associated actions to help me manage my dietary intake.

**7. Dynamic Graphs**

- As a user, I want to see dynamic graphs that illustrate my progress.

**8. Ad Hoc Reporting**

- As a user, I want to be able to generate dynamic graphs for an ad-hoc date range.

**9. User Authentication Testing**

- As a developer, I want to verify the sign in/sign up feature with all the options such as email login, phone login, Gmail login, and check if account exists for phone, email.

**10. User Profile Testing**

- As a developer, I want to verify the profile setup for a new user and the profile update options to edit target weight etc. This should reflect a few parameter changes, for example, target BMI.

**11. Graph Testing**

- As a developer, I want to verify the various graphs plotted against each user.

**12. Data Entry Testing**

- As a developer, I want to check the daily update mechanism for the calories intake, burn etc. Dates later than today should be disabled, and past data should be editable.

**13. Workout Schedule Feature**

- As a developer, I want to create a feature for users to design and manage their workout schedule.

**14. Exercise Display Feature**

- As a developer, I want to display exercises based on targeted muscle groups.

**15. Exercise Features Testing**

- As a developer, I want to validate the relevant exercises features page.

**16. Schedule Creation Testing**

- As a developer, I want to verify the schedule creation page.

**17. Food and Nutrition Page Testing**

- As a developer, I want to verify the food and nutrition page and associated actions.

### :chart: Domain Model

![Domain Model for FitTrack](/assets/DomainDrivenDesignn.png)

# Project Milestones and Team Assignments

## Milestone 1: Project Setup

1. Setup the project to define the folder structure, adding dependencies and tech stack setup to start the development. (Assigned to: Sunayana)
2. Create the signin/signup interface for the users to get onboarded to the application. (Assigned to: Vignesh)
3. Design the database architecture including the tables/collections etc to support the application features. (Assigned to: Himanshu)
4. Develop the APIs to display user details such as Name, Phone, Email etc for the user tab. (Assigned to: Raksha)
5. Develop the screen for the new user to enter his basic details such as height, weight, age, etc and determine BMI based on these parameters. (Assigned to: Sunayana)
6. Test sign/signup feature with all the options such as email login, phone login, gmail login, account exists for phone, email(Assigned to: Vignesh)
7. Test profile set up for new user (Assigned to: Himanshu)
8. Test profile update option to edit the target weight etc. This should update a few parameters changes example target BMI (Assigned to: Raksha)

## Milestone 2: Exercises and Workout Schedule development

9. Develop the workout schedule feature (Assigned to: Sunayana)
10. Develop muscle based exercises display feature (Assigned to: Vignesh)
11. Test the muscle based exercises display features page (Assigned to: Himanshu)
12. Test the workout schedule feature page (Assigned to: Raksha)

## Milestone 3: Food and Nutrition

13. Create the food and nutrition menu and develop associated actions (Assigned to: Sunayana)
14. Test daily updation for the calories intake, burn etc. Dates later than today should be disabled. Past data can be edited. (Assigned to: Vignesh)
15. Test the food and nutrition page to verify associated actions (Assigned to: Himanshu)

## Milestone 4: Progress Tracker

16. Create the track progress menu, with a calendar and give user the option to enter all the values he want to track (Assigned to: Raksha)
17. Develop the dynamic graphs to be plotted (Assigned to: Sunayana)
18. Develop dynamic graph for adhoc date range provided (Assigned to: Vignesh)
19. Test various graphs plotted against each user (Assigned to: Himanshu)

## Milestone 5: Deployment

20. Deploy the application to make it available on internet. (Assigned to: Raksha)

# Domain-Driven Design (DDD) object model

- **User**: This is the individual who will be interacting with the FitTrack application. Each user has properties like UserID, Name, Email, Password, Height, Weight, Age, Gender, FitnessGoal, and BMI.

- **Profile**: This entity represents the user's profile in the system with attributes like ProfileID, UserID, Height, Weight, Age, FitnessGoal, and BMI.

- **WorkoutSchedule**: This represents the workout schedules a user creates for their fitness journey. It has attributes like ScheduleID, UserID, Date, and ExerciseID.

- **Exercise**: This entity represents a single exercise in the system. Each exercise has properties like ExerciseID, Name, Description, TargetMuscleGroup, EquipmentNeeded, and VideoID.

- **Category** (also known as target muscle group): This entity represents a category or group of exercises that target the same muscle group, such as abs, legs, arms, etc.

- **ProgressRecord**: This entity represents the user's progress records in the system, with attributes like RecordID, UserID, Date, Weight, CaloriesIntake, CaloriesBurned, and WorkoutPerformed.

- **Video**: This entity represents a YouTube video that provides a demonstration or tutorial for a particular exercise. It has attributes like VideoID, ExerciseID, and URL.

- **NutritionPlan**: This represents a dietary plan that a user follows to manage their dietary intake. It has attributes like PlanID, UserID, Date, and MealID.

- **Meal**: This represents a single meal in the nutrition plan, with attributes like MealID, PlanID, FoodItemID, and PortionSize.

- **FoodItem**: This entity represents a single food item in a meal. It has attributes like FoodItemID, Name, Calories, Protein, Carbohydrates, and Fats.

- **UserGroup**: This entity represents a group of users who share common fitness goals and can collaborate or compete. It has attributes like GroupID, GroupName, and GroupGoal.

- **Workout**: This represents a single workout that a user performs as part of their schedule. It has attributes like WorkoutID, ScheduleID, Date, Duration, and CaloriesBurned.

- **ProgressReport**: This entity represents a summary of the user's progress over a certain period, with attributes like ReportID, UserID, StartDate, EndDate, WeightChange, BMIChange, CaloriesIntakeChange, and CaloriesBurnedChange.

The relationships between these entities could be defined as:

- **User-Profile**: Each user has one profile.

- **User-WorkoutSchedule**: A user can have one or many workout schedules.

- **User-ProgressRecord**: A user can have one or many progress records.

- **WorkoutSchedule-Exercise**: A workout schedule can have one or many exercises.

- **Exercise-Category**: Each exercise belongs to a category, but each category can contain multiple exercises.

- **Exercise-Video**: Each exercise can be linked to one video.

- **User-NutritionPlan**: Each user can have one or many nutrition plans.

- **NutritionPlan-Meal**: Each nutrition plan can have one or many meals.

- **Meal-FoodItem**: Each meal can contain one or many food items.

- **User-UserGroup**: A user can be part of one or many user groups.

- **WorkoutSchedule-Workout**: Each workout schedule can have one or many workouts.

- **User-ProgressReport**: Each user can have one progress report.

# REST API resources :

1. **Users Resource**:

- `GET /users`: Retrieve a list of all users.
- `GET /users/{userId}`: Retrieve details of a specific user.
- `POST /users`: Create a new user.
- `PUT /users/{userId}`: Update an existing user.
- `DELETE /users/{userId}`: Delete a user.

2. **Profiles Resource**:

- `GET /users/{userId}/profile`: Retrieve the profile of a specific user.
- `POST /users/{userId}/profile`: Create a new profile for a user.
- `PUT /users/{userId}/profile`: Update an existing user profile.
- `DELETE /users/{userId}/profile`: Delete a user's profile.

3. **WorkoutSchedules Resource**:

- `GET /users/{userId}/workoutSchedules`: Retrieve a list of all workout schedules for a specific user.
- `GET /users/{userId}/workoutSchedules/{scheduleId}`: Retrieve details of a specific workout schedule.
- `POST /users/{userId}/workoutSchedules`: Create a new workout schedule for a user.
- `PUT /users/{userId}/workoutSchedules/{scheduleId}`: Update an existing workout schedule.
- `DELETE /users/{userId}/workoutSchedules/{scheduleId}`: Delete a workout schedule.

4. **Exercises Resource**:

- `GET /exercises`: Retrieve a list of all exercises.
- `GET /exercises/{exerciseId}`: Retrieve details of a specific exercise.
- `POST /exercises`: Create a new exercise.
- `PUT /exercises/{exerciseId}`: Update an existing exercise.
- `DELETE /exercises/{exerciseId}`: Delete an exercise.

5. **Categories Resource**:

- `GET /categories`: Retrieve a list of all categories.
- `GET /categories/{categoryId}`: Retrieve details of a specific category.
- `POST /categories`: Create a new category.
- `PUT /categories/{categoryId}`: Update an existing category.
- `DELETE /categories/{categoryId}`: Delete a category.

6. **ProgressRecords Resource**:

- `GET /users/{userId}/progressRecords`: Retrieve a list of all progress records for a specific user.
- `GET /users/{userId}/progressRecords/{recordId}`: Retrieve details of a specific progress record.
- `POST /users/{userId}/progressRecords`: Create a new progress record for a user.
- `PUT /users/{userId}/progressRecords/{recordId}`: Update an existing progress record.
- `DELETE /users/{userId}/progressRecords/{recordId}`: Delete a progress record.

7. **Videos Resource**:

- `GET /videos`: Retrieve a list of all videos.
- `GET /videos/{videoId}`: Retrieve details of a specific video.
- `POST /videos`: Create a new video.
- `PUT /videos/{videoId}`: Update an existing video.
- `DELETE /videos/{videoId}`: Delete a video.

8. **NutritionPlans Resource**:

- `GET /users/{userId}/nutritionPlans`: Retrieve a list of all nutrition plans for a specific user.
- `GET /users/{userId}/nutritionPlans/{planId}`: Retrieve details of a specific nutrition plan.
- `POST /users/{userId}/nutritionPlans`: Create a new nutrition plan for a user.
- `PUT /users/{userId}/nutritionPlans/{planId}`: Update an existing nutrition plan.
- `DELETE /users/{userId}/nutritionPlans/{planId}`: Delete a nutrition plan.

9. **Meals Resource**:

- `GET /nutritionPlans/{planId}/meals`: Retrieve a list of all meals for a specific nutrition plan.
- `GET /nutritionPlans/{planId}/meals/{mealId}`: Retrieve details of a specific meal.
- `POST /nutritionPlans/{planId}/meals`: Create a new meal for a nutrition plan.
- `PUT /nutritionPlans/{planId}/meals/{mealId}`: Update an existing meal.
- `DELETE /nutritionPlans/{planId}/meals/{mealId}`: Delete a meal.

10. **FoodItems Resource**:

- `GET /meals/{mealId}/foodItems`: Retrieve a list of all food items for a specific meal.
- `GET /meals/{mealId}/foodItems/{foodItemId}`: Retrieve details of a specific food item.
- `POST /meals/{mealId}/foodItems`: Create a new food item for a meal.
- `PUT /meals/{mealId}/foodItems/{foodItemId}`: Update an existing food item.
- `DELETE /meals/{mealId}/foodItems/{foodItemId}`: Delete a food item.

11. **UserGroups Resource**:

- `GET /userGroups`: Retrieve a list of all user groups.
- `GET /userGroups/{groupId}`: Retrieve details of a specific user group.
- `POST /userGroups`: Create a new user group.
- `PUT /userGroups/{groupId}`: Update an existing user group.
- `DELETE /userGroups/{groupId}`: Delete a user group.

12. **Workouts Resource**:

- `GET /workoutSchedules/{scheduleId}/workouts`: Retrieve a list of all workouts for a specific workout schedule.
- `GET /workoutSchedules/{scheduleId}/workouts/{workoutId}`: Retrieve details of a specific workout.
- `POST /workoutSchedules/{scheduleId}/workouts`: Create a new workout for a workout schedule.
- `PUT /workoutSchedules/{scheduleId}/workouts/{workoutId}`: Update an existing workout.
- `DELETE /workoutSchedules/{scheduleId}/workouts/{workoutId}`: Delete a workout.

13. **ProgressReports Resource**:

- `GET /users/{userId}/progressReports`: Retrieve a list of all progress reports for a specific user.
- `GET /users/{userId}/progressReports/{reportId}`: Retrieve details of a specific progress report.
- `POST /users/{userId}/progressReports`: Create a new progress report for a user.
- `PUT /users/{userId}/progressReports/{reportId}`: Update an existing progress report.
- `DELETE /users/{userId}/progressReports/{reportId}`: Delete a progress report.
