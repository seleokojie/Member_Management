import { AppComponent } from './../app.component';
import { UserData } from './../userData';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  //THIS CAN BE CODED OUT; JUST USE THE userData variable instead
  // name:string = "no name set"
  // photoRef:string = ""//string reference to the photo
  // visited:boolean = false;//false by default?

  // //IDs (should each of these IDs exist/be stored in the user's info?  I think yes (discuss with group))
  // familyID:number = 0//0 can be the default family id for UNSORTED
  // sarangbangID:number = 0;
  // mokjangID:number = 0;

  //default values for the varialbe userData of type UserData.  this class can be found in src/app/userData.ts
  @Input() userData:UserData = new UserData("Unset User Data");

  OnChooseUser(){
    this.app.selectedUser = this.userData;
    this.app.editorMode = true;
  }

  constructor(private app:AppComponent){

  }

  ngOnInit() {
  }

}
