import sequelize from "@models/connectorInit";
import * as UserService from "@services/user";
import * as SessionService from "@services/session";
import server from "../..";
import userFactory from "@factories/user";
import { Request } from "express";
import { IUser, IUserSession } from "@types";

let user: IUser;
let session: IUserSession;

const request = {
  body: userFactory(),
};

describe("Session Service", () => {
  beforeEach(async () => {
    await sequelize.drop();
    await sequelize.sync();
    user = await UserService.registerUser(request as Request);
    session = await SessionService.createSession(user.id);
  });

  afterAll(async () => {
    await sequelize.drop();
    await sequelize.close();
    await server.close();
  });

  it("create session", async () => {
    expect(session.userId).toEqual(user.id);
    expect(session).toHaveProperty("id");
    expect(session).toHaveProperty("expiresAt");
  });

  it("get session", async () => {
    const findSession = await SessionService.getSession(String(session.id));

    expect(session.id).toEqual(findSession!.id);
    expect(session.userId).toEqual(findSession!.userId);
  });

  it("delete session", async () => {
    await SessionService.deleteAllSessionsByUser(user.id);
    const findSession = await SessionService.getSession(String(session.id));

    expect(findSession).toBeNull;
  });
});
