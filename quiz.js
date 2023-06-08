//Array of dictionary with questions,options and their answers
const questions=[
    {question:"Which animal contains no bones in its body?",
      options:["shark","dogs","cat","cow"],
      answers:"shark"
     
    },
    {question:"Which animal sleep while standing up?",
    options:["horses","pigs","elephant","deer"],
    answers:"horses"
     
    },
    {question:"Which animal cant jump?",
    options:["horse","elephant","dog","cat"],
    answers:"elephant"
     
    },
    {question:"Which is the fastest spinning planet in the solar system?",
    options:["Jupiter","Saturn","Mars","Venus"],
    answers:"Jupiter"
     
    },
    {question:"How many Earths could fit inside the sun?",
        options:["2 million","1 million","6 million","20 thousand"],
        answers:"2 million"
       
      }, {question:"It takes how many years for a pineapple to grow to its full size?",
      options:["2 years","5 years","3 years","4 years"],
      answers:"3 years"
     
    },
    {question:"Which are the only fruit that sports its seeds on the outside?",
    options:["Strawberries","Bananas","Pomegranate","Oranges"],
    answers:"Strawberries"
     
    },
    {question:"The human brain will triple its size in which year of its life.",
    options:["second","eighteenth","fifteenth","first"],
    answers:"first"
     
    },
  
    {question:"The human body is made up of how many cells?",
        options:[" 40 trillion"," 60 trillion"," 80 million" ,"20 million"],
        answers:"60 trillion"
       
      }, {question:"Your heart beats about 115,000 every day.",
      options:["215,000","115,000","3,0000","4500"],
      answers:"115,000"
     
    },
    {question:"Which are actually fruits, not vegetables>",
    options:["Tomatoes","Lettuce","Cabbage","Asparagus"],
    answers:"Tomatoes"
     
    },
    {question:"Caterpillars have how many eyes?",
    options:["14","12","13","24"],
    answers:"12"
     
    },
    {question:"Which animals eye is bigger than its whole brain?",
    options:["eagle","dog","ostrich","elephant"],
    answers:"ostrich"
     
    },
    {question:"It is impossible to lick your own elbow.",
        options:["elbow","hands","feet","thighs"],
        answers:"elbow"
       
      },
     
    
    {question:"Which birds can fly backwards?",
    options:["hummingbirds","eagle","sparrow","crow"],
    answers:"hummingbirds"},
     
  
    {question:"Humans share what percentage  of their DNA with bananas.",
    options:["50%","20%","30%","45%"],
    answers:"50%"
     
    },
    {question:"It takes how many licks to finish just one scoop of ice cream?",
        options:["100","25","50","60"],
        answers:"50"
       
      }]
//getting elements to display content
  const question_number =document.querySelector(".question_number");//getting elements to display question_number
  const question_=document.querySelector(".question");//getting elements to display question
  const options=document.querySelector(".options");//getting elements to display options
  const answer=document.querySelector(".answer");//getting elements to display answer


let counter = parseInt(localStorage.getItem("counter")) || 0;
//pushing questions into another array
let available_questions=[];
function set_availablequestions(){
for(let i=0;i<5;i++){
available_questions.push(questions[i]);
}
} 
function Result(element){
    console.log("text of clicked option",element)
         
      }
//setting question number on the page
  function set_question(){
    console.log(counter);
  question_number.innerHTML="Question "+(counter+1 )+" Out Of 5";
  
 
  let random=Math.floor(Math.random()*(available_questions.length-1));
  
  let quest1=available_questions[random];

  let quest2=quest1.question;


  const index_question=available_questions.indexOf(quest1);
  available_questions.splice(index_question,1);//removing questions from array so that they dont repeat
//   available_questions.splice(index_question,1)
  question_.innerHTML=quest2;

  //setting options of questions

const option1 = document.querySelector(".option1");
console.log("option 1",option1);
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
const option4 = document.querySelector(".option4");
let correctAnsElement = document.getElementById("correct-ans");



option1.innerHTML = quest1.options[0];
option2.innerHTML = quest1.options[1];
option3.innerHTML = quest1.options[2];
option4.innerHTML = quest1.options[3];
//keeping a record of correct scores
let correct_ans = parseInt(localStorage.getItem("correct_ans")) || 0;
if (isNaN(correct_ans)) {
    correct_ans = 0;
  }

//marking the options corret and incorect
options.addEventListener("click", function(event) {
    const selectedOption = event.target.innerText;
    
    console.log("selected_option",selectedOption,"answer",quest1.answers);

    if (selectedOption === quest1.answers) {
     
        correct_ans++;
       
        localStorage.setItem("correct_ans", correct_ans);
        console.log("correct",correct_ans);
        
     answer.innerHTML="CORRECT ANSWER!"
     correctAnsElement.innerHTML = "Correct answers: " + correct_ans;
    } 
    else
    {
       
        
        
        answer.innerHTML="INCORRECT ANSWER!"
      
      
    }
  });
//STOP DISPLLAYING MORE QUESTIONS ONCE 5 QUESTIONS ARE COMPLETE
  if(counter<5){
  counter++;

}
  else{
   
    correct_ans=0
      counter=0;
     
  }

  }
  //DISPLAYING NEXT QUESTION ON CLICKING NEXT
  function next_question(){
  
  if(counter===5){

    window.location.href = "result.html";
   
    window.location.href = "result.html?correct=" + correct_ans + "&incorrect=" + (5 - correct_ans);
    const urlParams = new URLSearchParams(window.location.search);
const correctAns = urlParams.get('correct');
const incorrectAns = urlParams.get('incorrect');

document.querySelector(".correct_question").innerHTML = correctAns;
document.querySelector(".incorrect_question").innerHTML = incorrectAns;
document.querySelector(".total").innerHTML = correctAns + " out of 5";



   
  }
  else{
  
    answer.innerHTML="";
      set_question();//FUNCTION TO DISPLAY NEW QUESTIONS
  }
  }
 


  window.onload=function(){
    localStorage.setItem("correct_ans", 0);
  localStorage.setItem("incorrect_ans", 0);
      counter=0;
    
    set_availablequestions();
   set_question();
   
  }
  
