import sequelize from "@models/connectorInit";
import server from "..";
import userFactory from "@factories/user";
import * as SessionService from "@services/session";
import {
  registerUser,
  createSession,
  getUserBySession,
  deleteSessions,
} from "@helpers/testHelpers";

let userResponse: any;
const user = userFactory();

describe("test routes", () => {
  beforeEach(async () => {
    await sequelize.drop();
    await sequelize.sync();

    userResponse = await registerUser(user);
  });

  afterAll(async () => {
    await sequelize.drop();
    await sequelize.close();
    await server.close();
  });

  it("success register user", async () => {
    const {
      body,
      body: { email },
    } = userResponse;

    expect(email).toEqual(user.email);
    expect(body).toHaveProperty("id");
    expect(body).toHaveProperty("passwordHash");
  });

  it("success login user", async () => {
    const sessionResponse = await createSession(user);

    const {
      body,
      body: { userId },
    } = sessionResponse;
    const { id } = userResponse.body;

    expect(userId).toEqual(id);
    expect(body).toHaveProperty("id");
    expect(body).toHaveProperty("expiresAt");
  });

  it("success get user by session", async () => {
    const {
      id: expectId,
      email: expectEmail,
      passwordHash: expectPasswordHash,
    } = userResponse.body;

    const createSessionResponse = await createSession(user);
    const { id: sessionId } = createSessionResponse.body;
    const getUserBySessionResponse = await getUserBySession(sessionId);
    const { id, email, passwordHash } = getUserBySessionResponse.body;

    expect(expectId).toEqual(id);
    expect(expectEmail).toEqual(email);
    expect(expectPasswordHash).toEqual(passwordHash);
  });

  it("success delete all session", async () => {
    const sessionResponse = await createSession(user);
    const { id: sessionId } = sessionResponse.body;
    const sessionBefore = await SessionService.getSession(sessionId);

    const deleteSessionsResponse = await deleteSessions(sessionId);
    const sessionAfter = await SessionService.getSession(sessionId);
    const { message } = deleteSessionsResponse.body;

    expect(sessionBefore).not.toBeNull();
    expect(sessionAfter).toBeNull();
    expect(message).toEqual("Сессии успешно удалены");
  });
});
