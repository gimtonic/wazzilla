export interface IUser {
  id: Number;
  email: String;
  password: String;
}

export interface IUserCreateSession {
  email: String;
  password: String;
}

export interface INoteCreate {
  id: Number;
  userId: Number;
  desc: String;
}

export interface INote {
  id: Number;
  userId: Number;
  desc: String;
  hashLink: String;
}

export interface IUserSession {
  id: Number;
  expiresAt: Date;
  user: IUser;
}
