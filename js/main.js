var parentTop = document.querySelector('body');

var container = document.createElement('div');
container.classList.add('container');
parentTop.appendChild(container);

var containerRight = document.createElement('div');
containerRight.classList.add('containerRight');
container.appendChild(containerRight);

function newDiv() {
    for(let i = 0; i < 16; i++){
        for(let j = 0; j < 16; j++){
            var square = document.createElement('div');
            square.classList.add('square');
            containerRight.appendChild(square);

            square.addEventListener('mouseover', e => {
                e.target.style.backgroundColor = 'rgba(245, 110, 0, 0.473)';
            });

            square.addEventListener('click', e => {
                e.target.style.backgroundColor = 'white';
            });
        }
    }
}

newDiv();

var containerLeft = document.createElement('div');
containerLeft.classList.add('containerLeft');
container.appendChild(containerLeft);

var textTop = document.createElement('h1');
textTop.textContent = 'Sketch';
containerLeft.appendChild(textTop);

var buttonUserValue = document.createElement('button');
buttonUserValue.textContent = 'Enter The New Grid';
buttonUserValue.classList.add('userValue');
containerLeft.appendChild(buttonUserValue);

var buttonReset = document.createElement('button');
buttonReset.textContent = 'Reset';
buttonReset.classList.add('reset');
containerLeft.appendChild(buttonReset);

function userInput(totalSquares){
    containerRight.innerHTML = "";
    for(let i = 0; i < totalSquares; i++){
        for(let j = 0; j < totalSquares; j++){
            var square = document.createElement('div');
            square.classList.add('square');
            containerRight.appendChild(square);

            let calculate = 40 / totalSquares;
            square.style.width = calculate + "rem";
            square.style.height = calculate + "rem";

            square.addEventListener('mouseover', e => {
                e.target.style.backgroundColor = 'rgba(245, 110, 0, 0.473)';
            });

            square.addEventListener('click', e => {
                e.target.style.backgroundColor = 'white';
            });
        }
    }
}

buttonUserValue.addEventListener('click', () => {
    let newGrid = parseInt(prompt('Enter the new grid value'));
    userInput(newGrid);
});

buttonReset.addEventListener('click', () => {
    let reset = document.querySelectorAll('.square');
    reset.forEach(square => {
        square.style.backgroundColor = 'white';
    })
})

