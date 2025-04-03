import { Component, OnInit } from '@angular/core';
import { GameDataService } from '../game-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  imports: [CommonModule],
})
export class GameComponent implements OnInit {
  buttons: string[] = [];
  functions: Function[] = [];
  text: string = '';

  constructor(public gameData: GameDataService) {}

  ngOnInit(): void {
    this.updateGameState();
  }

  updateGameState() {
    const state = this.gameData.update(this.gameData.locations[0]);
    this.buttons = state.buttons;
    this.functions = state.functions;
    this.text = state.text;
  }

  onButtonClick(index: number) {
    this.functions[index]();
    this.updateGameState();
  }
}
