let DEFAULT_SIZE = 40;

window.onload = () => {
    setUpGrid(DEFAULT_SIZE);
    const shakeButton = document.getElementById('shake-button');
    shakeButton.addEventListener('click', clearGrid);
}

function setUpGrid(gridSize) {
    let squareSizeW = 550 / gridSize;
    let squareSizeH = 410 / gridSize;
    const grid = document.querySelector('.grid');
    
    for (let i = 0; i < gridSize*gridSize; i++) {
        const square = document.createElement('div');
        grid.appendChild(square);
        square.style.width = squareSizeW + "px";
        square.style.height = squareSizeH + "px";

        square.addEventListener('mouseover', () => {
            console.log("Square hovered");
            square.style.backgroundColor = 'black';
        });
    }
}

function clearGrid() {
    const squares = document.querySelectorAll('.grid div');
    squares.forEach(square => {
        square.style.backgroundColor = 'white';
    });
}






