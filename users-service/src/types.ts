export interface IUser {
  id: Number;
  email: String;
  passwordHash: String;
}

export interface IUserSession {
  id: Number;
  expiresAt: Date;
  userId: Number;
}
