import got from "got";
import { IUser } from "@types";
const { USERS_SERVICE_URI } = process.env;

export default class UsersService {
  static async registerUser(user: IUser) {
    return await got
      .post(`${USERS_SERVICE_URI}/register`, { json: user })
      .json();
  }
  static async createUserSession({ email, password }: IUser) {
    const body = await got
      .post(`${USERS_SERVICE_URI}/sessions`, { json: { email, password } })
      .json();
    return body;
  }
  static async deleteUserSession(userSessionId: String) {
    const body = await got
      .delete(`${USERS_SERVICE_URI}/delete/${userSessionId}`)
      .json();
    return body;
  }
}
