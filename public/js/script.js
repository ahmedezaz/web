// Splash Screen
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=> {

  setTimeout(()=>{

    logoSpan.forEach((span, idx)=>{
      setTimeout(()=>{
        span.classList.add('active');
      }, (idx + 1) *400)
      });
    
 


  setTimeout(()=>{

    logoSpan.forEach((span, idx)=>{
      setTimeout(()=> {
      span.classList.remove('active');
      span.classList.add('fade');
    }, (idx + 1) *50)
      });

    
  }, 2000);

  setTimeout(()=>{
    intro.style.top='-100vh';
  }, 2300)

}); 



})













const  navbarToggle = document.getElementsByClassName('navbar-toggle')[0];

const  navbarContent = document.getElementsByClassName('navbar-content')[0];


// const test = document.getElementsByClassName('nabvar-content')[0];

navbarToggle.addEventListener('click', () => {
    navbarContent.classList.toggle('active');
})


// Guess the number game
let randomNumber = Math.floor(Math.random() * 100) + 1
    console.log('Random Number', randomNumber)

    let count = 0;

    function fun(){  
      // const randomNumber = Math.floor(Math.random() * 100) + 1
        
      document.getElementById("game").reset();  
      feedback.classList.remove("green");
      feedback.classList.remove("red");
      feedback.textContent = "";
      count = 0;
      randomNumber = Math.floor(Math.random() * 100) + 1
      console.log('Random Number', randomNumber)

      
    } 

document.getElementById('submitGuess').addEventListener('click', () => {
   
    count += 1;

    console.log("CLICK COUNT: " +count);
    let myGuess = guess.value
    if (myGuess == randomNumber) {
      feedback.innerHTML = "You got it right!"+ "</br>" + "The number is: " + randomNumber;
      feedback.classList.remove("red");
      feedback.classList.remove("white");
      feedback.classList.add("green"); 
      count = 0;
      // randomNumber = Math.floor(Math.random() * 100) + 1
      // console.log('Random Number', randomNumber)
    } else if (myGuess > randomNumber && count <= 3) {
      feedback.innerHTML = "Your guess was " + myGuess + ". That's too high."+ "</br>"+"You left " + (3 - count) + " attempt" + "</br>"+ "Try Again!";
      feedback.classList.remove("green");
      feedback.classList.remove("white");
      feedback.classList.add("red");

      if(count == 3){
        alert("GAME OVER");
        document.getElementById("game").reset();  
        feedback.classList.remove("green");
        feedback.classList.remove("red");
        feedback.classList.add("white");
        feedback.textContent = "MESSAGE";
        feedback.textContent = "";
        randomNumber = Math.floor(Math.random() * 100) + 1
      console.log('Random Number', randomNumber)

      }
  
    } else if (myGuess < randomNumber) {
      feedback.innerHTML = "Your guess was " + myGuess + ". That's too low."+ "</br>"+ "You left " + (3 - count) + " attempt" + "</br>"+ "Try Again!";
     feedback.classList.remove("green");
     feedback.classList.remove("white");
     feedback.classList.add("red");

     if(count == 3){
      alert("GAME OVER");
      document.getElementById("game").reset();  
      feedback.classList.remove("green");
      feedback.classList.remove("red");
      feedback.classList.add("white");
      feedback.textContent = "MESSAGE";
      feedback.textContent = "";
      randomNumber = Math.floor(Math.random() * 100) + 1
      console.log('Random Number', randomNumber)

    }
   }
  
})
// document.getElementById('submitGuess').addEventListener('click', checkGuess);



  


   