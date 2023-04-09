import { Component, OnInit } from '@angular/core';

interface Cell {
  image: string;
  isWinner: boolean;
}

@Component({
  selector: 'app-tesoro',
  templateUrl: './tesoro.component.html',
  styleUrls: ['./tesoro.component.scss']
})
export class TesoroComponent implements OnInit {

  board: Cell[][] = [];
  attempts = 0;
  rows = 0;
  cols = 0;
  imgXUrl = '../assets/x.png';
  imgChestUrl = '../assets/price.png';
  imgSkullUrl = './assets/skull.png';
  winnerCoor = { x: 0, y: 0 };
  gameIsOver = false;

  ngOnInit() {}

  drawBoard() {
    this.board = []; // resetear el tablero
    this.gameIsOver = false;
    this.attempts = 0;
    this.setRandomBoatCoor(this.rows, this.cols);
  
    for (let i = 0; i < this.rows; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < this.cols; j++) {
        const cell: Cell = {
          image: this.imgXUrl,
          isWinner: i === this.winnerCoor.x && j === this.winnerCoor.y
        };
        row.push(cell);
      }
      this.board.push(row);
    }
  }


  checkShot(cell: Cell, i: number, j: number) {
    if (!this.gameIsOver) {
      this.attempts++;
      cell.image = cell.isWinner ? this.imgChestUrl : this.imgSkullUrl;
      if (cell.isWinner) {
        setTimeout(() => {
          alert('¡Enhorabuena! ¡Has ganado!');
          this.gameIsOver = true;
        }, 200);
      }
    }
  }

  setRandomBoatCoor(maxRows: number, maxCols: number) {
    this.winnerCoor.x = Math.floor(Math.random() * maxRows);
    this.winnerCoor.y = Math.floor(Math.random() * maxCols);
  }
}
