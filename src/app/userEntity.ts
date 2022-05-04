export class UserEntity {
  id: number = 0;

  first_name: string = "firstName";

  last_name: string = "lastName";

  isAdmin: boolean = false;

  gender: string = "male";

  email: string = "email";

  phone: string = "444-444-4444";

  address: string = "address";

  city: string = "city";

  state: string = "state";

  zipcode: number = 0;

  birthdate: Date = new Date(2000,1, 1);

  // @Column({ type: 'bytea', nullable: false })
  // profileImage!: Buffer; Needs lots of work to implement photos

  password: string = "password";

  visitation: boolean = false;

  mokjang_id: number = 0;

  sarangbang_id: number = 0;
}
