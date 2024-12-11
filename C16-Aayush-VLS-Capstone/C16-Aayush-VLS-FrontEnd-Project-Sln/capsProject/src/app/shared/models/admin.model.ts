export class Admin {
  aId: string;  
  name: string;
  email: string;
  password: string;
  phone: string;
  createdAt?: string;

  constructor(name: string, email: string, password: string, phone: string) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.aId = '';  
  }
}
