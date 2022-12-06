// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
//Get the class with the heart
const heartLike =document.getElementsByClassName("like-glyph");

//Add an event Listener
for(const glyph of heartLike){
  glyph.addEventListener('click',likeFunc);

}

//createthe likeFunc that takes an event as a parameter

function likeFunc(e){
  //since heart is the target
  const heart=e.target;

  mimicServerCall('url')
  .then(function(){
    //conditions
    if(heart.innerText === EMPTY_HEART){
      heart.innerText=FULL_HEART;
      heart.ClassName ='activated-heart'
    }
    else{
      heart.innerText=EMPTY_HEART
      heart.classname='';
    }
  })
  //for the errors
  .catch(function(error){
    const modal=document.getElementById('modal')
    modal.className =''
    modal.innerText =error;
    //setting timeout
    setTimeout(() =>modal.className ='hidden',300)

  })
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
