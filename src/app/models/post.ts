import {User} from "./user.model";

export class Post {
  date : Date;
  idPublication: number;
  post: string;
  state: string;
  time: time ;
  user?:User ;

  constructor() {

  }
}

export  class  time {
  hour: string;
  minute: string;
  nano: number;
  second: string ;

  constructor(hour: string, minute: string, nano: number, second: string) {
    this.hour = hour;
    this.minute = minute;
    this.nano = nano;
    this.second = second;
  }


}
