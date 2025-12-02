const container = document.querySelector("#container");
const btn = document.querySelector("#resize-btn");


function createGrid(size) {
    container.innerHTML = "";

    
    const squareSize = 960 / size;

    
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        
       
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        
        square.addEventListener("mouseover", function(event) {
            event.target.style.backgroundColor = "black";
        });

        container.appendChild(square);
    }
}

btn.addEventListener("click", function() {
    let newSize = prompt("Enter new grid size (max 100):");

    newSize = parseInt(newSize);

    if (newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert("Please enter a valid number between 1 and 100!");
    }
});

createGrid(16);