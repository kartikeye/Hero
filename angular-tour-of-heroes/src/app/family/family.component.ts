import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import {Members} from '../mock-members'
@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {
  members:Member[]=Members;
  selectedMember;//important: we need to store selected member when the user clicks the member in UI
  constructor() { }

  ngOnInit() {
  }
  
  onSelect(member){
    this.selectedMember=member;
}
}
