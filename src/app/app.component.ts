import { Sarangbang } from './sarangbang';
import { Family } from './family';
import { UserData } from './userData';
import { Component, Output } from '@angular/core';
import { MokjangSelectComponent } from './mokjang-select/mokjang-select.component';
import { SarangbangComponent } from './Sarangbang/Sarangbang.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  users:UserData[] = [new UserData("First Name"),new UserData("First Name"),new UserData("First Name"),new UserData("First Name"),new UserData("First Name"),new UserData("First Name"),new UserData("First Name"),new UserData("First Name"),new UserData("First Name"), ];
  families:Family[] = [];
  sarangbangs:Sarangbang[] = [new Sarangbang("Sarangbang Name 1", 1), new Sarangbang("Sarangbang Name 2", 2), new Sarangbang("Sarangbang Name 3", 3)];

  editorMode:boolean = false;

  selectedUser:UserData = new UserData("n/a");

  public SelectUser(e:any){
    this.selectedUser = e as UserData;
    console.log("selected: " + (e as UserData).name);
    this.editorMode = true;
  }


  public GetMokjangUsers(mokjang:Number){
    // SQLQuerry = "SELECT * FROM user.db WHERE mokjangID=mokjang"; //this querry should get all users with mokjangID = mokjang
  }

  public getSarangbangUsers(sarangbang:number){
    // SQLQuerry = "SELECT * FROM user.db WHERE sarangbangID=sarangbang"; //this querry should get all users with sarangbangID = sarangbang
  }


  public getFamilyUsers(family:number){
    // SQLQuerry = "SELECT * FROM user.db WHERE familyID=family"; //this querry should get all users with familyID = family
  }

  public mokjangSelect:MokjangSelectComponent = new MokjangSelectComponent();
  constructor(){

  }
}
