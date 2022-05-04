import { ApiService } from './../api.service';
import { UserEntity } from './../userEntity';
import { AppComponent } from './../app.component';
import { UserData } from './../userData';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.css'],
})
export class UserEditorComponent implements OnInit {

  @Input() user:UserEntity = new UserEntity();

  OnSubmitChanges(data:any){
    //Temporary testing to show in broswer console that it works
    console.log(data);
    console.log(data.value);
    console.log(data.value as UserEntity);

    //This adjusts the local instance not the database instance; may be better to update the db then just retrieve the updated entry;
    this.user.first_name = data.fname;
    this.user.last_name = data.lname;
    this.user.address = data.homeAddress1;
    // this.user.homeAddress2 = data.homeAddress2;
    this.user.city = data.city;
    this.user.state = data.state;
    console.log(this.user);
    console.log("Testing: " + this.user.id);

    var temp = this.apiService.UpdateMember(this.user);
    console.log(temp);
  }

  public Cancel(){
    this.mainApp.editorMode = false;
  }

  constructor(private mainApp:AppComponent, private apiService: ApiService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log(this.data.user);
    this.user = this.data.user;
  }

}
