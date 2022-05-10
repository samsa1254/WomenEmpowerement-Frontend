
export class SignUpInfo {
  name: string;
  lastname: string;
  datedenaissaince:Date;
  cin:number;
  sexe:string;
  email: string;
  login: string;
  password: string;
  role: string;
  isEnabled: string;


  constructor(name: string, lastname: string, datedenaissaince: Date, cin: number, sexe: string, email: string, login: string, password: string, role: string, isEnabled: string) {
    this.name = name;
    this.lastname = lastname;
    this.datedenaissaince = datedenaissaince;
    this.cin = cin;
    this.sexe = sexe;
    this.email = email;
    this.login = login;
    this.password = password;
    this.role = role;
    this.isEnabled = isEnabled;
  }
}
