let questions = [{
    'frage': 'Was ist die Abkürzung für HTML',
    'antwort1': 'HyperText Markup Language',
    'antwort2': 'Home Tool Markup Language',
    'antwort3': 'Hyperlinks and Text Markup Language',
    'antwort4': 'High-Level Markup Language',
    'lösung': 'antwort1'
},
{
    'frage': 'Welches Tag wird verwendet, um einen Absatz zu kennzeichnen?',
    'antwort1': 'span',
    'antwort2': 'a',
    'antwort3': 'br',
    'antwort4': 'p',
    'lösung': 'antwort4'
},
{
    'frage': 'Welches "Tag" wird verwendet, um eine Liste mit numerierten Aufzählungspunkten zu erstellen?',
    'antwort1': 'ul',
    'antwort2': 'ol',
    'antwort3': 'li',
    'antwort4': 'td',
    'lösung': 'antwort2'
},
{
    'frage': 'Welches Attribut wird verwendet, um einen Link zu einer anderen Webseite festzulegen?',
    'antwort1': 'url',
    'antwort2': 'src',
    'antwort3': 'href',
    'antwort4': 'link',
    'lösung': 'antwort3'
},
{
    'frage': 'Welches Tag wird verwendet, um ein Bild in eine Webseite einzufügen?',
    'antwort1': 'img',
    'antwort2': 'image',
    'antwort3': 'picture',
    'antwort4': 'photo',
    'lösung': 'antwort1'
},
{
    'frage': 'Welches Tag wird verwendet, um eine Überschrift der höchsten Ebene anzugeben',
    'antwort1': 'h5',
    'antwort2': 'caption',
    'antwort3': 'head',
    'antwort4': 'h1',
    'lösung': 'antwort4'
},
{
    'frage': 'Welches Attribut wird verwendet, um den Hintergrund einer Webseite festzulegen?',
    'antwort1': 'color',
    'antwort2': 'background',
    'antwort3': 'placeholder',
    'antwort4': 'img',
    'lösung': 'antwort2'
},

]
let questionCounter = 0;
let pageCounter = 1

function init() {
    let question = document.getElementById('question')
    let answer1 = document.getElementById('answer1')
    let answer2 = document.getElementById('answer2')
    let answer3 = document.getElementById('answer3')
    let answer4 = document.getElementById('answer4')
    
    question.innerHTML = questions[questionCounter].frage
    answer1.innerHTML = questions[questionCounter].antwort1
    answer2.innerHTML = questions[questionCounter].antwort2
    answer3.innerHTML = questions[questionCounter].antwort3
    answer4.innerHTML = questions[questionCounter].antwort4

    showCurrentPage()
}

function showCurrentPage(){
    let page = document.getElementById('page')
    let pages = document.getElementById('pages')

    page.innerHTML = pageCounter
    pages.innerHTML = questions.length 
}

function nextQuestion(){
    questionCounter++;
    pageCounter++;
    init()
}




console.log(document.getElementById('page').innerHTML)