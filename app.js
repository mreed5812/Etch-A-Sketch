
document.addEventListener("DOMContentLoaded", function(){
    drawGrid(GridSide, GridTotal);
    blackOnHover();
});

function drawGrid(gridSide, gridTotal) {
    for(i=0; i<gridTotal; i++){
        div = document.createElement('div')
        div.setAttribute('id', 'gridBox')
        gridContainer.appendChild(div);
    }
    gridContainer.setAttribute('style', 'grid: repeat(' + gridSide + ',auto) / repeat(' + gridSide + ',auto)')
}

function blackOnHover() {
    var divs = document.querySelectorAll('.grid-container div');
    divs.forEach((div) => {
        div.addEventListener('mouseover', function(e) {
            e.target.setAttribute('style', 'background: black');
        });
    });
}

function rainbow() {
    var divs = document.querySelectorAll('.grid-container div');
    divs.forEach((div) => {
        div.addEventListener('mouseover', function(e) {
            e.target.setAttribute('style', 'background:' + getRandomColor());
        });
    });
}

function erase(){
    var divs = document.querySelectorAll('.grid-container div');
    divs.forEach((div) => {
        div.addEventListener('mouseover', function(e) {
            e.target.setAttribute('style', 'background: white');
        });
    });
}

function gameSetup() {
	var divs = document.querySelectorAll('.grid-container div')
    divs.forEach((div) => {
    	div.setAttribute('style', 'background: white');
    });
    blackOnHover();
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


var resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', function(){
        gameSetup();
    });

var rainbowButton = document.getElementById('rainbow');
    rainbowButton.addEventListener('click', function(){
        rainbow();
    });

var eraserButton = document.getElementById('erase');
    eraserButton.addEventListener('click', function(){
        erase();
    });

var blackButton = document.getElementById('black');
    blackButton.addEventListener('click', function(){
        blackOnHover();
    });

//setup
const gridContainer = document.querySelector('.grid-container');
const GridSide = 16;      // initial gridSide is 4, set the grid attribute to repeat 4x4
gridContainer.setAttribute('style', 'grid: repeat(' + GridSide + ',auto) / repeat(' + GridSide + ',auto)');
const GridTotal = GridSide * GridSide;  
