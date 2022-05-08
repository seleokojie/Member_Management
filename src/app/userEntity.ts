export class UserEntity {
  member_id: number = 0;
  id: number = 0;
  householdid:number = 0;

  mokjang_id: number = 0;

  sarangbang_id: number = 0;

  active:boolean = true;

  admin: boolean = false;
  householdprimarycontact:string = "primary contact";
  email_notification: boolean = false;
  anniversary:string = "anniversary";
  campusname: string = "campus name";
  image_url:string = "image url";

  kfname:string = "korean first name";

  efname: string = "firstName";

  emname: string = "middleName"

  elname: string = "lastName";

  isAdmin: boolean = false;

  gender: string = "male";

  homeemail: string = "home email";

  homephonenumber: string = "home number";

  mobilephonenumber: string = "mobile number"

  homeaddressstreetname1: string = "address 1";
  homeaddressstreetname2: string = "address 2";

  homeaddresscity: string = "city";

  homeaddressstate: string = "state";

  homeaddresszipcode: number = 0;

  birthdate: Date = new Date(2000,1, 1);

  // @Column({ type: 'bytea', nullable: false })
  // profileImage!: Buffer; Needs lots of work to implement photos

  password: string = "password";

  visitation: boolean = false;
}
