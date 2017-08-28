var pickButton;
var pairButton;
var header;
var body;
var choice;
var aList;


var students = [
  "Kevin",
  "Jonathan",
  "Angel",
  "Eric",
  "Janette",
  "Desmond",
  "Ashiya",
  "Monica",
  "Susana",
  "Deborah",
  "Thomas",
  "Julissa",
  "Kyla",
  "John",
  "Shonica",
  "Krystal"
];



var studentsBackup = students.slice()
var studentsPair = students.slice()


var colors = [
  'hotpink',
  'orange',
  'green', 0,
  'red', 0,
  'White'
];
var cur = 0;

document.addEventListener('DOMContentLoaded', () => {
  console.log('hello rand.js');

  body = document.getElementById('body');
  header = document.getElementById('header');
  pickButton = document.getElementById('pickButton');
  pairButton = document.getElementById('pairButton');
  choice = document.getElementById('choice');
  aList = document.getElementById('aList');
  titles = document.getElementById('title')
  pickButton.addEventListener('click', pickOnClick );
  pairButton.addEventListener('click', pairOnClick ) ;
  aList.addEventListener('click', aListOnClick );

  // build the attendance list
  for (let i=0; i<students.length; i++) {
    let li = document.createElement('li');
    li.innerText = students[i];
    aList.append(li);
  }
});
var pickOnClick = function (event) {
  choice.innerHTML = '&nbsp;'
  var rand = students.splice(Math.floor(Math.random() * students.length),1);
  if (students.length === 0) {
    students = studentsBackup.slice()
    }
  var x = window.setInterval(() => {
    if (colors[cur] === undefined) {
    //body.style.backgroundColor = '#ffd700'
      window.clearInterval(x);
      cur = 0;
      if ( rand[0].length % 2 === 0 ) {
        rand[0] = rand[0] + '!';
        choice.innerText = rand;
      } else {
        choice.innerText = rand;
      }
       return;
    }
    if (colors[cur-1]) header.style.color = colors[cur-1];
    if (colors[cur]) body.style.backgroundColor = colors[cur];
    cur += 1;
  }, 200);
}

var pairOnClick = function (event) {
  choice.innerHTML = '&nbsp;'
  if (studentsPair.length < 2) {
    studentsPair = studentsBackup.slice()
    }
  var rand = studentsPair.splice(Math.floor(Math.random() * studentsPair.length - 1 ),1);
  var rand1 = studentsPair.splice(Math.floor(Math.random() * studentsPair.length - 1),1);
  var x = window.setInterval(() => {
    if (colors[cur] === undefined) {
      window.clearInterval(x);
      cur = 0;
      if ( rand[0].length % 2 === 0 ) {
        rand[0] = rand[0] + '!';
        rand1[0] = rand1[0] + '! '
        choice.innerHTML = rand +  ' &hearts; '  + rand1;
      } else {
        choice.innerHTML= rand + ' &hearts; '  + rand1;
      }
       return;
    }
    if (colors[cur-1]) header.style.color = colors[cur-1];
    if (colors[cur]) body.style.backgroundColor = colors[cur];
    cur += 1;
  }, 200);
}
var aListOnClick = function (event) {
  if (event.target.tagName === 'LI') {
    event.target.style.textDecoration = 'line-through';
  }
}

