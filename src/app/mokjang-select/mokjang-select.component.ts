import { UserData } from './../userData';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mokjang-select',
  templateUrl: './mokjang-select.component.html',
  styleUrls: ['./mokjang-select.component.css'],
})
export class MokjangSelectComponent implements OnInit {
  moks: string[] = [
    'Mokjang 1',
    'Mokjang 2',
    'Mokjang 3',
    'Mokjang 4',
    'Mokjang 5',
    'Mokjang 6',
    'Mokjang 7',
    'Mokjang 8',
    'Mokjang 9',
    'Mokjang 10',
    'Mokjang 11',
    'Mokjang 12',
    'Mokjang 13',
    'Mokjang 14',
    'Mokjang 15',
    'Mokjang 16',
  ];

  mokjangLeader:UserData = new UserData("Mokjang Leader test");

  currentMok: number = 0;

  mokSelectionShow: boolean = false;

  OnMokSelect() {
    this.mokSelectionShow = !this.mokSelectionShow;
  }

  OnSelectMok(index:any){
    this.currentMok = index;
  }

  constructor() {}

  ngOnInit() {
    //asd
  }
}
