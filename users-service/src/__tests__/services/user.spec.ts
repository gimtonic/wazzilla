import sequelize from "@models/connectorInit";
import * as UserService from "@services/user";
import server from "../..";
import userFactory from "@factories/user";
import { Request } from "express";
import { IUser } from "@types";

let user: IUser;
const request = {
  body: userFactory(),
};

describe("User Service", () => {
  beforeEach(async () => {
    await sequelize.drop();
    await sequelize.sync();

    user = await UserService.registerUser(request as Request);
  });

  afterAll(async () => {
    await sequelize.drop();
    await sequelize.close();
    await server.close();
  });

  it("create user", async () => {
    expect(user.email).toEqual(request.body.email);
    expect(user).toHaveProperty("id");
    expect(user).toHaveProperty("passwordHash");
  });

  it("find user by email", async () => {
    const findUser = await UserService.findUserByEmail(user.email);

    expect(user.id).toEqual(findUser!.id);
    expect(user.passwordHash).toEqual(findUser!.passwordHash);
    expect(user.email).toEqual(findUser!.email);
  });

  it("find user by id", async () => {
    const findUser = await UserService.getUserById(user.id);

    expect(user.id).toEqual(findUser!.id);
    expect(user.passwordHash).toEqual(findUser!.passwordHash);
    expect(user.email).toEqual(findUser!.email);
  });
});
