import { UserData } from './../userData';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {

  familyMembers:UserData[] = [new UserData("mem1"), new UserData("mem2"), new UserData("mem3")];
  familyHead:UserData = new UserData("Family Head");

  constructor() { }

  ngOnInit() {
  }

}
