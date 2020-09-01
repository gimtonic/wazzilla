import UsersService from "@adapters/usersService";
import { IUser, IUserSession, IUserCreate, IUserDelete } from "@types";

const email = "admin@admin.com";
const password = "12345";

let userSession: IUserSession;

describe("User Adapter", () => {
  beforeEach(async () => {
    const user = {
      email,
      password,
    };
    await UsersService.registerUser(user as IUserCreate);
    userSession = (await UsersService.createUserSession(user)) as IUserSession;
  });

  afterEach(async () => {
    if (userSession) {
      const responseDeleteUser = (await UsersService.deleteUser(
        userSession.id
      )) as IUserDelete;
      expect(responseDeleteUser.message).toEqual("Пользователь успешно удален");
    }
  });

  it("create user session", async () => {
    expect(userSession).toHaveProperty("id");
    expect(userSession).toHaveProperty("expiresAt");
    expect(userSession).toHaveProperty("userId");
  });

  it("get user by session", async () => {
    const responseGetUserBySession = (await UsersService.getUserBySession(
      String(userSession.id)
    )) as IUser;

    expect(responseGetUserBySession.id).toEqual(userSession.userId);
  });
});
