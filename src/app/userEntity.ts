import { Buffer } from "buffer";
export class UserEntity {
  id!: number;

  first_name!: string;

  last_name!: string;

  isAdmin!: boolean;

  gender!: string;

  email!: string;

  phone!: string;

  address!: string;

  city!: string;

  state!: string;

  zipcode!: number;

  birthdate!: Date;

  // @Column({ type: 'bytea', nullable: false })
  // profileImage!: Buffer; Needs lots of work to implement photos

  password!: string;

  visitation!: boolean;

  mokjang_id!: number;

  sarangbang_id!: number;
}
