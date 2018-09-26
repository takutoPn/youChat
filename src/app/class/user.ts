export class User {
  uid: number;
  displayName: string;
  email: string;
  photoURL: string;

  constructor(user) {
    this.uid = user.uid;
    this.displayName = user.displayName;
    this.email = user.email;
    this.photoURL = user.photoURL;
  }
}
