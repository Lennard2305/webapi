// const mongoose = require('mongoose');
// const readline = require("readline");
// const express= require('express');
// const app = express();
// const port = 5005;
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let questions = "Choose an option:\n"+
// "1. Connect to MongoDB\n"+
// "2. Add movie 1\n"+
// "3. Add movie 2\n"+
// "4. Add movie 3\n"+
// "5. Delete movie by day\n"+
// "6. Delete movie by movie name\n"+
// // "6. Get event by name\n"+
// // "7. Update event by id\n"+
// // "8. Update event's fields\n"+
// // "9. Delete event by id\n"+
// // "10. Delete event by name\n"+
// "7. Exit\n"+
// "==========================\n";

// let handleOption = function(option){
//     switch(+option) {
//         case 1:
//             connect();
//             break;
//         case 2:
//             addMovie1();
//             break;
//         case 3:
//             addMovie2();
//             break;
//             case 4:
//             addMovie3();
//             break;
//         case 5:
//             deleteEventByName();
//             break;
//         case 6:
//             deleteEventByMovie();
//             break;
//         // case 5:
//         //     getEventById();
//         //     break;
//         // case 6:
//         //     getEventsByName();
//         //     break;
//         // case 7:
//         //     updateEventById();
//         //     break;
//         // case 8:
//         //     updateEventWithFields();
//         //     break;
//         // case 9:
//         //     deleteEventById();
//         //     break;
//         // case 10:
//         //     deleteEventByName();
//         //     break;
//         case 7: 
//             rl.close();
//             break;
//     }
//     setTimeout(()=>{rl.question(questions,handleOption);},1500);
// }
// rl.question(questions, handleOption);


// rl.on("close", function() {
//     console.log("\nBYE BYE !!!");
//     process.exit(0);
// });

// const eventSchema = mongoose.Schema({
//     day:{
//         type:String
//     },
//     name:{type: String, unique: true},  
//     //description: String,
//     start: {
       
//         time: String
//     },
//     end: {
     
//         time: String
//     },
//     date:{
//         type: String,
//     },
//     quantity:{
//         type: Number,
//         min:0,
//         max:1,
//     }
// });

// const Movie = mongoose.model('movies',eventSchema);

// app.get('/movies',async function(req, res)  {
//     try {
//         const movies = await Movie.find(); 
//         const formattedMovies = movies.map(movie => ({
//             Showday: movie.day,
//             'Movie date': movie.date,
//             'Movie name': movie.name,
//             'Start Time':movie.start.time,
//             'End Time':movie.end.time,
//         }));
//         res.json(formattedMovies);  
       
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// });

// app.listen(port, function(req,res)  {
//     console.log(`Server started on port ${port}`);
// });

// app.get('/book/:movieName', async function(req, res) {
//     try {
//         const { name } = req.params; 
//         const movie = await Movie.findOne({ name: name }); 
//         if (!movie) {
//             return res.status(404).json({ error: 'Movie not found' });
//         }
//         res.json({ message: 'Movie booked successfully' });
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// });

// app.get('/search/day/:day', async function(req, res) {
//     try {
//         const day = req.params.day; 
//         const movies = await Movie.find({ day: day });
//         if (movies.length === 0) {
//             return res.status(404).json({ error: 'No movies found matching the search criteria' });
//         }
//         const formattedMovies = movies.map(movie => ({
//             Showday: movie.day,
//             'Movie date': movie.date,
//             'Movie name': movie.name,
//             'Start Time':movie.start.time,
//             'End Time':movie.end.time,
//         }));
//         res.json(formattedMovies);
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// });
// app.get('/search/name/:name', async function(req, res) {
//     try {
//         const name = req.params.name; 
//         const movies = await Movie.find({name: name});
//         if (movies.length === 0) {
//             return res.status(404).json({ error: 'No movies found matching the search criteria' });
//         }
//         const formattedMovies = movies.map(movie => ({
//             Showday: movie.day,
//             'Movie date': movie.date,
//             'Movie name': movie.name,
//             'Start Time':movie.start.time,
//             'End Time':movie.end.time,
//         }));
//         res.json(formattedMovies);
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// });
// // app.get('/search/start/:start', async function(req, res) {
// //     try {
// //         const time = req.params.time; 
// //         const movies = await Movie.find({time:time});
// //         if (movies.length === 0) {
// //             return res.status(404).json({ error: 'No movies found matching the search criteria' });
// //         }
// //         const formattedMovies = movies.map(movie => ({
// //             Showday: movie.day,
// //             'Movie date': movie.date,
// //             'Movie name': movie.name,
// //             'Start Time':movie.start.time,
// //             'End Time':movie.end.time,
// //         }));
// //         res.json(formattedMovies);
// //     } catch (error) {
// //         res.status(500).send(error.message);
// //     }
// // });



