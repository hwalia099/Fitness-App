[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/Rx1afNgR)


The Fitness Exercises App is a comprehensive fitness guide that aims to provide users with a wide range of exercises to help them achieve their fitness goals. This application is built using modern React 18 and integrates with two separate APIs to deliver a seamless and interactive user experience.

The app allows users to choose from various exercise categories and specific muscle groups, offering a personalized workout routine. With access to over a thousand exercises, users can browse through practical examples, detailed descriptions, and related YouTube videos for each exercise. The app also features a pagination system to easily navigate through the vast exercise library.

One of the key features of the Fitness Exercises App is its ability to pull related videos from YouTube. This not only provides users with a visual guide on how to perform each exercise but also adds an element of interactivity to the app. Additionally, the app can display similar exercises, allowing users to diversify their workout routine and target different muscle groups.

Beyond exercises, the app also includes features for users to create a personal profile, manage their workout schedule, track their progress, and access a food and nutrition guide. The profile feature allows users to have a personalized experience, while the workout schedule helps them plan their exercises. The progress tracker enables users to monitor their fitness journey, and the food and nutrition guide assists them in maintaining a healthy diet.

The Fitness Exercises App is not just a fitness guide; it's a complete fitness companion that caters to both beginners and fitness enthusiasts alike. Whether you're looking to start your fitness journey or spice up your existing workout routine, the Fitness Exercises App has got you covered.

# Team Members
1. Raksha Israni
2. Himanshu Walia
3. Sunayana Shivani
4. Vignesh Perumal Samy


# Project Features
1. The application will allow user to sign in and sign up to track his/her fitness journey.
2. The application tracks progress of the user.
3. The application will allow the user to create a workout schedule according to his/her targets.
4. The application will allow user to develop mindful eating habits to achieve the desired fitness levels.


# User stories 

1. Create the signin/signup interface for the users to get onboarded to the application. 
2. Design the database architecture including the tables/collections etc to support the application features.
3. Develop the APIs to display user details such as Name, Phone, Email etc for the user tab.
4. Develop the screen for the new user to enter his basic details such as height, weight, age, etc and determine BMI based on these parameters.
5. Create the track progress menu, with a calendar and give user the option to enter all the values he want to track
6. Create the food and nutrition menu and develop associated actions 
7. Develop the dynamic graphs to be plotted
8. Develop dynamic graph for adhoc date range provided
9. Test sign/signup feature with all the options such as email login, phone login, gmail login, account exists for phone, email
10. Test profile set up for new user
11. Test profile update option to edit the target weight etc. This should update a few parameters changes example target BMI
12. Test various graphs plotted against each user
13. Test daily updation for the calories intake, burn etc. Dates later than today should be disabled. Past data can be edited.
14. Develop the workout schedule feature
15. Develop muscle based exercises display feature
16. Test the relevant exercises features page 
17. Test the schedule creation page
18. test the food and nutrition page to verify associated actions
19. Deploy the application to make it available on internet.


# Project Milestones and Team Assignments

## Milestone 1: Project Setup 

1. Setup the project to define the folder structure, adding dependencies and tech stack setup to start the development.
2. Create the signin/signup interface for the users to get onboarded to the application. 
3. Design the database architecture including the tables/collections etc to support the application features.
4. Develop the APIs to display user details such as Name, Phone, Email etc for the user tab.
5. Develop the screen for the new user to enter his basic details such as height, weight, age, etc and determine BMI based on these parameters.
6. Test sign/signup feature with all the options such as email login, phone login, gmail login, account exists for phone, email
7. Test profile set up for new user
8. Test profile update option to edit the target weight etc. This should update a few parameters changes example target BMI

## Milestone 2: Exercises and Workout Schedule development

9. Develop the workout schedule feature
10. Develop muscle based exercises display feature
11. Test the muscle based exercises display features page 
12. Test the workout schedule feature page

## Milestone 3: Food and Nutrition
13. Create the food and nutrition menu and develop associated actions 
14. Test daily updation for the calories intake, burn etc. Dates later than today should be disabled. Past data can be edited.
15. Test the food and nutrition page to verify associated actions

## Milestone 4: Progress Tracker

16. Create the track progress menu, with a calendar and give user the option to enter all the values he want to track
17. Develop the dynamic graphs to be plotted
18. Develop dynamic graph for adhoc date range provided
19. Test various graphs plotted against each user


## Milestone 5: Deployment
20. Deploy the application to make it available on internet.


# REST API resources :

1. **Users Resource**:

   - `GET /users`: Retrieve a list of all users.
   - `GET   `: Retrieve details of a specific user.
   - `POST /users`: Create a new user.
   - `PUT /users/{userId}`: Update an existing user.
   - `DELETE /users/{userId}`: Delete a user.

2. **Exercises Resource**:

   - `GET /exercises`: Retrieve a list of all exercises.
   - `GET /exercises/{exerciseId}`: Retrieve details of a specific exercise.
   - `POST /exercises`: Create a new exercise.
   - `PUT /exercises/{exerciseId}`: Update an existing exercise.
   - `DELETE /exercises/{exerciseId}`: Delete an exercise.

3. **Categories Resource**:

   - `GET /categories`: Retrieve a list of all categories.
   - `GET /categories/{categoryId}`: Retrieve details of a specific category.
   - `POST /categories`: Create a new category.
   - `PUT /categories/{categoryId}`: Update an existing category.
   - `DELETE /categories/{categoryId}`: Delete a category.

4. **Videos Resource**:
   - `GET /videos`: Retrieve a list of all videos.
   - `GET /videos/{videoId}`: Retrieve details of a specific video.
   - `POST /videos`: Create a new video.
   - `PUT /videos/{videoId}`: Update an existing video.
   - `DELETE /videos/{videoId}`: Delete a video.