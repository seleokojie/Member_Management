import { Sarangbang } from './sarangbang';
import { Family } from './family';
import { UserData } from './userData';
import { Component } from '@angular/core';
import { MokjangSelectComponent } from './mokjang-select/mokjang-select.component';
import { SarangbangComponent } from './Sarangbang/Sarangbang.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  users:UserData[] = [new UserData("New User 1"), new UserData("New User 2"), new UserData("New User 3")];
  families:Family[] = [];
  sarangbangs:Sarangbang[] = [new Sarangbang("Testing sarangbang 1", 1), new Sarangbang("Testing sarangbang 2", 2), new Sarangbang("Testing sarangbang 3", 3)];


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
