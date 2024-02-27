// View
class GameView {
  constructor(containerId, rows, cols) {
    this.container = document.getElementById(containerId);
    this.rows = rows;
    this.cols = cols;
    this.cellSize = 20;

    this.controller = null;

    this.container.addEventListener("click", this.handleCellClick.bind(this));
  }

  handleCellClick(event) {
    console.log("Cell clicked");
    const cellIndex = this.getCellIndex(event.target);
    console.log("Clicked cell index:", cellIndex);
    if (cellIndex !== null && this.controller) {
      const [row, col] = cellIndex;
      this.controller.toggleCell(row, col);
    }
  }

  getCellIndex(target) {
    const row = parseInt(target.dataset.row);
    const col = parseInt(target.dataset.col);
    if (
      !isNaN(row) &&
      !isNaN(col) &&
      row >= 0 &&
      row < this.rows &&
      col >= 0 &&
      col < this.cols
    ) {
      return [row, col];
    }
    return null;
  }

  render(grid) {
    this.container.innerHTML = "";
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        const cell = document.createElement("div");
        cell.style.width = this.cellSize + "px";
        cell.style.height = this.cellSize + "px";
        cell.style.display = "inline-block";
        cell.style.margin = "0 1px 0 1px";
        cell.style.border = "1px solid #ddd";
        cell.className = grid[i][j] ? "alive" : "dead";
        cell.dataset.row = i;
        cell.dataset.col = j;
        this.container.appendChild(cell);
      }
      this.container.appendChild(document.createElement("br"));
    }
  }
}