// let db = {

//     async connect() {
//         try {
//             await mongoose.connect('mongodb://127.0.0.1:27017/movie');
//             console.log("Connected to Mongo DB");
//         }
//         catch (e) {
//             console.log(e.message);
//             console.log("Error connecting to Mongo DB");
//         }
//     },
//     async addMovie(day, name, start, end, date, quantity) {
//         try {
//             await Movie.create({
//                 day: day,
//                 name: name,
//                 start: {
                    
//                     time: start,
//                 },
//                 end: {
                    
//                     time: end,
//                 },
//                 date: date,
//                 quantity:quantity,
//             });
//             return `Movie name: ${name} has been added`;
//         }
//         catch (e) {
//             console.log(e.message);
//             throw new Error(`Movie name: ${name} was not added.`);
//         }
//     },
//     async deleteMovie(conditions) {
//         try {
//             let result = await Movie.findOneAndDelete(conditions);
//             if (!result) return "Unable to find a record to delete.";
//             else return "Record is deleted!";
//         }
//         catch(e) {
//             console.log(e.message);
//             throw new Error("Error deleting event");
//         }
//     }
// }
//  function connect(){
//     db.connect()
//     .then(function(response){
//         console.log(response);
//     })
//     .catch(function(error){
//         console.log(error.message);
//     });
    

// }
// // User can add movie into the system
//  function addMovie1 () {
//     db.addMovie("Monday", "Angry Pigs", "13:00", "15:00", "04/03/2023", 0)
//     .then(function(response){
//         console.log(response);
//     })
//     .catch(function(error){
//         console.log(error.message);
//     });
// }
// //User can add another movie into the system
// function addMovie2 () {
//     db.addMovie("Tuesday", "Nika", "16:00", "17:30", "05/03/2023", 0)
//     .then(function(response){
//         console.log(response);
//     })
//     .catch(function(error){
//         console.log(error.message);
//     });
// }
// function addMovie3 () {
//     db.addMovie("Monday", "WOW!", "10:00", "12:30", "04/03/2023", 0)
//     .then(function(response){
//         console.log(response);
//     })
//     .catch(function(error){
//         console.log(error.message);
//     });
// }
// // User can delete any movie by their show day
// function deleteEventByName() {
//     db.deleteMovie({day: "Monday"})
//     .then(function(response){
//         console.log(response);
//     })
//     .catch(function(error){
//         console.log(error.message);
//     });
    
    
// }
// // User can delete any movie by the movie name
// function deleteEventByMovie() {
//     db.deleteMovie({name: "Nika"})
//     .then(function(response){
//         console.log(response);
//     })
//     .catch(function(error){
//         console.log(error.message);
//     });
    
    
// }

// module.exports = {Movie,db};
// // module.exports = {
// //     day:"",
// //     name:"",
// //     start:"",
// //     end:"",
// //     date:"",
// //     quantity:0,
// //     Explain what function A does
// //  addMovie1: function() {
// //         const movieData = {
// //             day: "Monday",
// //             name: "Angry Pigs",
// //             start: "13:00",
// //             end: "15:00",
// //             date: "04/03/2023",
// //             quantity: 0 ,
// //         };
    
     
    
