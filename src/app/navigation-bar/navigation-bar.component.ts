import { UserEntity } from './../userEntity';
import { ApiService } from './../api.service';

import { AppComponent } from './../app.component';
import { Sarangbang } from './../sarangbang';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent implements OnInit {
  //Holds currently selected drop down menu item

  constructor(private app: AppComponent, private appService: ApiService) {}

  Search(){
    console.log(this.selectedMok);
    console.log(this.selectedSarang);
    console.log("name: " + this.searchName);
    if(this.selectedMok == 0){
      if(this.searchName == "" || this.searchName == "Search by Name..."){//no filter
        var test = this.appService.GetMembers().subscribe((result) =>{
          this.app.users = result as UserEntity[];
        });
      }
      else{//Name filter only
        var test = this.appService.GetMembersByName(this.searchName).subscribe((result) =>{
          this.app.users = result as UserEntity[];
          console.log("name: " + this.searchName);
        });
      }

    }
    if(this.selectedMok != 0){
      if(this.selectedSarang != 0){//Mokjang filter
        var test = this.appService.GetSarangbangMembers(this.selectedMok, this.selectedSarang).subscribe((result) =>{
          this.app.users = result as UserEntity[];
        });
      }
      else{//Mokjang and Sarangbang Filter
        var test = this.appService.GetMokjangMembers(this.selectedMok).subscribe((result) =>{
          this.app.users = result as UserEntity[];
        });
      }

    }
  }

  //The selected option from the drop down
  selectedMok = 0;
  selectedSarang = 0;
  searchName = "";

  //Temp variables for when chaning the selected values
  mokjangSelect = 0;
  sarangbangSelect = 0;

  matAutocomplete = 0;

  mokjangList = [
    {value: 0, viewValue : 'Any Mokjang'},
  {value: 1, viewValue : 'Mokjang 1'},
  {value: 2, viewValue : 'Mokjang 2'},
  {value: 3, viewValue : 'Mokjang 3'},
  {value: 4, viewValue : 'Mokjang 4'},
  ];
  sarangbangList = [
    {value: 0, viewValue : 'Any Sarangbang'},
  {value: 1, viewValue : 'Sarangbang 1'},
  {value: 2, viewValue : 'Sarangbang 2'},
  {value: 3, viewValue : 'Sarangbang 3'},
  {value: 4, viewValue : 'Sarangbang 4'},
  ];

  //AUTO FILL SEARCH BAR STUFF
  //These are the names that are put into the autofill search bar
  userNames = ['name 1', 'name 2', 'name 3'];
  //This is for the autocomplete search bar function
  myControl = new FormControl();

  //functions
  changeSelectedMokjang(input: any) {
    this.mokjangSelect = input.target.value;
    console.log('Filtering by mokjang: ' + input.target.value);
  }
  changeSelectedSarangbang(input: any) {
    this.sarangbangSelect = input.target.value;
    console.log('Filtering by sarangbang: ' + input.target.value);
  }

  onSearch() {}


  ngOnInit() {}
}
