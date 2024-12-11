// Function to create the grid with a given number of squares per side
function createGrid(sideLength = 16) {
    const gridContainer = document.getElementById('grid-container');
    gridContainer.innerHTML = ''; // Clear any existing grid

    // Ensure the grid container width and height stay fixed at 960px
    const gridSize = 960;
    const squareSize = gridSize / sideLength; // Calculate the size of each square dynamically

    // Create the grid squares
    for (let i = 0; i < sideLength * sideLength; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.style.width = `${squareSize}px`;
        gridSquare.style.height = `${squareSize}px`;

        // Add hover event listeners to each square
        gridSquare.addEventListener('mouseenter', () => {
            gridSquare.style.backgroundColor = '#ff6347'; // Red color for trail effect
        });

        gridContainer.appendChild(gridSquare);
    }
}

// Clear the grid and reset the colors
function clearGrid() {
    const squares = document.querySelectorAll('.grid-square');
    squares.forEach(square => {
        square.style.backgroundColor = 'lightblue'; // Reset to default color
    });
}

// Create the initial grid (default 16x16)
createGrid();

// Attach event listener to the "Clear" button
document.getElementById('clear-btn').addEventListener('click', clearGrid);

// Attach event listener to the "New Grid" button
document.getElementById('new-grid-btn').addEventListener('click', () => {
    // Prompt user for the number of squares per side (between 1 and 100)
    let newSize = prompt('Enter the number of squares per side (max 100):');

    // Validate the input (must be a number between 1 and 100)
    newSize = parseInt(newSize);
    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert('Please enter a valid number between 1 and 100.');
    } else {
        createGrid(newSize); // Create a new grid with the specified size
    }
});
