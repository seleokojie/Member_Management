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
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  tempUser: User = new User();
  constructor(public dialog: MatDialog, private apiService: ApiService) {}

  testConnection() {
    this.apiService.testConnection().subscribe((result) => {
      if (result != null && result.length > 0){
        this.tempUser = result[0];
        console.log(this.tempUser);
      }
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProfileComponent, {
      // width: '250px',
      // maxHeight: '95vh',
      // data: {name: this.name, animal: this.animal}
      data: { name: this.tempUser.name },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  users: UserData[] = [
    new UserData('First Name'),
    new UserData('First Name'),
    new UserData('First Name'),
    new UserData('First Name'),
    new UserData('First Name'),
    new UserData('First Name'),
    new UserData('First Name'),
    new UserData('First Name'),
    new UserData('First Name'),
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
