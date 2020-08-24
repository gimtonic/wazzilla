import got from "got";

import accessEnv from "#root/helpers/accessEnv";

const USERS_SERVICE_URI = accessEnv("USERS_SERVICE_URI");

export default class UsersService {
  static async getUsers() {
    const body = await got
      .get(`${USERS_SERVICE_URI}/users`, { json: {} })
      .json();
    return body;
  }
}
