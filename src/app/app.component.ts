import { ApiService } from './api.service';
import { ProfileComponent } from './profile/profile.component';
import { Sarangbang } from './sarangbang';
import { Family } from './family';
import { UserData } from './userData';
import { Component, Output } from '@angular/core';
import { MokjangSelectComponent } from './mokjang-select/mokjang-select.component';
import { SarangbangComponent } from './Sarangbang/Sarangbang.component';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { UserEntity } from './userEntity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  tempUser: UserEntity = new UserEntity();
  constructor(public dialog: MatDialog, private apiService: ApiService) {}

  //This example shows how from an observable we can 'subscribe'; put the 'result' into a user and consoleLog that user
  testConnection() {
    this.apiService.testConnection().subscribe((result) => {
      console.log(result);
      var user: UserEntity = result;
      console.log(user.first_name);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProfileComponent, {
      // width: '250px',
      // maxHeight: '95vh',
      // data: {name: this.name, animal: this.animal}
      data: { name: this.tempUser.first_name },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  users: UserEntity[] = [
    new UserEntity(),
    new UserEntity(),
    new UserEntity(),
    new UserEntity()
  ];
  families: Family[] = [];
  sarangbangs: Sarangbang[] = [
    new Sarangbang('Sarangbang Name 1', 1),
    new Sarangbang('Sarangbang Name 2', 2),
    new Sarangbang('Sarangbang Name 3', 3),
  ];

  editorMode: boolean = false;
  user: UserData = new UserData('new name');

  selectedUser: UserData = new UserData('n/a');

  public SelectUser(e: any) {
    this.selectedUser = e as UserData;
    console.log('selected: ' + (e as UserData).name);
    this.editorMode = true;
  }

  public CreateTestUser() {
    var user: UserEntity = new UserEntity();
    user.first_name = 'TEST NAME';
    user.address = 'TEST ADDRESS';
    this.apiService.CreateUser(user);
  }

  userByID : UserEntity = new UserEntity();

  public GetUserByID(id:number){
    this.apiService.GetMemberByID(id);
  }

  public OnUserClick() {}

  public GetMokjangUsers(mokjang: Number) {
    // SQLQuerry = "SELECT * FROM user.db WHERE mokjangID=mokjang"; //this querry should get all users with mokjangID = mokjang
  }

  public getSarangbangUsers(sarangbang: number) {
    // SQLQuerry = "SELECT * FROM user.db WHERE sarangbangID=sarangbang"; //this querry should get all users with sarangbangID = sarangbang
  }

  public getFamilyUsers(family: number) {
    // SQLQuerry = "SELECT * FROM user.db WHERE familyID=family"; //this querry should get all users with familyID = family
  }

  public mokjangSelect: MokjangSelectComponent = new MokjangSelectComponent();
}
