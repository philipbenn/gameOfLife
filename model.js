// Model
class GameOfLife {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.grid = this.createGrid();
  }

  createGrid() {
    let grid = new Array(this.rows);
    for (let i = 0; i < this.rows; i++) {
      grid[i] = new Array(this.cols).fill(false);
    }
    return grid;
  }

  updateGrid() {
    let newGrid = this.createGrid();
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        const neighbors = this.countNeighbors(i, j);
        if (this.grid[i][j]) {
          if (neighbors < 2 || neighbors > 3) {
            newGrid[i][j] = false; // Dies
          } else {
            newGrid[i][j] = true; // Lives on
          }
        } else {
          if (neighbors === 3) {
            newGrid[i][j] = true; // Born
          } else {
            newGrid[i][j] = false; // Stays dead
          }
        }
      }
    }
    this.grid = newGrid;
  }

  countNeighbors(x, y) {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        const row = (x + i + this.rows) % this.rows;
        const col = (y + j + this.cols) % this.cols;
        if (this.grid[row][col]) {
          count++;
        }
      }
    }
    if (this.grid[x][y]) {
      count--; // Exclude self
    }
    return count;
  }

  writeToCell(row, col, value) {
    this.grid[row][col] = value;
  }

  readFromCell(row, col) {
    return this.grid[row][col];
  }
}
