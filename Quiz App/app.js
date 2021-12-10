const quizData = [
    {
        question: 'How old is Florin ?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    },
    {
        question: 'What is the most used programming langage?',
        a: 'Python',
        b: 'Javascript',
        c: 'C#',
        d: 'Java',
        correct: 'd'
    },
    {
        question: 'Who is the President of USA?',
        a: 'Vince Carter',
        b: 'Donald Trump',
        c: 'Joe Biden',
        d: 'Barack Obama',
        correct: 'c'
    },
    {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Javascript Object Notation',
        d: 'Application Programming Interface',
        correct: 'a'
    },
    {
        question: 'What year Javascript was launched?',
        a: '2020',
        b: '2019',
        c: '2017',
        d: 'None of the above',
        correct: 'd'
    }
];

const chk_a = document.getElementById('a');
const chk_b = document.getElementById('b');
const chk_c = document.getElementById('c');

const answer1 = document.getElementById('q1');
const answer2 = document.getElementById('q2');
const answer3 = document.getElementById('q3');
const answer4 = document.getElementById('q4');

const question = document.getElementById('question');
const btn = document.getElementById('btnSubmit');

let actual_question = 0;
let score = 0;

btn.addEventListener('click', function(){
    const ansSelected = getSelected();

    if(ansSelected){
        if(ansSelected === quizData[actual_question].correct){
            score++; 
        }

        actual_question++;
        if(actual_question < quizData.length){
            showQuestionDefault();
        }
        else{
            const quiz = document.querySelector('.quiz');
            const quizCompleted = document.querySelector('.completed');
            const total = document.getElementById('total');
            const size = document.getElementById('size');

            quiz.style.display = "none";
            quizCompleted.style.display = "inherit";
            btn.style.display = "none";  
            
            total.innerText = score;
            size.innerText = quizData.length;

        }
    }
});

function getSelected(){
    const answers = document.querySelectorAll('.answer');
    let answ = undefined;

    answers.forEach(ans => {
        if(ans.checked){
            answ = ans.id;
        }
    });
    return answ;
}

function DefaultValues(){
    const answers = document.querySelectorAll('.answer');
    let answ = undefined;

    answers.forEach(ans => {
        ans.checked = false;
    });
}

function showQuestionDefault(){
    DefaultValues();
    question.innerText = quizData[actual_question].question;
    answer1.innerText = quizData[actual_question].a;
    answer2.innerText = quizData[actual_question].b;
    answer3.innerText = quizData[actual_question].c;
    answer4.innerText = quizData[actual_question].d;
}

showQuestionDefault();

