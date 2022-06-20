// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

function turnLike(like){
  if(like.textContent === EMPTY_HEART){
    like.textContent = FULL_HEART;
    like.style.color="red";
  }
  else{
    like.textContent = EMPTY_HEART
  }
}
const likes = document.querySelectorAll('.like-glyph');
const blankError = document.querySelector('#modl');
const modalmsg = document.querySelector('#modl-msg');
hiddenError.classList.add('hidden');
likes.forEach((like)=>like.addEventListener('click',()=>{
  mimicServerCall()
  .then(()=> turnLike(like))
  .catch((error)=>display(error));
}));
function display(errorMessage){
  blankError.classList.remove('hidden')
  modalmsg.textContent = errorMessage;
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
