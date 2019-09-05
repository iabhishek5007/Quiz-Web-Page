function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score=this.score+3;
    }
    else{
        this.score=this.score-1;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
var questions = [
    new Question("Washing soda is the common name for", ["Sodium carbonate", "Calcium bicarbonate","Sodium bicarbonate", "Calcium carbonate"], "Sodium carbonate"),
    new Question("Which of the gas is not known as green house gas?", ["Methane", "Nitrous oxide", "Carbon dioxide", "Hydrogen"], "Hydrogen"),
    new Question("Under Akbar, the Mir Bakshi was required to look after", ["military affairs", "the state treasury","the royal household", "the land revenue system"], "military affairs"),
    new Question("The treaty of Srirangapatna was signed between Tipu Sultan and", ["Robert Clive", "Cornwallis", "Dalhousie", "Warren Hastings"], "Cornwallis"),
    new Question("The Vedic deity Indra is the God ofabout..", ["Wind", "Eternity", "Rain and Thunder", "Fire"], "Rain and Thunder"),
    new Question("Which of the following is a non metal that remains liquid at room temperature?", ["Phosphorous", "Bromine", "Chlorine", "Helium"], "Bromine"),
    new Question("Which of the following is used as a moderator in nuclear reactor?", ["Thorium", "Graphite", "Radium", "Ordinary water"], "Graphite"),
    new Question("To which professions earlier leaders who struggled for freedom of India mainly belonged?", ["Lawyers", "Teachers", "Journalists", "All of the above"], "All of the above"),
    new Question("Under an agreement with which of the following countries did Subhas Chandra Bose organize the Indian soldiers, taken as prisoners by the Axis Powers, into the Azad Hind Fauj?", ["China", "Germany", "Italy", "Japan"], "Japan"),
    new Question("The title given by the British Government to Mahatma Gandhi which he surrendered during the non-cooperation movement was", ["Hind Kesari", "Kaiser-e-Hind", "Rai Bahadur", "Rt. Honorable"], "Kaiser-e-Hind"),
    new Question("The Parliament of India cannot be regarded as a sovereign body because", ["it can legislate only on subjects entrusted to the Centre by the Constitution", "it has to operate within the limits prescribed by the Constitution", "the Supreme Court can declare laws passed by parliament as unconstitutional if they contravene the provisions of the Constitution", "All of the above"], "All of the above"),
    new Question("The minimum age to qualify for election to the Lok Sabha is", ["25 years", "21 years", "35 years", "18 years"], "25 years"),
    new Question("Most modern TV's draw power even if turned off. The circuit the power is used in does what function?", ["Sound", "Remote control", "Color balance", "High voltage"], "Remote control"),
    new Question("The purpose of choke in tube light is ?", ["To decrease the current", "To increase the current", "To decrease the voltage momentarily", "To increase the voltage momentarily"], "To increase the voltage momentarily"),
    new Question("Sometimes computers and cache registers in a foodmart are connected to a UPS system. What does UPS mean?", ["United Parcel Service", "Uninterruptable Power Supply", "Uniform Product Support", "Under Paneling Storage"], "Uninterruptable Power Supply"),
    new Question("Who co-founded Hotmail in 1996 and then sold the company to Microsoft?", ["Shawn Fanning", "Ada Byron Lovelace", "Sabeer Bhatia", "Ray Tomlinson"], "Sabeer Bhatia"),
    new Question("Which consists of two plates separated by a dielectric and can store a charge?", ["Inductor", "Capacitor", "Transistor", "Resistor"], "Capacitor"),
    new Question("Which of the following place is famous for its gigantic rock-cut statue of Buddha?", ["Bamiyan", "Borobudur", "Anuradhapuram", "Angor Vat"], "Bamiyan"),
    new Question("To evolve a peaceful settlement of the conflict between India and China, which of the following non-aligned Afro-Asian nations participated in a conference held in December 1962?", ["Burma (now Myanmar), Combodia, Indonesia and UAR", "Burma, Sri Lanka, Combodia and Indonesia", "Burma, Indonesia, Ghana and Sri Lanka", "All of the above"], "All of the above"),
    new Question("Which of the following place is famous for its gigantic rock-cut statue of Buddha?", ["Bamiyan", "Borobudur", "Anuradhapuram", "Angor Vat"], "Bamiyan")
];
 
var quiz = new Quiz(questions);
 
populate();