import got from "got";

const { USERS_SERVICE_URI } = process.env;

export default class UsersService {
  static async getUsers() {
    const body = await got.get(`${USERS_SERVICE_URI}/users`).json();
    return body;
  }
}
