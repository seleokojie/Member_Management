import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-management',
  templateUrl: './member-management.component.html',
  styleUrls: ['./member-management.component.css']
})
export class MemberManagementComponent implements OnInit {

  //this will have to be downloaded from the servers?
  moks = ["Mok1", "mok2", "mok3", "mok4", "mok5", "mok6", "mok7", "mok8", "mok9", "mok10", "mok11", "mok12", "mok13", "mok14", "mok15", "mok16"]

  //also will be downloaded from the DB
  sbangs = ["s1", "s2", "s3"]

  db = "url"


  currentMok = 0;
  changeMok(index:any): void{
    this.currentMok = index;
    console.log(index);
  }
  constructor() { }

  ngOnInit() {
  }

}
