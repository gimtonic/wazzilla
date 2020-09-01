import sequelize from "@models/connectorInit";
import server from "..";
import {
  createNote,
  getNotes,
  editNote,
  deleteNote,
  shareNote,
  getNoteByHashLink,
} from "@helpers/testHelpers";

let note: any;
const desc = "test desc";
const userId = "test user id";
const page = 1;

describe("test routes", () => {
  beforeEach(async () => {
    await sequelize.drop();
    await sequelize.sync();

    note = await createNote(desc);
  });

  afterAll(async () => {
    await sequelize.drop();
    await sequelize.close();
    await server.close();
  });

  it("success create note", async () => {
    const {
      body,
      body: { desc: responseDesc },
    } = note;

    expect(responseDesc).toEqual(desc);
    expect(body).toHaveProperty("id");
    expect(body).toHaveProperty("userId");
    expect(body).toHaveProperty("updatedAt");
    expect(body).toHaveProperty("createdAt");
  });

  it("success get notes", async () => {
    const response = await getNotes(page);

    const { totalPages, nextPage, notes } = response.body;
    const { id, desc: responseDesc, userId: responseUserId } = note.body;

    expect(totalPages).toEqual(1);
    expect(nextPage).toEqual(0);
    expect(notes[0].id).toEqual(id);
    expect(notes[0].desc).toEqual(responseDesc);
    expect(notes[0].userId).toEqual(responseUserId);
  });

  it("success edit notes", async () => {
    const { id, userId } = note.body;
    const response = await editNote(id, "new desc");

    const {
      id: responseId,
      userId: responseUserId,
      desc: responseDesc,
    } = response.body;

    expect(responseId).toEqual(id);
    expect(responseUserId).toEqual(userId);
    expect(responseDesc).toEqual("new desc");
  });

  it("success delete notes", async () => {
    const { id } = note.body;
    const response = await deleteNote(id);

    const { message } = response.body;

    expect(message).toEqual("Запись успешно удалена");
  });

  it("success share notes", async () => {
    const { id } = note.body;
    const response = await shareNote(id);

    const {
      id: responseId,
      userId: responseUserId,
      desc: responseDesc,
      hashLink,
    } = response.body;

    expect(responseId).toEqual(id);
    expect(responseUserId).toEqual(userId);
    expect(responseDesc).toEqual(desc);
    expect(hashLink).not.toBeNull();
  });

  it("success get note by hash link", async () => {
    const { id } = note.body;
    const responseShare = await shareNote(id);
    const response = await getNoteByHashLink(responseShare.body.hashLink);

    const {
      id: responseId,
      userId: responseUserId,
      desc: responseDesc,
      hashLink,
    } = response.body;

    expect(responseId).toEqual(id);
    expect(responseUserId).toEqual(userId);
    expect(responseDesc).toEqual(desc);
  });
});
