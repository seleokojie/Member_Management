export class UserData {
  name: string = 'no name set';
  photoRef: string = 'assets/empty profile picture.png'; //string reference to the photo
  visited: boolean = false; //false by default?

  //IDs (should each of these IDs exist/be stored in the user's info?  I think yes (discuss with group))
  familyID: number = 0; //0 can be the default family id for UNSORTED
  sarangbangID: number = 0;
  mokjangID: number = 0;
  memberID: number = 0;

  //ADDED BELOW VARS FROM MEMBER TABLE TEMPLATE IN GROUP 3 FILE EXCHANGE

  active: boolean = false;
  admin: boolean = false;
  birthdate: Date = new Date();
  campusName: boolean = false; //korean congregation of english congregation, KC or EC

  efName: string = 'First_name'; //english first name;
  emname: string = 'Middle_name'; //english middle name;
  elname: string = 'Last_name'; //english last name

  kfname: string = 'n/a'; //korean first name
  klname: string = 'n/a'; //korean last name

  gender: string = 'Gender'; //gender male/female ? boolean?

  homeAddress1: string = 'n/a';
  homeAddress2: string = 'n/a';
  city: string = 'n/a';
  state: string = 'n/a';
  zipcode: number = 0;
  email: string = 'n/a';
  homePhone: number = 0;
  mobilePhone: number = 0;

  houseHoldPrimaryContact: number = 0; //memberID, head of family

  password: string = ''; //encrypted password; how to do???

  offeringID: number = 0; //offering id; not sure what this is exactly ?

  emailNotifications: boolean = false;

  anniversary: Date = new Date(); //date of joining im assuming

  constructor(name: string, photoref?: string) {
    this.name = name;

    if (photoref) {
      this.photoRef = photoref;
    } else {
      this.photoRef = 'assets/empty profile picture.png';
    }

    this.visited = false;

    this.familyID = 0;
    this.sarangbangID = 0;
    this.mokjangID = 0;
    this.memberID = 0;
  }
}
