/* JavaScript DOM Exercises Santito */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/
var words = document.querySelector("p").innerHTML;
let size = 8
var splited = words.split(" ").map(word => word.length > 8 ? `<span style="background-color: yellow">${word}</span>` : word)
let join = splited.join(" ")
document.querySelector("p").innerHTML = join
/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (https://forcemipsum.com/)
*/

let link = document.createElement("a")
link.href  = "https://forcemipsum.com/"
link.textContent = "Esto es un link"
document.body.appendChild(link)


/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/



/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/

var words = document.querySelector("p")
var splitText = words.innerHTML.split(" ")
let count = splitText.filter(wor => wor !== '').length;
let heading = document.querySelector("h1")
let countWords = document.createElement("div")
countWords.textContent="Number of words: "+count
document.body.insertBefore(countWords,words)


/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/

var text = document.querySelector("p").innerHTML
document.querySelector("p").innerHTML=text.replace(/\?/g, '🤔').replace(/\!/g, '😲');
