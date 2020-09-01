import sequelize from "@models/connectorInit";
import server from "../..";
import userFactory from "@factories/user";
import {
  registerUser,
  createSession,
  getUserBySession,
  deleteSessions,
} from "@helpers/testHelpers";
describe("Session controller", () => {
  beforeAll(async () => {
    await sequelize.drop();
    await sequelize.sync();
  });

  afterAll(async () => {
    await sequelize.drop();
    await sequelize.close();
    await server.close();
  });

  describe("error login user", () => {
    it("user does not exists", async () => {
      const firstUser = userFactory();
      const secondUser = userFactory();
      await registerUser(firstUser);
      const sessionResponse = await createSession(secondUser);

      const { message } = sessionResponse.body;
      expect(message).toEqual("Неверные данные");
    });

    it("password was wrong", async () => {
      const firstUser = {
        email: "test@test.com",
        password: "1234",
      };
      const secondUser = {
        email: "test@test.com",
        password: "wrong_password",
      };
      await registerUser(firstUser);
      const sessionResponse = await createSession(secondUser);

      const { message } = sessionResponse.body;
      expect(message).toEqual("Неверные данные");
    });
  });

  describe("error get session", () => {
    it("session does not exist", async () => {
      const user = userFactory();
      await registerUser(user);
      await createSession(user);
      const sessionResponse = await getUserBySession("wrong session");
      const { message } = sessionResponse.body;
      expect(message).toEqual("Неверные данные");
    });
  });

  describe("error delete session", () => {
    it("session does not exist", async () => {
      const user = userFactory();
      await registerUser(user);
      createSession(user);
      const sessionResponse = await deleteSessions("wrong session");

      const { message } = sessionResponse.body;
      expect(message).toEqual("Неверные данные");
    });
  });
});
