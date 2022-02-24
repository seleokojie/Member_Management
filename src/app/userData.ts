export class UserData{
  name:string = "no name set"
  photoRef:string = "assets/empty profile picture.png"//string reference to the photo
  visited:boolean = false;//false by default?

  //IDs (should each of these IDs exist/be stored in the user's info?  I think yes (discuss with group))
  familyID:number = 0//0 can be the default family id for UNSORTED
  sarangbangID:number = 0;
  mokjangID:number = 0;
  memberID:number = 0;

  role_permissions:string = "user";//choice of user or admin; maybe make it a boolean?

  constructor(name:string, photoref?:string ){

    this.name = name;

    if(photoref){
      this.photoRef = photoref;
    }
    else{
      this.photoRef = "assets/empty profile picture.png";
    }

    this.visited = false;

    this.familyID = 0;
    this.sarangbangID = 0;
    this.mokjangID = 0;
    this.memberID = 0;
  }
}
