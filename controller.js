// Controller
class GameController {
    constructor(model, view) {
      this.model = model;
      this.view = view;
      this.speed = 1000;
      this.intervalId = null;
      this.generationCount = 0;
  
      document
        .getElementById("start")
        .addEventListener("click", this.startGame.bind(this));
      document
        .getElementById("pause")
        .addEventListener("click", this.pauseGame.bind(this));
      document
        .getElementById("step")
        .addEventListener("click", this.stepForward.bind(this));
      document
        .getElementById("clear")
        .addEventListener("click", this.resetGame.bind(this));
    }
  
    startGame() {
      if (!this.intervalId) {
        this.intervalId = setInterval(() => {
          this.model.updateGrid();
          this.view.render(this.model.grid);
          this.updateGenerationCount();
        }, this.speed);
      }
    }
  
    pauseGame() {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  
    stepForward() {
      this.model.updateGrid();
      this.view.render(this.model.grid);
      this.updateGenerationCount();
    }
  
    updateGenerationCount() {
      this.generationCount++;
      document.getElementById("generation-counter").innerText = this.generationCount;
    }
  
    resetGame() {
      this.pauseGame();
      this.model.grid = this.model.createGrid();
      this.view.render(this.model.grid);
      this.generationCount = 0;
      document.getElementById("generation-counter").innerText = this.generationCount;
    }
  
    toggleCell(row, col) {
      this.model.writeToCell(row, col, !this.model.readFromCell(row, col));
      this.view.render(this.model.grid);
    }
  }
  