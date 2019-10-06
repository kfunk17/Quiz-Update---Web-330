var questionData = [
    {
        id: "Q1",
        text: "What does 'js' stand for?",
        choices: [
            { id: "Q1C1", text: "jQuery Script"},
            { id: "Q1C2", text: "Java Serialized"},
            { id: "Q1C3", text: "JSONScript"},
            { id: "Q1C4", text: "JavaScript"},
        ],
        answer: "Q1C4"
    },
    {
        id: "Q2",
        text: "How do you print a message to the console?",
        choices: [
            { id: "Q2C1", text: "Logger.log();"},
            { id: "Q2C2", text: "console.log();"},
            { id: "Q2C3", text: "console.log[];"},
            { id: "Q2C4", text: "Console.log();"},
        ],
        answer: "Q2C2"
    },
    {
        id: "Q3",
        text: "How do you add a value to an array?",
        choices: [
            { id: "Q3C1", text: "array.push(value);"},
            { id: "Q3C2", text: "push[array,value];"},
            { id: "Q3C3", text: "array_push(array,value);"},
            { id: "Q3C4", text: "array.push[value];"},
        ],
        answer: "Q3C1"
    },
    {
        id: "Q4",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit?",
        choices: [
            { id: "Q4C1", text: "In porttitor;"},
            { id: "Q4C2", text: "In.porttitor;"},
            { id: "Q4C3", text: "In_porttitor;"},
            { id: "Q4C4", text: "In+porttitor;"},
        ],
        answer: "Q4C1"
    },
    {
        id: "Q5",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit?",
        choices: [
            { id: "Q5C1", text: "In porttitor;"},
            { id: "Q5C2", text: "In.porttitor;"},
            { id: "Q5C3", text: "In_porttitor;"},
            { id: "Q5C4", text: "In+porttitor;"},
        ],
        answer: "Q5C1"
    },
    {
        id: "Q6",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit?",
        choices: [
            { id: "Q6C1", text: "In porttitor;"},
            { id: "Q6C2", text: "In.porttitor;"},
            { id: "Q6C3", text: "In_porttitor;"},
            { id: "Q6C4", text: "In+porttitor;"},
        ],
        answer: "Q6C1"
    },
    {
        id: "Q7",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit?",
        choices: [
            { id: "Q7C1", text: "In porttitor;"},
            { id: "Q7C2", text: "In.porttitor;"},
            { id: "Q7C3", text: "In_porttitor;"},
            { id: "Q7C4", text: "In+porttitor;"},
        ],
        answer: "Q7C1"
    },
    {
        id: "Q8",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit?",
        choices: [
            { id: "Q8C1", text: "In porttitor;"},
            { id: "Q8C2", text: "In.porttitor;"},
            { id: "Q8C3", text: "In_porttitor;"},
            { id: "Q8C4", text: "In+porttitor;"},
        ],
        answer: "Q8C1"
    },
    {
        id: "Q9",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit?",
        choices: [
            { id: "Q9C1", text: "In porttitor;"},
            { id: "Q9C2", text: "In.porttitor;"},
            { id: "Q9C3", text: "In_porttitor;"},
            { id: "Q9C4", text: "In+porttitor;"},
        ],
        answer: "Q9C1"
    },
    {
        id: "Q10",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit?",
        choices: [
            { id: "Q10C1", text: "In porttitor;"},
            { id: "Q10C2", text: "In.porttitor;"},
            { id: "Q10C3", text: "In_porttitor;"},
            { id: "Q10C4", text: "In+porttitor;"},
        ],
        answer: "Q10C1"
    }
];



// Class to represent a given choice and it's state 
function QuizChoice(choice) {
    var self = this;
    self.choice = choice;

    //wrap question properties to make it easier to bind and work with
    self.id = ko.computed(function(){
        return self.choice.id;
    });

    self.text = ko.computed(function(){
        return self.choice.text;
    });


}

// Class to represent a given question and it's state 
function QuizQuestion(question) {
    var self = this;
    self.question = question;

    //wrap question properties to make it easier to bind and work with
    self.id = ko.computed(function(){
        return self.question.id;
    });

    self.text = ko.computed(function(){
        return self.question.text;
    });

    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    var choices = question.choices.map(function(c){
        return new QuizChoice(c);
    });
    self.choices = ko.observableArray(choices);


    self.selectAnswer = function(quizChoice) {
        self.selectedAnswer(quizChoice);
    }
    self.selectedAnswer = ko.observable(null);
    self.isAnswered = ko.computed(function(){
        return self.selectedAnswer() != null;
    });

    self.isCorrect = ko.computed(function(){
        return self.isAnswered() && self.selectedAnswer().id() == self.question.answer;
    });

    self.isWrong = ko.computed(function(){
        return self.isAnswered() && self.selectedAnswer().id() != self.question.answer;
    });



}

// Overall viewmodel for this screen, along with initial state
function QuizViewModel() {
    var self = this;

    // Non-editable catalog data - would come from a server / api
    self.questionData = questionData;

    // Editable data
    self.questions = ko.observableArray([
        new QuizQuestion(self.questionData[0]),
        new QuizQuestion(self.questionData[1]),
        new QuizQuestion(self.questionData[2]),
        new QuizQuestion(self.questionData[3]),
        new QuizQuestion(self.questionData[4]),
        new QuizQuestion(self.questionData[5]),
        new QuizQuestion(self.questionData[6]),
        new QuizQuestion(self.questionData[7]),
        new QuizQuestion(self.questionData[8]),
        new QuizQuestion(self.questionData[9])
    ]);

    //https://knockoutjs.com/documentation/observableArrays.html
    self.currentQuestionIndex = ko.observable(0);
    self.currentQuestionIndexDisplayValue = ko.computed(function() {
        return self.currentQuestionIndex() + 1;
    });
    self.currentQuestion = ko.computed(function() {
        return self.questions()[self.currentQuestionIndex()];
    });

    self.selectQuestion = function(index) {
        self.currentQuestionIndex(index);
    };

    self.canSubmit = ko.computed(function() {
        return false;
    });

    self.submit = function() {
        console.log("submit clicked");
    };

    self.restart = function() {
        console.log("restart clicked");
    };

}