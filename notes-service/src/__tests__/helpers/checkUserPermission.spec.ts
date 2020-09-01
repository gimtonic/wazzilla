import sequelize from "@models/connectorInit";
import checkUserPermission from "@helpers/checkUserPermission";
import * as NoteService from "@services/note";
import server from "../..";
import { Request } from "express";
import { INote } from "@types";

const desc = "test desc";
const userId = "test user id";
let note: INote;

describe("Helpers", () => {
  beforeEach(async () => {
    await sequelize.drop();
    await sequelize.sync();

    const request = {
      body: { desc, userId },
    };
    note = await NoteService.createNote(request as Request);
  });

  afterAll(async () => {
    await sequelize.drop();
    await sequelize.close();
    await server.close();
  });

  it("test checkUserPermission helper", async () => {
    const request = {
      body: { userId: "invalid user id" },
      params: { id: note.id },
    } as any;

    expect(checkUserPermission(request)).rejects.toThrow("У вас нет прав");
  });
});
