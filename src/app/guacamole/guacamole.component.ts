import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guacamole',
  templateUrl: './guacamole.component.html',
  styleUrls: ['./guacamole.component.scss'],
})
export class GuacamoleComponent implements OnInit {
  squares = Array(9).fill(null);
  timeLeft = 30;
  score = 0;
  hitPosition: number | null = null;
  gameOver = false;
  randomSquareInterval: any;
  countDownInterval: any;
  gameStarted = false;
  isGameInProgress = false;

  ngOnInit() {
    this.addSquaresListeners();
  }

  startGame() {
    this.randomSquareInterval = setInterval(() => this.randomSquare(), 1000);
    this.countDownInterval = setInterval(() => this.countDown(), 1000);
    this.gameOver = false;
    this.score = 0;
    this.timeLeft = 30;
    this.isGameInProgress = true;
  }

  randomSquare() {
    for (let i = 0; i < this.squares.length; i++) {
      this.squares[i] = null;
    }
    const randomNumber = Math.floor(Math.random() * 9);
    this.squares[randomNumber] = true;
    this.hitPosition = randomNumber;
  }

  addSquaresListeners() {}

  handleSquareClick(i: number) {
    console.log(this.hitPosition);
    if (i === this.hitPosition) {
      this.score += 1;
      this.hitPosition = null;
    }
  }

  countDown() {
    this.timeLeft -= 1;

    if (this.timeLeft === 0) {
      clearInterval(this.randomSquareInterval);
      clearInterval(this.countDownInterval);
      this.gameOver = true
      this.isGameInProgress = false;
    }
  }
}