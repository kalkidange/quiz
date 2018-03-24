
function Question(text, choices , answer){
    this.text = text;
    this.choices = choices;
    this.answer =answer;
}
Question.prototype.correctAnswer = function(choice){
    return choice === this.answer;
}

function populate(){
    if(quiz.isEnded()){
        showScores();
        playBtnSound(1);
    }
    else {
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++){
            var element = document.getElementById("choice"+ i);
            element.innerHTML = choices[i];
            guess("btn" + i,choices[i]);

        }
        showProgress();
       
        
    }
};
function guess(id, guess){
    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        populate();
    }
};
function showProgress(){
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question" + currentQuestionNumber + "of" + quiz.questions.length;

}

function showScores(){
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score'>your score :" + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;

}
var questions = [
    new Question("what are the benefit of software cource? ",["for language purpose","for grade","to know about civil","to be good developer"],"to be good developer"),
    new Question("Specific gravity of uranium and plutonium is about? ",["9","13","19","27"],"19"),
    new Question("Radioactive decay is a _______ change?",["chemical","nuclear","physical","none"],"nuclear"),
    new Question("which one is not object orented language?",["c#","java","c","all"],"c"),
    new Question("which one is framework?",["android","java","c","laravel"],"laravel"),
    new Question("which one is part of eye?",["retina","lung","kidney","leg"],"retina")

];


function playBtnSound(num){
    var a = new Audio();
    // a.src = "a.mp3";
    a.play();
    var div1 = document.getElementById("div1");
    div1.innerHTML = "";
}
var quiz = new Quiz(questions);

populate();
