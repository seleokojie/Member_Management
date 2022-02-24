import { Component, Input, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { UserData } from '../userData';

@Component({
  selector: 'app-Sarangbang',
  templateUrl: './Sarangbang.component.html',
  styleUrls: ['./Sarangbang.component.css']
})
export class SarangbangComponent implements OnInit {

  @Input() sbangName:string ="Unset Sarangbang Name";

  //a test user
  @Input() public userDataArray:UserData[] = [];

  constructor() { }

  ngOnInit() {
  }

}
