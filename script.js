// A variable can store information and use it later. The value stored in variables can be changed and saved as well.
let backgroundColor = 0

// These event listeners connect certain HTML tags to specific Javascript functions.
document.getElementById('feedback1').addEventListener('click', thankYou)

// The name in the first bracket and quotes is the id name of the HTML tag that needs to be connected to the function.
document.getElementById('feedback2').addEventListener('click', improve)

// The word in the second set of brackets and quotes is the type of event that the event listener is waiting for, in this case, a click.
document.getElementById('submit').addEventListener('click', note)

// The word after that 'click' is the name of the function that is connected to this event listener.
document.getElementById('background').addEventListener('click', color)

// This function displays a thank you message when the user clicks the 'It was great!' button with id 'feedback'.
function thankYou () {
  // In the element with id 'reveal', which is an empty paragraph tag, it will display the thank you text below.
  document.getElementById('reveal').innerHTML = 'Thank you very much for your feedback. Have a great day!'
  // Also, if the person clicked the other button before, then clicking this button will make both of these vanish, and only keep the thank you message.
  document.getElementById('improvement').style.display = 'none'
  document.getElementById('submit').style.display = 'none'
}

// This function, which is connected to the 'Needs Improvement' button, will display an input box for the user to input their feedback and click a submit button.
function improve () {
  // This makes the input box appear by changing its display from 'none' to 'block'.
  document.getElementById('improvement').style.display = 'block'
  // This adds some text to an empty paragraph tag, telling the user to input their feedback in the input box.
  document.getElementById('reveal').innerHTML = 'Tell us more about what can be done.'
  // This makes the submit button appear by hanging its display from 'none' to 'block'.
  document.getElementById('submit').style.display = 'block'
}

// This function is connected to the 'Submit Feedback' button.
function note () {
  // This will make an alert appear telling the user that their feedback has been noted by displaying the text below/
  alert('Your feedback has been noted and will be looked at soon. Thank you.')
  // No matter which button the user clicks, the 'It was great' button or the 'Needs Improvement' button, they will get a thank you message at the end, by adding the text below to the empty paragraph tag with id 'reveal'.
  document.getElementById('reveal').innerHTML = 'Thank you very much for your feedback. Have a great day!'
}

// This last function is connected to the background-changing button near the top of the webpage.
function color () {
  // If the 'backgroundColor' variable is equal to 0 (false) when the button is clicked, then change the body background color to light blue.
  if (backgroundColor === 0) {
    document.body.style.background = 'lightBlue'
    // Also, change the 'backgroundColor' value to 1, or true. This way, the next time the button is clicked, the else statement below will be applied.
    backgroundColor = 1
  } else {
    // Otherwise, if the 'backgroundColor' value is equal to 1 (true) when the button is clicked, then change the body background color to white.
    document.body.style.background = 'white'
    // Also, change the backgroundColor variable value to 0, or false, so that the next time the button is clicked, the body background color can change again.
    // This creates a back and forth volley, allowing the background color to be changed again and again between these two colors while only using one button.
    backgroundColor = 0
  }
}
