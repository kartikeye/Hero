import { Component, OnInit } from '@angular/core';
import { BATSMEN } from '../mock-batsman';
import { Batsman } from '../batsman';

@Component({
  selector: 'app-batsman',
  templateUrl: './batsman.component.html',
  styleUrls: ['./batsman.component.css']
})
export class BatsmanComponent implements OnInit {

  batsmen:Batsman[] = BATSMEN;
  selectedBatsman:Batsman;

  constructor() { }

  ngOnInit() {
  }
  onSelect(batsman:Batsman){
    this.selectedBatsman=batsman;
  }
}
