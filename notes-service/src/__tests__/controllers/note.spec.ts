import sequelize from "@models/connectorInit";
import server from "../..";
import {
  createNote,
  editNote,
  getNotes,
  getNoteByHashLink,
} from "@helpers/testHelpers";

describe("Note controller", () => {
  beforeAll(async () => {
    await sequelize.drop();
    await sequelize.sync();
  });

  afterAll(async () => {
    await sequelize.drop();
    await sequelize.close();
    await server.close();
  });

  describe("error create note", () => {
    it("invalid desc", async () => {
      const response = await createNote("");

      const { msg } = response.body.message.errors[0];
      expect(msg).toEqual("Не должна равнятся нулю");
    });
  });

  describe("error edit note", () => {
    it("invalid desc", async () => {
      const note = await createNote("test");
      const response = await editNote(note.body.id, "");

      const { msg } = response.body.message.errors[0];
      expect(msg).toEqual("Не должна равнятся нулю");
    });
  });

  describe("error get note by hash link", () => {
    it("invalid desc", async () => {
      const response = await getNoteByHashLink("invalid hash link");
      const { msg } = response.body.message.errors[0];
      expect(msg).toEqual("Нет такой заметки");
    });
  });

  describe("error get notes", () => {
    it("invalid desc", async () => {
      const response = await getNotes(-2);

      const { msg } = response.body.message.errors[0];
      expect(msg).toEqual("Должно быть положительное число");
    });
  });
});
