
export class Post {
  date : Date;
  idPublication: number;
  post: string;
  state: string;
  time: time ;


  constructor(date: Date, idPublication: number, post: string, state: string, time: time) {
    this.date = date;
    this.idPublication = idPublication;
    this.post = post;
    this.state = state;
    this.time = time;
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
