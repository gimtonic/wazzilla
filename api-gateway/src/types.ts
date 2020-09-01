export interface IUser {
  id: Number;
  email: String;
  password: String;
}

export interface IUserCreate {
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

export interface INotes {
  totalPages: Number;
  nextPage: Number;
  notes: INote[];
}

export interface IUserSession {
  id: String;
  expiresAt: Date;
  userId: String;
}

export interface INoteGet {
  page: Number;
}

export interface INoteDelete {
  message: String;
}

export interface IUserDelete {
  message: String;
}
