import { Sarangbang } from './../sarangbang';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent implements OnInit {
  //Holds currently selected drop down menu item
  mokjangSelect = 0;
  selectedMok = 0;
  selectedSarang = 0;
  sarangbangSelect = 0;

  mokjangList = ["Mokjang 1","Mokjang 2","Mokjang 3","Mokjang 4","Mokjang 5","Mokjang 6"];
  sarangbangList = ["Sarangbang 1","Sarangbang 2","Sarangbang 3","Sarangbang 4","Sarangbang 5","Sarangbang 6"];

  //AUTO FILL SEARCH BAR STUFF
  //These are the names that are put into the autofill search bar
  userNames = ["name 1", "name 2", "name 3"];
  //This is for the autocomplete search bar function
  myControl = new FormControl();



  //functions
  changeSelectedMokjang(input: any) {
    this.mokjangSelect = input.target.value;
    console.log("Filtering by mokjang: " + input.target.value);
  }
  changeSelectedSarangbang(input: any) {
    this.sarangbangSelect = input.target.value;
    console.log("Filtering by sarangbang: " + input.target.value);
  }

  onSearch(){

  }

  constructor() {}

  ngOnInit() {}
}
