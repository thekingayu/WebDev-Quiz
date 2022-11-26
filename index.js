var quizdata = [

  {
    question : 'Which framework is related to JS?',
    a:'.net',
    b:'flask',
    c:'react',
    d:'django',
    correct:'c'
  },
  {
    question : 'Which is not a Programming Language?',
    a:'Java',
    b:'HTML',
    c:'Python',
    d:'JavaScript',
    correct:'b'
  },
  {
    question : 'Which is not a framework?',
    a:'angular',
    b:'JavaScript',
    c:'react',
    d:'django',
    correct:'b'
  },
  {
    question : 'CSS Stands For?',
    a:'Cascading Style State',
    b:'Cascading Style of Sheet',
    c:'Cascade Of Style Sheet',
    d:'Cascading Style Sheet',
    correct:'d'
  }
]

var quiz = document.getElementById('quiz')
var answer = document.querySelectorAll('.answer')
var question = document.getElementById('question')
var option_a = document.getElementById('a_value')
var option_b = document.getElementById('b_value')
var option_c = document.getElementById('c_value')
var option_d = document.getElementById('d_value')

var submitbtn = document.getElementById('submit')

var currentQuestion = 0
var quizScore = 0

loadQuiz()

function loadQuiz(){
  deselect()
  question.innerHTML = quizdata[currentQuestion].question
  option_a.innerHTML = quizdata[currentQuestion].a
  option_b.innerHTML = quizdata[currentQuestion].b
  option_c.innerHTML = quizdata[currentQuestion].c
  option_d.innerHTML = quizdata[currentQuestion].d
}
function deselect(){
  answer.forEach(answer=>answer.checked=false)
}

submitbtn.addEventListener('click', ()=>{
  var selectedoption;
  answer.forEach(answer=>{
    if (answer.checked) {
      selectedoption = answer.id
    }
  })
  if (selectedoption == quizdata[currentQuestion].correct) {
    quizScore=quizScore+1
  }
  currentQuestion=currentQuestion+1
  if(currentQuestion == quizdata.length){
    document.getElementById('quizdiv').innerHTML = `<h1>You Have Answered ${quizScore} Correctly Out of ${quizdata.length}`
  }
  else{
    loadQuiz()
  }
})
