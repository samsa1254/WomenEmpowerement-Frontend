
export class Post {
  date : Date;
  idPublication: number;
  post: string;
  state: string;
  time: time ;


<<<<<<< HEAD
  constructor(date: Date, idPublication: number, post: string, state: string, time: time) {
    this.date = date;
    this.idPublication = idPublication;
    this.post = post;
    this.state = state;
    this.time = time;
=======
  constructor() {

>>>>>>> 99a929978bfe485d30c478ad80362f0ff908f0a1
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
