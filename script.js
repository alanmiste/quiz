/* class Quiz {
    constructor() {

        this.questionnaire = new Questionnaire();
        console.log(this.questionnaire.newArray)
    }

    addQuestion(text) {
        
        const question = new Question();

        this.questionnaire.shreya(text);

    }

    printQuestionnaire() {
        this.questionnaire.print()
    }
}

class Questionnaire {
    
    static questionnaire = []
    static answers = []
    static correctAnswers = []
    
    constructor() {
        // Questionnaire.questionnaire.push('What is your name')
        console.log(Questionnaire.questionnaire.length)

        this.newArray = ['mango'];
    }

    shreya(text) {
        Questionnaire.questionnaire.push(text);
    }

    print() {
        console.log(Questionnaire.questionnaire);
    }
}

class Question {
    contructor() {

    }
}
const quiz = new Quiz()
quiz.addQuestion('What is your name?')

const questionnaire = new Questionnaire();
questionnaire.print();
 */

class Quiz {
    constructor() {
        this.question = new Question();        
    }

    newGame() {
       this.question.showQuestion()
    }

    showResult() {

    }
}

class Question {
    
    static questions = [
        {q: "question 1?", a: ["answer1 1","answer1 2","answer1 3"], ca: 2},
        {q: "question 2?", a: ["answer2 1","answer2 2","answer2 3"], ca: 2},
        {q: "question 3?", a: ["answer3 1","answer3 2","answer3 3"], ca: 3},
        {q: "question 4?", a: ["answer4 1","answer4 2","answer4 3"], ca: 1},
        {q: "question 5?", a: ["answer5 1","answer5 2","answer5 3"], ca: 1},
    ]
    static answers = []
    static correctAnswers = []
    
    constructor() {
        this.questionF = document.querySelector(".questionField");
        this.answerF = document.querySelector(".answerField");
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    arrayShuffle(array){ //to arrange array elements randomly
        return array.sort(()=> Math.random()- 0.5);       
    }

    showQuestion() {
        let q = this.getRandomInt(Question.questions.length); //to get a random number to use it to choose a random question
        let questionTag ="";
        let answerTag = "";
        let answerArr = [];
        questionTag += `<p> ${Question.questions[q].q}</p>`;


        let index = 0; // the index of answer array
        this.arrayShuffle(Question.questions[q].a).forEach(()=>{ // To distribute the answers to multiple <li>
            answerTag += `<li>${Question.questions[q].a[index]}</li>`
            index++;
        })


        this.questionF.innerHTML = questionTag;
        this.answerF.innerHTML = answerTag;
    }

}

class Answer {
    contructor() {

    }
    showAnswer(input){
        if(input == Question.questions[2].ca){
            console.log("Right")
        }
    }
}

const q = new Quiz;
// q.newGame()


const test = new Question();
const test1 = new Answer();
test1.showAnswer(3)



// console.log(test.arrayShuffle([1,2,3,4,5]))
