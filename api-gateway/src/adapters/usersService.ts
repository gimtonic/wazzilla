import got from "got";
// @ts-ignore
import { User } from "@src/types";
const { USERS_SERVICE_URI } = process.env;

export default class UsersService {
  static async registerUser(user: User) {
    const body = await got
      .post(`${USERS_SERVICE_URI}/register`, { json: user })
      .json();
    return body;
  }
}
