import { ApiService } from './../api.service';
import { UserEntity } from './../userEntity';
import { AppComponent } from './../app.component';
import { Component, Inject, Input, OnInit } from '@angular/core';
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

    //Names
    this.user.efname = data.fname;
    this.user.elname = data.lname;
    this.user.kfname = data.kfname;

    //Address
    this.user.homeaddressstreetname1 = data.homeAddress1;
    this.user.homeaddresscity = data.city;
    this.user.homeaddressstate = data.state;
    this.user.homeaddresszipcode = data.zipcode;

    //IDs
    this.user.mokjang_id = data.mokjang_id;
    this.user.sarangbang_id = data.sarangbang_id;
    this.user.householdid = data.family_id;

    //Contact Info
    this.user.homeemail = data.email;
    this.user.mobilephonenumber = data.phone;

    //Other
    this.user.visitation = data.visitation;

    //Update the member
    var temp = this.apiService.UpdateMember(this.user);

    //Console Info
    console.log(this.user);
    console.log("Testing: " + this.user.member_id);
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
