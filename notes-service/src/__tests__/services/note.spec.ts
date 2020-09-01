import sequelize from "@models/connectorInit";
import * as NoteService from "@services/note";
import server from "../..";
import { Request } from "express";
import { INote } from "@types";

const desc = "test desc";
const userId = "test user id";
const page = 1;
let note: INote;

describe("Note Service", () => {
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

  it("create note", async () => {
    const { desc: responseDesc } = note;

    expect(responseDesc).toEqual(desc);
    expect(note).toHaveProperty("id");
    expect(note).toHaveProperty("userId");
    expect(note).toHaveProperty("updatedAt");
    expect(note).toHaveProperty("createdAt");
  });

  it("get notes", async () => {
    const requestGetNotes = {
      body: { page, userId },
    };
    const responseGetNotes = await NoteService.getNotes(
      requestGetNotes as Request
    );

    expect(note.id).toEqual(responseGetNotes[0]!.id);
    expect(note.desc).toEqual(responseGetNotes[0]!.desc);
    expect(note.userId).toEqual(responseGetNotes[0]!.userId);
  });

  it("get notes count", async () => {
    const requestGetNotesCount = {
      body: { userId },
    };

    const responseGetNotesCount = await NoteService.getNotesCount(
      requestGetNotesCount as Request
    );

    expect(responseGetNotesCount).toEqual(1);
  });

  it("get note", async () => {
    const requestGetNote = {
      body: { userId },
      params: { id: note.id },
    } as any;

    const responseGetNote = await NoteService.getNote(requestGetNote);

    expect(responseGetNote!.id).toEqual(note.id);
    expect(responseGetNote!.userId).toEqual(note.userId);
    expect(responseGetNote!.desc).toEqual(note.desc);
  });

  it("edit note", async () => {
    const requestEditNote = {
      body: { userId, desc: "new desc" },
      params: { id: note.id },
    } as any;

    await NoteService.editNote(requestEditNote);

    const requestGetNote = {
      body: { userId },
      params: { id: note.id },
    } as any;

    const responseGetNote = await NoteService.getNote(requestGetNote);

    expect(responseGetNote!.desc).toEqual("new desc");
    expect(responseGetNote!.id).toEqual(note.id);
  });

  it("delete note", async () => {
    const requestDeleteNote = {
      body: { userId },
      params: { id: note.id },
    } as any;

    await NoteService.deleteNode(requestDeleteNote);

    const requestGetNote = {
      body: { userId },
      params: { id: note.id },
    } as any;

    const responseGetNote = await NoteService.getNote(requestGetNote);

    expect(responseGetNote).toBeNull;
  });

  it("share note", async () => {
    const requestShareNote = {
      body: { userId },
      params: { id: note.id },
    } as any;

    await NoteService.shareNote(requestShareNote);

    const requestGetNote = {
      body: { userId },
      params: { id: note.id },
    } as any;

    const responseGetNote = await NoteService.getNote(requestGetNote);

    expect(responseGetNote!.hashLink).not.toBeNull;
  });

  it("get note by hash link", async () => {
    const requestShareNote = {
      body: { userId },
      params: { id: note.id },
    } as any;

    await NoteService.shareNote(requestShareNote);

    const requestGetNote = {
      body: { userId },
      params: { id: note.id },
    } as any;

    const responseGetNote = await NoteService.getNote(requestGetNote);

    const noteByHashLink = await NoteService.getNoteByHashLink(
      responseGetNote!.hashLink as String
    );

    expect(noteByHashLink!.hashLink).toEqual(responseGetNote!.hashLink);
    expect(noteByHashLink).toHaveProperty("id");
    expect(noteByHashLink).toHaveProperty("userId");
    expect(noteByHashLink).toHaveProperty("updatedAt");
    expect(noteByHashLink).toHaveProperty("createdAt");
    expect(noteByHashLink).toHaveProperty("desc");
  });
});