// //         db.addMovie(movieData)
// //             .then(response => console.log(response))
// //             .catch(error => console.log(error.message));
// //     },
// //     Explain what function B does
// //     addMovie1: function () {
// //         db.addEvent("Monday", "Angry Pigs", "13:00", "15:00", "04/03/2023", 0)
// //         .then(function(response){
// //             console.log(response);
// //         })
// //         .catch(function(error){
// //             console.log(error.message);
// //         });
        
// //     }
    
// //     functionB() {
// //         console.log("Hello function B");
// //     }
    
// // }

const readline = require("readline");
const express = require('express');
const app = express();
const port = 5005;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let database = []; // Array to simulate database

let questions = "Choose an option:\n" +
    "1. Add movie 1\n" +
    "2. Add movie 2\n" +
    "3. Add movie 3\n" +
    "4. Delete movie by day\n" +
    "5. Delete movie by movie name\n" +
    "6. Exit\n" +
    "==========================\n";

let handleOption = function (option) {
    switch (+option) {
        case 1:
            databaseFunctions.addMovie("Monday", "Angry Pigs", "13:00", "15:00", "04/03/2023", 0);
            break;
        case 2:
            databaseFunctions.addMovie("Tuesday", "Nika", "16:00", "17:30", "05/03/2023", 0);
            break;
        case 3:
            databaseFunctions.addMovie("Monday", "WOW!", "10:00", "12:30", "04/03/2023", 0);
            break;
        case 4:
            databaseFunctions.deleteMovieByDay("Monday");
            break;
        case 5:
            databaseFunctions.deleteMovieByName("Nika");
            break;
        case 6:
            rl.close();
            break;
    }
    setTimeout(() => { rl.question(questions, handleOption); }, 1500);
}
rl.question(questions, handleOption);

rl.on("close", function () {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});

function addMovie(day, name, start, end, date, quantity) {
    // Check if a movie with the same name already exists
    const existingMovie = database.find(movie => movie.name === name);
    if (existingMovie) {
        console.log(`Movie '${name}' already exists in the database.`);
        return; // Exit the function if a duplicate movie is found
    }

    database.push({
        day: day,
        name: name,
        start: start,
        end: end,
        date: date,
        quantity: quantity
    });
    console.log(`Movie '${name}' added successfully!`);
}

// Function to delete movies by day from the database
function deleteMovieByDay(day) {
    database = database.filter(movie => movie.day !== day);
    console.log(`Movies on '${day}' deleted successfully!`);
}

// Function to delete movies by name from the database
function deleteMovieByName(name) {
    database = database.filter(movie => movie.name !== name);
    console.log(`Movie '${name}' deleted successfully!`);
}

// Exporting functions
const databaseFunctions = {
    addMovie: addMovie,
    deleteMovieByDay: deleteMovieByDay,
    deleteMovieByName: deleteMovieByName
};

// Route to get all movies
app.get('/movies', function (req, res) {
    res.json(database);
});

// Route to get a specific movie by name
app.get('/movies/:name', function (req, res) {
    const { name } = req.params;
    const movie = database.find(movie => movie.name === name);
    if (!movie) {
        res.status(404).json({ error: 'Movie not found' });
    } else {
        res.json(movie);
    }
});
// Route to search movies by day
app.get('/search/day/:day', function (req, res) {
    const { day } = req.params;
    const movies = database.filter(movie => movie.day === day);
    if (movies.length === 0) {
        res.status(404).json({ error: 'No movies found matching the search criteria' });
    } else {
        const formattedMovies = movies.map(movie => ({
            Showday: movie.day,
            'Movie date': movie.date,
            'Movie name': movie.name,
            'Start Time': movie.start,
            'End Time': movie.end,
        }));
        res.json(formattedMovies);
    }
});


// Start the server
app.listen(port, function () {
    console.log(`Server started on port ${port}`);
});

module.exports = databaseFunctions;
