$(document).ready(function () {
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
      choices: ["8", "9", "10", "11"],
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
      question: "Who has the most goals in the Champions League?",
      choices: ["Cristiano Ronaldo", "Lionel Messi", "Neymar", "Sergio Aguero"],
      rightChoice: "Cristiano Ronaldo",
      picture: "<img src='./assets/images/Ronaldo.jpg' class='img'>"
    }
  ];

  // var rightChoice = questions[questionNumber].rightChoice;
  //keep count of the questions
  var questionNumber = 0;
  // initial time of 15 seconds for each question
  var time = 30;
  //keep total number of right answers
  var correct = 0;
  //keep total number of wrong answers
  var wrong = 0;

  //create the functions
  //When the user guesses a correct answer
  function win() {
    $("#innerContainer").html("<h2>That is the right answer</p>");
    correct++;
    var rightChoice = questions[questionNumber].rightChoice;
    $("#innerContainer").append(
      "<h2>The answer was <span class='answer'>" +
      rightChoice +
      "</span></h2>" +
      questions[questionNumber].picture
    );
    setTimeout(questionOrder, 4000);
    questionNumber++;
  }

  //when the user guesses the wrong answer
  function Loss() {
    $("#innerContainer").html("<h2>Nope, that's not it!</h2>");
    wrong++;
    var rightChoice = questions[questionNumber].rightChoice;
    $("#innerContainer").append(
      "<h2>The answer was <span class='answer'>" +
      rightChoice +
      "</span></h2>" +
      questions[questionNumber].picture
    );
    setTimeout(questionOrder, 4000);
    questionNumber++;
  }

  //when the user runs out of time

  function outOfTime() {
    if (time === 0) {
      $("#innerContainer").html("<h2>You ran out of time!</h2>");
      wrong++;
      var rightChoice = questions[questionNumber].rightChoice;
      $("#innerContainer").append(
        "<h2>The answer was <span class='answer'>" +
        rightChoice +
        "</span></h2>" +
        questions[questionNumber].picture
      );
      setTimeout(questionOrder, 4000);
      questionNumber++;
    }
  }

  //display the results of the game at the end
  function results() {
    if (correct === questions.length) {
      var endMessage = "Good job you got them all right";
    } else if (correct > wrong) {
      var endMessage = "You did better than 50%";
    } else {
      var endMessage = "Not so good";
    }
    $("#innerContainer").html(
      "<p>" +
      endMessage +
      "</p>" +
      "<p>You got <strong>" +
      correct +
      "</strong> right.</p>" +
      "<p>You got <strong>" +
      wrong +
      "</strong> wrong.</p>"
    );
    //this button did not work for some reason.
    $("#innerContainer").append("<h1 id='start'>Click to start over from question 1?</h1>");
    $("#start").click(start);

    reset();
  }

  //creates the content for the questions
  function content() {
    $("#innerContainer").append(
      "<h2>" +
      questions[questionNumber].question +
      "</h2><h2 class='choices'>" +
      questions[questionNumber].choices[0] +
      "</h2><h2 class='choices'>" +
      questions[questionNumber].choices[1] +
      "</h2><h2 class='choices'>" +
      questions[questionNumber].choices[2] +
      "</h2><h2 class='choices'>" +
      questions[questionNumber].choices[3] +
      "</h2>"
    );
  }

  //timer for the game
  function timer() {
    clock = setInterval(countDown, 1000);
    function countDown() {
      if (time < 1) {
        clearInterval(clock);
        outOfTime();
      }
      if (time > 0) {
        time--;
      }
      $("#timer").html(time);
    }
  }

  //function to show the next question

  function questionOrder() {
    if (questionNumber < questions.length) {
      time = 30;
      $("#innerContainer").html(
        "<h2>You have <span id='timer'>" + time + "</span> seconds left!</h2>"
      );
      content();
      timer();
      outOfTime();
    } else {
      results();
    }
    // console.log(questionNumber);
    // console.log(questions[questionNumber].rightChoice);
  }

  //resets the variables called when game reset
  function reset() {
    questionNumber = 0;
    correct = 0;
    wrong = 0;
  }

  //starts the game
  function start() {
    $("#innerContainer").html(
      "<h2>You have <span id='timer'>" + time + "</span> seconds left!</h2>"
    );
    $("#start").hide();

    content();
    timer();
    outOfTime();
  }

  $("#start").click(start);

  // click function
  $("#innerContainer").on("click", ".choices", function () {
    var guess = $(this).text();
    if (guess === questions[questionNumber].rightChoice) {
      clearInterval(clock);
      win();
    } else {
      clearInterval(clock);
      Loss();
    }
  });
});
