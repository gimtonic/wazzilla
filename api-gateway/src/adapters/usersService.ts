import got from "got";
import { IUser } from "@types";
const { USERS_SERVICE_URI } = process.env;

export default class UsersService {
  static async registerUser(user: IUser) {
    return await got
      .post(`${USERS_SERVICE_URI}/register`, { json: user })
      .json();
  }
}
