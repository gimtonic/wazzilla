export interface IUser {
  id: Number;
  email: String;
}

export interface INoteCreate {
  id: Number;
  userId: Number;
  desc: String;
}
