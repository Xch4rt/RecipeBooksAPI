export class User {
  id: number;
  email: string;
  password: string;
  isAvailable: boolean;
  created_at: Date;
  updated_at: Date;

  constructor(
    id: number,
    email: string,
    password: string,
    isAvailable: boolean,
    created_at: Date,
    updated_at: Date,
  ) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.isAvailable = isAvailable;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
