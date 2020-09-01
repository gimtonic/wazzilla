import sequelize from "@models/connectorInit";
import * as UserService from "@services/user";
import server from "../..";
import userFactory from "@factories/user";
import { Request } from "express";

describe("User Service", () => {
  beforeAll(async () => {
    await sequelize.drop();
    await sequelize.sync();
  });

  afterAll(async () => {
    await sequelize.drop();
    await sequelize.close();
    await server.close();
  });

  it("create user", async () => {
    const request = {
      body: userFactory(),
    };

    const user = await UserService.registerUser(request as Request);

    expect(user.email).toEqual(request.body.email);
    expect(user).toHaveProperty("id");
    expect(user).toHaveProperty("passwordHash");
  });

  it("find user by email", async () => {
    const request = {
      body: userFactory(),
    };

    const user = await UserService.registerUser(request as Request);
    const findUser = await UserService.findUserByEmail(user.email);

    expect(user.id).toEqual(findUser!.id);
    expect(user.passwordHash).toEqual(findUser!.passwordHash);
    expect(user.email).toEqual(findUser!.email);
  });

  it("find user by id", async () => {
    const request = {
      body: userFactory(),
    };

    const user = await UserService.registerUser(request as Request);
    const findUser = await UserService.getUserById(user.id);

    expect(user.id).toEqual(findUser!.id);
    expect(user.passwordHash).toEqual(findUser!.passwordHash);
    expect(user.email).toEqual(findUser!.email);
  });
});
