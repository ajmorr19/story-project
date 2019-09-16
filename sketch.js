

function setup() {

  // Change these to change the title and author of the story
  document.getElementById('title').innerHTML="The Three Little Pigs"; // title

  document.getElementById('author').innerHTML="Eric and AJ"; // author


  
  // All of your code goes under here
  

 
 var story = 'Once upon a time, there were 3 little pigs. Each pig had built their own house, one made of straw, one made of sticks, and one made of brick. Then one day a big bad wolf came along and asked the pig living in the straw house to come in. '+ asked() + ''
//the text printed to page


  printToPage(story); // Print the text to the webpage
}

var strength1 = (random(2, 7))
var strength2 = (random(3, 7));
var strength3 = (random(5, 7)); //variables for house strength

// Put your functions below here:


//The wolf asking the 1st pig
function asked() {
  let dice = random(1,6)
  if (dice > 4){
var convinced = true
  }
  if(convinced == true) {
    return "The 1st little pig let the wolf inside and he got eaten. " + asked2();
  } else {
    blowStraw()
    return "The first little pig knew the wolf wanted to eat him so he didn't let him in. " + blowStraw()
  }
}
//The wolf asking the 2nd pig
function asked2() {
  let dice2 = random(1,6)
  if (dice2 > 4){
var convinced2 = true
  }
  if(convinced2 == true) {
    return "The 2nd little pig let the wolf inside and he got eaten. " + asked3();
  } else {
    blowStick()
    return "The 2nd little pig knew the wolf wanted to eat him so he didn't let him in. " + blowStick()
  }
}
//The wolf asking the 3rd pig
function asked3() {
  let dice3 = random(1,6)
  if (dice3 > 5){
var convinced3 = true
  }
  if(convinced3 == true) {
    return "The little final little pig let the wolf inside and he got eaten.";
  } else {
    blowBrick()
    return "The 3rd little pig knew the wolf wanted to eat him so he didn't let him in. " + blowBrick()
  }
}

//The wolf trying to blow the straw house down
function blowStraw() { 
  let dice4 = random(1,6);
  if (strength1 > dice4) 
  return "The wolf tried to to blow the straw house down, but it stayed standing and the wolf moved on to the stick house." + blowStick()
  else {
    return "Then the Wolf blew the straw house down, ate the pig, and  moved on to the stick house. " + blowStick()
  }
}
//The wolf trying to blow the stick house down
function blowStick() {
  let dice5 = random(1,6);
  if (strength2 > dice5) 
  return "The wolf treid to blow the stick house down, but it stayed standing and the wolf moved on to the brick house. " + blowBrick();
  else {
    return "Then the Wolf blew the stick house down, ate the pig, and moved on to the brick house. " + blowBrick()
  }
}
//The wolf trying to blow the brick house down
function blowBrick() {
  let dice6 = random(1,6);
  if (strength3 > dice6) 
  return "The wolf tried to blow the brick house down, but it stayed standing and the wolf left.";
  else {
    return "Finally the Wolf blew the brick house down, ate the pig, and left with a full stomach." 
  }
}


//Don't delete this! (Important stuffz)
function printToPage(story) {
  var para = document.createElement("P");
  var t = document.createTextNode(story);
  para.appendChild(t);
  document.getElementById("story").appendChild(para);
}    