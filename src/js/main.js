let questions = [{
    'frage': 'Was ist die Abkürzung für HTML',
    'antwort1': 'HyperText Markup Language',
    'antwort2': 'Home Tool Markup Language',
    'antwort3': 'Hyperlinks and Text Markup Language',
    'antwort4': 'High-Level Markup Language',
    'lösung': 'answer1',
    'letter': 'a'
},
{
    'frage': 'Welches Tag wird verwendet, um einen Absatz zu kennzeichnen?',
    'antwort1': 'span',
    'antwort2': 'a',
    'antwort3': 'br',
    'antwort4': 'p',
    'lösung': 'answer4',
    'letter': 'd'
},
{
    'frage': 'Welches "Tag" wird verwendet, um eine Liste mit numerierten Aufzählungspunkten zu erstellen?',
    'antwort1': 'ul',
    'antwort2': 'ol',
    'antwort3': 'li',
    'antwort4': 'td',
    'lösung': 'answer2',
    'letter': 'b'
},
{
    'frage': 'Welches Attribut wird verwendet, um einen Link zu einer anderen Webseite festzulegen?',
    'antwort1': 'url',
    'antwort2': 'src',
    'antwort3': 'href',
    'antwort4': 'link',
    'lösung': 'answer3',
    'letter': 'c'
},
{
    'frage': 'Welches Tag wird verwendet, um ein Bild in eine Webseite einzufügen?',
    'antwort1': 'img',
    'antwort2': 'image',
    'antwort3': 'picture',
    'antwort4': 'photo',
    'lösung': 'answer1',
    'letter': 'a'
},
{
    'frage': 'Welches Tag wird verwendet, um eine Überschrift der höchsten Ebene anzugeben',
    'antwort1': 'h5',
    'antwort2': 'caption',
    'antwort3': 'head',
    'antwort4': 'h1',
    'lösung': 'answer4',
    'letter': 'd'
},
{
    'frage': 'Welches Attribut wird verwendet, um den Hintergrund einer Webseite festzulegen?',
    'antwort1': 'color',
    'antwort2': 'background',
    'antwort3': 'placeholder',
    'antwort4': 'img',
    'lösung': 'answer2',
    'letter': 'b'
},

]
let questionCounter = 0;
let pageCounter = 1;
let rightQuestions = 0;
let answerChecked = false

// initalise the curent question
function init() {
    let question = document.getElementById('question')
    let answer1 = document.getElementById('answer1')
    let answer2 = document.getElementById('answer2')
    let answer3 = document.getElementById('answer3')
    let answer4 = document.getElementById('answer4')

    if (pageCounter <= questions.length ) {
        question.innerHTML = questions[questionCounter].frage
        answer1.innerHTML = questions[questionCounter].antwort1
        answer2.innerHTML = questions[questionCounter].antwort2
        answer3.innerHTML = questions[questionCounter].antwort3
        answer4.innerHTML = questions[questionCounter].antwort4

        showCurrentPage()
    }

}

// shows the number of current questions below the answers
function showCurrentPage() {
    let page = document.getElementById('page')
    let pages = document.getElementById('pages')

    page.innerHTML = pageCounter
    pages.innerHTML = questions.length
}

// generates the next question on clicking the button
function nextQuestion() {
    questionCounter++;
    pageCounter++;
    showEndscreen()
    init()
    ableNextQuestion(true)
    removeColors()
    answerChecked = false

}

// disables the button Nächste Frage till a answer is clicked
function ableNextQuestion(boolean) {
    let btn = document.getElementsByClassName('btn')
    btn[0].disabled = boolean;
}

// checks if the answer is right or not. Also checks is the question already checks?
function checkAnswer(answer, letter) {

    if (answerChecked === false) {
        if (answer == questions[questionCounter].lösung) {
            showAnswer(answer, letter, 'rightAnswer', 'rightAnswer2')
            rightQuestions++;

        } else {
            showAnswer(answer, letter, 'wrongAnswer', 'wrongAnswer2');
            setTimeout(() => {
                showAnswer(questions[questionCounter].lösung, questions[questionCounter].letter, 'rightAnswer', 'rightAnswer2')
            }, 500);

        }
        answerChecked = true
        ableNextQuestion(false)
    }

}
// shows the right or wrong answer
function showAnswer(answerP, letterP, Answer, Answer2) {
    let answer = document.getElementsByClassName(`${answerP}`)[0]
    let leter = document.getElementById(`${letterP}`)
    let character = document.querySelector(`#${letterP} b`)

    answer.classList.add(`${Answer}`)
    leter.classList.add(`${Answer2}`)
    character.classList.add('textWhite')
}
// removes all colors from every answer option
function removeColors() {
    let answer = document.getElementsByClassName('answer')
    let viereck = document.getElementsByClassName('viereck')
    let character = document.querySelectorAll('.viereck > b')

    for (let i = 0; i < answer.length; i++) {
        const line = answer[i];
        const ecke = viereck[i];
        const b = character[i]
        b.classList.remove('textWhite')
        line.classList.remove('wrongAnswer')
        ecke.classList.remove('wrongAnswer2')
        line.classList.remove('rightAnswer')
        ecke.classList.remove('rightAnswer2')
    }

}

function showEndscreen() {
    let quiz = document.getElementById('quiz')
    let endscreen = document.getElementById('endscreen')

    if (pageCounter == 8) {
        quiz.style.display = 'none'
        endscreen.style.display = 'flex'
    }
}

console.log('läuft')


