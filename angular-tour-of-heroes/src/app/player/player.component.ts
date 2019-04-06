import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PLAYERS } from '../mock-player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  selectedPlayer:Player;
  players:Player[]=PLAYERS;

  constructor() { }

  ngOnInit() {
  }

  onSelect(player:Player){
    this.selectedPlayer=player
  }

}
