export class Client {
  id: number;
  gender: string;
  first_name: string;
  last_name: string;
  email: string;
  birthday: string;

  address: {address_line: string, city: string, state: string, zip_code: string};
  alternate_address: {address_line: string, city: string, state: string, zip_code: string};
  profile_pic: string;


  constructor() {

  }
}
