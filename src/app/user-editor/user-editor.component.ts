import { AppComponent } from './../app.component';
import { UserData } from './../userData';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.css'],
})
export class UserEditorComponent implements OnInit {

  @Input() user:UserData = new UserData("test dummy");

  OnSubmitChanges(data:any){
    //Temporary testing to show in broswer console that it works
    console.log(data.value.fname);
    console.log(data.value);

    //This adjusts the local instance not the database instance; may be better to update the db then just retrieve the updated entry;
    this.user.name = data.value.fname;
    this.user.elname = data.value.lname;
    this.user.homeAddress1 = data.value.homeAddress1;
    this.user.homeAddress2 = data.value.homeAddress2;
    this.user.city = data.value.city;
    this.user.state = data.value.state;

    //change the database below
    //
    //A guess at what the SQL statement will look like
    //
    //UPDATE userTable SET firstName = data.value.fname, lastName = data.value.lname WHERE memberID = user.memberID
    //
    //where userTable is a table containing users in the database and firstName and lastName are columns in that table.

    console.log("before: " + this.mainApp.editorMode);
    this.mainApp.editorMode = false;
    console.log("after: " + this.mainApp.editorMode);
  }

  public Cancel(){
    this.mainApp.editorMode = false;
  }

  constructor(private mainApp:AppComponent) { }

  ngOnInit() {
  }

}
