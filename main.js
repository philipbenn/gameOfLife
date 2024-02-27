// Main
const rows = 30;
const cols = 30;
const model = new GameOfLife(rows, cols);
const view = new GameView("grid-container", rows, cols);
const controller = new GameController(model, view);

view.controller = controller;

view.render(model.grid);

controller.startGame();
