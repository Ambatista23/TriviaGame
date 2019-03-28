


// -------------- My code ------------------
$("#title").append($("<h3>Rick and Morty Twisted Trivia!</h3>"));


// document.getElementById("question1")
// 1. create an array to display the questions with the answer

var myQuestions = [{

    question: "What is Rick's 'universe number?",
    // create an array for the answer
    answer: {
        a: "C-137",
        b: "C-139",
        c: "C-142",
        d: "C-133"
    },
    correctAnswer: "a"
},
    {
    question: "According to Dan Harmon, how much is a Shmeckle worth?",
    answer: {
        a: "$200",
        b: "$148",
        c: "$69",
        d: "$15" 
    },
    correctAnswer: "b"
},
    {
        question: "What is the name of Rick's half-avian half-human best friend?",
        answer: {
            a: "Bird-Man",
            b: "Eagle",
            c: "Bird-Person",
            d: "Mr.PoopyPants"
        },
    correctAnswer: "c"
    }
];


// var question1 = $("#question1");
var testDuration = 5;
// $("#question1").html("What is Rick's 'universe number?'");
// $("#question2").html("According to Dan Harmon, how much is a Shmeckle worth?");
// $("#question3").html("What is the name of Rick's half-avian half-human best friend?");
// console.log(this);




// -------------- Functions -----------------------
// - create a function that only allows one answer choice to be selected

// - create a function to record the number of correct answers choices
// - create a function to record the number of incorrect answers choices 
// - create a function to end the game once the time runs out
// - create a function to change the page to display display the results
// - create an array with function to display array
// - create an array for the results with function to display results


 function stop(){
    (clearInterval(intervalId));
 }
// - create a a timer
intervalId = setInterval(function(){
    if (testDuration > 0) {
        testDuration--;
        $("#countdownTimer").html("Time remaining: " + testDuration);
        console.log(testDuration);
        
    }

    // when this else condition runs, it means the time has run out
    else {
        stop();
        console.log("Your time is up bud! ");
    };
    

}, 1000 * 1);










// -------------- Disregard self notes -----------------------

// $("#countdownTimer").append($("<h3> Time Remaining:</h3>")) 
// .attr lets you add an attribute and how to change one

// setTimeout(function(){
//     alert("Time's up!");
// }, 1000 * 3 );

// after comma includes the duration of time

// -------------- Disregard self notes ---------------------------
