import got from "got";
import { IUserCreate, IUserCreateSession } from "@types";

let { USERS_SERVICE_URI, USERS_SERVICE_PORT } = process.env;

/* istanbul ignore else */
if (process.env.NODE_ENV === "test") {
  USERS_SERVICE_URI = `http://127.0.0.1:${USERS_SERVICE_PORT}`;
}

export default class UsersService {
  static async registerUser(user: IUserCreate) {
    return await got
      .post(`${USERS_SERVICE_URI}/register`, { json: user })
      .json();
  }
  static async deleteUser(userSessionId: String) {
    return await got
      .delete(`${USERS_SERVICE_URI}/delete-user/${userSessionId}`)
      .json();
  }
  static async createUserSession({ email, password }: IUserCreateSession) {
    const body = await got
      .post(`${USERS_SERVICE_URI}/sessions`, { json: { email, password } })
      .json();
    return body;
  }
  /* istanbul ignore next */
  static async deleteUserSession(userSessionId: String) {
    const body = await got
      .delete(`${USERS_SERVICE_URI}/delete/${userSessionId}`)
      .json();
    return body;
  }
  static async getUserBySession(userSessionId: String) {
    const body = await got
      .get(`${USERS_SERVICE_URI}/get/${userSessionId}`)
      .json();
    return body;
  }
}
