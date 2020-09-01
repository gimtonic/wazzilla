import NotesService from "@adapters/notesService";
import { INote, INotes, INoteDelete } from "@types";

const desc = "test desc";
const userId = 2;
const page = 1;
let note: INote;

describe("Note Adapter", () => {
  beforeEach(async () => {
    note = (await NotesService.createNote(desc, userId)) as INote;
  });

  afterEach(async () => {
    const responseGetNote = (await NotesService.getNotes(
      page,
      userId
    )) as INotes;
    if (responseGetNote.notes[0]) {
      await NotesService.deleteNote(responseGetNote.notes[0].id, userId);
    }
  });

  it("create note", async () => {
    expect(note.desc).toEqual(desc);
    expect(note).toHaveProperty("id");
    expect(note).toHaveProperty("userId");
    expect(note).toHaveProperty("updatedAt");
    expect(note).toHaveProperty("createdAt");
  });

  it("get notes", async () => {
    const responseGetNote = (await NotesService.getNotes(
      page,
      userId
    )) as INotes;

    const { totalPages, nextPage, notes } = responseGetNote;

    expect(totalPages).toEqual(1);
    expect(nextPage).toEqual(0);
    expect(notes[0].id).toEqual(note.id);
    expect(notes[0].desc).toEqual(note.desc);
  });

  it("delete notes", async () => {
    const responseDeleteNote = (await NotesService.deleteNote(
      note.id,
      userId
    )) as INoteDelete;

    const { message } = responseDeleteNote;
    expect(message).toEqual("Запись успешно удалена");
  });

  it("edit note", async () => {
    const responseEditNote = (await NotesService.editNote(
      note.id,
      "new desc",
      userId
    )) as INote;

    expect(responseEditNote.desc).toEqual("new desc");
    expect(responseEditNote).toHaveProperty("id");
    expect(responseEditNote).toHaveProperty("userId");
    expect(responseEditNote).toHaveProperty("updatedAt");
    expect(responseEditNote).toHaveProperty("createdAt");
  });

  it("share note", async () => {
    const responseShareNote = (await NotesService.shareNote(
      note.id,
      userId
    )) as INote;

    expect(responseShareNote.desc).toEqual(note.desc);
    expect(responseShareNote.hashLink).not.toBeNull();
    expect(responseShareNote).toHaveProperty("id");
    expect(responseShareNote).toHaveProperty("userId");
    expect(responseShareNote).toHaveProperty("updatedAt");
    expect(responseShareNote).toHaveProperty("createdAt");
  });

  it("get note by hash link", async () => {
    const responseShareNote = (await NotesService.shareNote(
      note.id,
      userId
    )) as INote;

    const responseGetNoteByHashLink = (await NotesService.getNoteByHashLink(
      responseShareNote.hashLink
    )) as INote;

    expect(responseGetNoteByHashLink.desc).toEqual(note.desc);
    expect(responseGetNoteByHashLink).toHaveProperty("id");
    expect(responseGetNoteByHashLink).toHaveProperty("userId");
    expect(responseGetNoteByHashLink).toHaveProperty("updatedAt");
    expect(responseGetNoteByHashLink).toHaveProperty("createdAt");
  });
});
