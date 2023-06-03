const htmlQuestions = [{
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

];

const cssQuestions = [
    {
        'frage': 'Was ist der Zweck von CSS?',
        'antwort1': 'Um den Inhalt einer Webseite zu strukturieren',
        'antwort2': 'Um das Aussehen und Layout einer Webseite zu gestalten',
        'antwort3': 'Um interaktive Funktionen auf einer Webseite zu implementieren',
        'antwort4': 'Um die Performance einer Webseite zu optimieren',
        'lösung': 'answer2',
        'letter': 'b'
    },
    {
        'frage': 'Wie bindet man eine externe CSS-Datei in eine HTML-Seite ein?',
        'antwort1': '&lt;link rel="stylesheet" href="styles.css"&gt;',
        'antwort2': '&lt;style src="styles.css"&gt;&lt;/style&gt;',
        'antwort3': '&lt;script src="styles.css"&gt;&lt;/script&gt;',
        'antwort4': '&lt;css&gt;@import "styles.css";&lt;/css&gt;',
        'lösung': 'answer1',
        'letter': 'a'
    },
    {
        'frage': 'Welches Attribut wird verwendet, um den Textstil in CSS anzupassen?',
        'antwort1': 'text-style',
        'antwort2': 'font-family',
        'antwort3': 'text-decoration',
        'antwort4': 'font-style',
        'lösung': 'answer4',
        'letter': 'd'
    },
    {
        'frage': 'Welche Einheit wird in CSS verwendet, um die Größe eines Elements relativ zur Schriftgröße des Elternelements zu definieren?',
        'antwort1': 'em',
        'antwort2': 'px',
        'antwort3': 'rem',
        'antwort4': 'pt',
        'lösung': 'answer1',
        'letter': 'a'
    },
    {
        'frage': 'Welche Eigenschaft wird verwendet, um den Abstand zwischen den inneren Rändern eines Elements einzustellen?',
        'antwort1': 'margin',
        'antwort2': 'spaceing',
        'antwort3': 'border',
        'antwort4': 'padding',
        'lösung': 'answer4',
        'letter': 'd'
    },
    {
        'frage': 'Wie selektiert man alle &lt;a&gt;-Elemente, die sich innerhalb eines bestimmten Elements mit der Klasse "container" befinden?',
        'antwort1': '.container &gt; a',
        'antwort2': '.container a',
        'antwort3': 'container-a',
        'antwort4': '#container a',
        'lösung': 'answer2',
        'letter': 'b'
    },
    {
        'frage': 'Welche CSS-Eigenschaft wird verwendet, um den Hintergrund einer Webseite festzulegen?',
        'antwort1': 'color',
        'antwort2': 'image-rendering',
        'antwort3': 'background',
        'antwort4': 'img',
        'lösung': 'answer3',
        'letter': 'c'
    }
];

const jsQuestions = [
    {
        'frage': 'Was ist JavaScript?',
        'antwort1': 'Ein serverseitiges Framework',
        'antwort2': 'Ein Datenbankmanagementsystem',
        'antwort3': 'Eine Programmiersprache für Webentwicklung',
        'antwort4': 'Ein Texteditor für Entwickler',
        'lösung': 'answer3',
        'letter': 'c'
    },
    {
        'frage': 'Wie deklariert man eine Variable in JavaScript?',
        'antwort1': 'var myVariable;',
        'antwort2': 'let myVariable;',
        'antwort3': 'const myVariable;',
        'antwort4': 'Alle oben genannten',
        'lösung': 'answer4',
        'letter': 'd'
    },
    {
        'frage': 'Welches Schlüsselwort wird verwendet, um eine Funktion in JavaScript zu definieren?',
        'antwort1': 'function',
        'antwort2': 'method',
        'antwort3': 'procedure',
        'antwort4': 'def',
        'lösung': 'answer1',
        'letter': 'a'
    },
    {
        'frage': 'Wie ruft man eine Funktion in JavaScript auf?',
        'antwort1': 'let Function()',
        'antwort2': 'executeFunction(){}',
        'antwort3': 'myFunction()',
        'antwort4': 'alle oben genannten',
        'lösung': 'answer3',
        'letter': 'c'
    },
    {
        'frage': 'Welches Zeichen wird in JavaScript verwendet, um eine Zeichenkette zu kennzeichnen?',
        'antwort1': '"',
        'antwort2': "'",
        'antwort3': '`',
        'antwort4': 'Alle oben genannten',
        'lösung': 'answer4',
        'letter': 'd'
    },
    {
        'frage': 'Wie vergleicht man zwei Werte auf strikte Gleichheit in JavaScript?',
        'antwort1': '==',
        'antwort2': '===',
        'antwort3': '!=',
        'antwort4': '!==',
        'lösung': 'answer2',
        'letter': 'b'
    },
    {
        'frage': 'Was ist das DOM in Bezug auf JavaScript?',
        'antwort1': 'Eine Programmierschnittstelle zur Manipulation von HTML-Elementen',
        'antwort2': 'Eine Programmiersprache',
        'antwort3': 'Ein Netzwerkprotokoll',
        'antwort4': 'Ein Datenbank System',
        'lösung': 'answer1',
        'letter': 'a'
    }
];

let questionCounter = 0;
let pageCounter = 1;
let rightQuestions = 0;
let answerChecked = false
let WhatKindOfQuizIsRunning = htmlQuestions

// starts the quiz
function startQuiz(choosenQuiz) {

    showQuizScreen()
    init(choosenQuiz)
    whatKindOfQuiz(choosenQuiz);
}

// siwtches from the Start screen to the quiz sequenz
function showQuizScreen() {

    let homeScreen = document.getElementById('home-screen');
    let quiz = document.getElementById('quiz');
    homeScreen.style.display = 'none'
    quiz.style.display = 'flex'
    disableLinks('add')

}
// adds a class to the html to disable the links while the quiz is runnig
function disableLinks(action) {
    let links = document.getElementsByClassName('nav-link')

    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        link.classList[action]('disabled')
    }
}

