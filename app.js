
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

function gameSetup() {
	var divs = document.querySelectorAll('.grid-container div')
    divs.forEach((div) => {
    	div.setAttribute('style', 'background: white');
    });
}

var resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', function(){
        gameSetup();
});

//setup
const gridContainer = document.querySelector('.grid-container');
const GridSide = 16;      // initial gridSide is 4, set the grid attribute to repeat 4x4
gridContainer.setAttribute('style', 'grid: repeat(' + GridSide + ',auto) / repeat(' + GridSide + ',auto)');
const GridTotal = GridSide * GridSide;  

//create grid
//drawGrid(GridSide, GridTotal);

//blackOnHover();

//gameSetup();

