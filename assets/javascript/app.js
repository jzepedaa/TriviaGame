$(document).ready(function() {
  console.log("im here");

  ///Made an array for my questions and answers
  var questions = [
    {
      question: "What is the point called when you score in soccer?",
      choices: ["Basket", "Touchdown", "Goal", "Point"],
      rightChoice: "Goal",
      picture: "<img src='./assets/images/Goal.png' class='img'>"
    },
    {
      question: "How many players on the field per team?",
      choices: ["8", "8", "10", "11"],
      rightChoice: "11",
      picture: "<img src='./assets/images/Setup.jpg' class='img'>"
    },
    {
      question: "How long is a soccer game?",
      choices: ["30 minutes", "60 minutes", "90 minutes", "120 minutes"],
      rightChoice: "90 minutes",
      picture: "<img src='./assets/images/90Minutes.jpg' class='img'>"
    },
    {
      question: "Who is the most famous player on Barcelona?",
      choices: ["David Beckham", "Lionel Messi", "Cristiano Ronaldo", "Neymar"],
      rightChoice: "Lionel Messi",
      picture: "<img src='./assets/images/Lionel-Messi.jpg' class='img'>"
    },
    {
      question: "What is Messi's jersey number?",
      choices: ["7", "10", "4", "14"],
      rightChoice: "10",
      picture: "<img src='./assets/images/Messinumber10.jpg' class='img'>"
    },
    {
      question: "The FIFA World Cup takes place every _____",
      choices: ["4 Years", "3 Years", "5 Years", "6 Years"],
      rightChoice: "4 Years",
      picture: "<img src='./assets/images/world-cup-trophy.jpg' class='img'>"
    },
    {
      question: "What Country has won the most FIFA World Cup's?",
      choices: ["France", "Brazil", "Germany", "Spain"],
      rightChoice: "Brazil",
      picture: "<img src='./assets/images/BrazilTrophies.jpg' class='img'>"
    },

    {
      question:
        "What is the annual soccer club competition, organized by the Union of European Football Association (UEFA), contested by top-division European Clubs?",
      choices: ["Champions League", "Premier League", "La Liga", "MLS"],
      rightChoice: "Champions League",
      picture:
        "<img src='./assets/images/UEFA-Champions-League-Logo.jpg' class='img'>"
    },
    {
      question: "Who won the Champions League in 2018?",
      choices: ["Bayern Munich", "Barcelona", "Juventus", "Real Madrid"],
      rightChoice: "Real Madrid",
      picture: "<img src='./assets/images/RealMadridChampions.jpg' class='img'>"
    },
    {
      question: "Who has the most hat-tricks in the Champions League?",
      choices: ["Cristiano Ronaldo", "Lionel Messi", "Neymar", "Sergio Aguero"],
      rightChoice: "Lionel Messi",
      picture: "<img src='./assets/images/MessiHatTrick.jpg' class='img'>"
    },
    {
      question: "Who has the msot goals in the Champions League?",
      choices: ["Cristiano Ronaldo", "Lionel Messi", "Neymar", "Sergio Aguero"],
      rightChoice: "Cristiano Ronaldo",
      picture: "<img src='./assets/images/Ronaldo.jpg' class='img'>"
    }
  ];

  console.log(questions[0].question);
  console.log(questions[1].question);

  //the correct answer for each question
  var rightChoice = question[questionNumber].rightChoice;
  //keep count of the questions
  var questionNumber = 0;
  //keep total number of wrong answers
  var wrong = 0;
  //keep total number of right answers
  var correct = 0;
  //variable for the timer
  var time = 30;

  //create the functions
  //When the user guesses a correct answer
  function win() {
    // var rightChoice = question[questionNumber].rightChoice;
    correct++;
    $("#innerContainer").html("<h2> That is Correct</h2>");
    $("#innerContainer").append(
      "<h2> The answer is" +
        rightChoice +
        "</h2>" +
        questions[questionNumber].image
    );
    setTimeout(questionOrder, 2000);
    questionNumber++;
  }

  //when the user guesses the wrong answer
  function lose() {
    // var rightChoice = question[questionNumber].rightChoice;
    wrong++;
    $("#innerContainer").html("<h2> That is Incorrect</h2>");
    $("#innerContainer").append(
      "<h2> The answer is" +
        rightChoice +
        "</h2>" +
        questions[questionNumber].image
    );
    setTimeout(questionOrder, 2000);
    questionNumber++;
  }

  //when the user runs out of time
  function outOfTime() {
    // var rightChoice = question[questionNumber].rightChoice;
    if (time === 0) {
      wrong++;
      $("#innerContainer").html("<h2>Out Of Time</h2>");
      $("#innerContainer").append(
        "<h2> The answer is" +
          rightChoice +
          "</h2>" +
          questions[questionNumber].image
      );
      setTimeout(questionOrder, 2000);
      questionNumber++;
    }
  }

  //display the results of the game at the end
  function results() {}

  //creates the content for the questions
  function content() {}

  //timer for the game
  function timer() {
    clock = setInterval(countdown, 1000);
    function countDown() {
      if (time < 1) {
        clearInterval(clock);
        outOfTime();
      } else if (time > 0) {
        time--;
      }
      $("#timer").html(time);
    }
  }
  //function to show the next question
  function questionOrder() {}

  //resets the variables called when game reset
  function reset() {
    var questionNumber = 0;
    var wrong = 0;
    var correct = 0;
  }

  //starts the game
  function start() {}

  //click function

  // ------------------------------------------------------------------------------------------------------------------------------------------------------
  // ------------------------------------------------------------------------------------------------------------------------------------------------------
});