// initalise the curent question
function init(choosenQuiz) {
    let question = document.getElementById('question')
    let answer1 = document.getElementById('answer1')
    let answer2 = document.getElementById('answer2')
    let answer3 = document.getElementById('answer3')
    let answer4 = document.getElementById('answer4')

    if (pageCounter <= choosenQuiz.length) {
        question.innerHTML = choosenQuiz[questionCounter].frage
        answer1.innerHTML = choosenQuiz[questionCounter].antwort1
        answer2.innerHTML = choosenQuiz[questionCounter].antwort2
        answer3.innerHTML = choosenQuiz[questionCounter].antwort3
        answer4.innerHTML = choosenQuiz[questionCounter].antwort4

        showCurrentPage(choosenQuiz)
    }
}

// shows the number of current questions below the answers
function showCurrentPage(choosenQuiz) {
    let page = document.getElementById('page')
    let pages = document.getElementById('pages')
    page.innerHTML = pageCounter
    pages.innerHTML = choosenQuiz.length
}
// saves what kind of quiz is actually running in variable and 
// shows wich quiz is actually running on the left nav bar
function whatKindOfQuiz(choosenQuiz) {
    let link = document.getElementsByClassName('nav-link')
    let quiz = choosenQuiz
    switch (quiz) {
        case htmlQuestions:
            WhatKindOfQuizIsRunning = htmlQuestions
            link[0].classList.add('active-quiz')
            break;
        case cssQuestions:
            WhatKindOfQuizIsRunning = cssQuestions
            link[1].classList.add('active-quiz')
            break;
        case jsQuestions:
            WhatKindOfQuizIsRunning = jsQuestions
            link[2].classList.add('active-quiz')
            break;
    }
}

// checks if the answer is right or not. Also checks is the question already checks?
function checkAnswer(answer, letter) {

    if (answerChecked === false) {
        if (answer == WhatKindOfQuizIsRunning[questionCounter].lösung) {
            showAnswer(answer, letter, 'rightAnswer', 'rightAnswer2')
            rightQuestions++;

        } else {
            showAnswer(answer, letter, 'wrongAnswer', 'wrongAnswer2');
            setTimeout(() => {
                showAnswer(WhatKindOfQuizIsRunning[questionCounter].lösung, WhatKindOfQuizIsRunning[questionCounter].letter, 'rightAnswer', 'rightAnswer2')
            }, 500);

        }
        answerChecked = true
        setTimeout(() => {
            ableNextQuestion(false)
        }, 500);
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

// disables the button Nächste Frage till a answer is clicked
function ableNextQuestion(boolean) {
    let btn = document.getElementsByClassName('btn')
    btn[0].disabled = boolean;
}

// generates the next question on clicking the button
function nextQuestion() {
    questionCounter++;
    pageCounter++;
    showEndscreen()
    init(WhatKindOfQuizIsRunning)
    ableNextQuestion(true)
    removeColors()
    answerChecked = false
    progressBar()

}
// handles the logic of the progressbar
function progressBar() {
    let progress = document.getElementsByClassName('progress-bar')
    percent = pageCounter / WhatKindOfQuizIsRunning.length
    percent = Math.round(percent * 100)

    progress[0].innerHTML = `${percent}%`
    progress[0].style = `width: ${percent}%`
}

// removes all colors from every answer 
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

// shows the Endscreen of the quiz when its finished
function showEndscreen() {
    let quiz = document.getElementById('quiz')
    let endscreen = document.getElementById('endscreen')

    if (pageCounter > WhatKindOfQuizIsRunning.length) {
        quiz.style.display = 'none'
        endscreen.style.display = 'flex'
    }
    calcRightAnswers()
}

// shows how many right answers the play got at the end
function calcRightAnswers() {
    let score = document.getElementById('score')
    score.innerHTML = rightQuestions
}

// resets the app to the begining state
function playAgain() {

    questionCounter = 0;
    pageCounter = 1;
    rightQuestions = 0;
    let quiz = document.getElementById('quiz')
    let endScreen = document.getElementById('endscreen')
    let homeScreen = document.getElementById('home-screen')

    quiz.style.display = 'none'
    endScreen.style.display = 'none'
    homeScreen.style.display = 'flex'
    disableLinks('remove')
    resetProgressBar()
    resetActiveQuiz()
}

// sets everything to 0 on the progressbar
function resetProgressBar() {
    let progress = document.getElementsByClassName('progress-bar')
    progress[0].innerHTML = `0%`
    progress[0].style = `width: 10%`
}

// removes the border on the active quiz
function resetActiveQuiz() {
    let link = document.getElementsByClassName('nav-link');
    for (let i = 0; i < link.length; i++) {
        link[i].classList.remove('active-quiz');
    }
}
// its not a function
function share() {
    alert('Die teilen funktion ist derzeit inaktiv. Versuch es ein andermal nochmal')
}
console.log('app is working')