import sequelize from "@models/connectorInit";
import * as UserService from "@services/user";
import * as SessionService from "@services/session";
import server from "../..";
import userFactory from "@factories/user";
import { Request } from "express";

describe("Session Service", () => {
  beforeAll(async () => {
    await sequelize.drop();
    await sequelize.sync();
  });

  afterAll(async () => {
    await sequelize.drop();
    await sequelize.close();
    await server.close();
  });

  it("create session", async () => {
    const request = {
      body: userFactory(),
    };
    const user = await UserService.registerUser(request as Request);
    const session = await SessionService.createSession(user.id);

    expect(session.userId).toEqual(user.id);
    expect(session).toHaveProperty("id");
    expect(session).toHaveProperty("expiresAt");
  });

  it("get session", async () => {
    const request = {
      body: userFactory(),
    };
    const user = await UserService.registerUser(request as Request);
    const session = await SessionService.createSession(user.id);
    const findSession = await SessionService.getSession(String(session.id));

    expect(session.id).toEqual(findSession!.id);
    expect(session.userId).toEqual(findSession!.userId);
  });

  it("delete session", async () => {
    const request = {
      body: userFactory(),
    };
    const user = await UserService.registerUser(request as Request);
    const session = await SessionService.createSession(user.id);
    await SessionService.deleteAllSessionsByUser(user.id);
    const findSession = await SessionService.getSession(String(session.id));

    expect(findSession).toBeNull;
  });
});
