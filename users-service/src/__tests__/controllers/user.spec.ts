import sequelize from "@models/connectorInit";
import server from "../..";
import { registerUser } from "@helpers/testHelpers";
import userFactory from "@factories/user";

describe("User controller", () => {
  beforeAll(async () => {
    await sequelize.drop();
    await sequelize.sync();
  });

  afterAll(async () => {
    await sequelize.drop();
    await sequelize.close();
    await server.close();
  });

  describe("error register user", () => {
    it("invalid email", async () => {
      const user = {
        email: "invalidemail",
        password: "invalidpassword",
      };
      const userResponse = await registerUser(user);
      const { msg } = userResponse.body.message.errors[0];

      expect(msg).toEqual("Должно быть почтой");
    });

    it("invalid password", async () => {
      const user = {
        email: "test@test.com",
        password: "",
      };
      const userResponse = await registerUser(user);
      const { msg } = userResponse.body.message.errors[0];

      expect(msg).toEqual("Не должна равнятся нулю");
    });

    it("email is exist", async () => {
      const user = userFactory();
      await registerUser(user);
      const userResponse = await registerUser(user);
      const { msg } = userResponse.body.message.errors[0];

      expect(msg).toEqual("Почта уже занята");
    });
  });
});
