import NotesService from "@adapters/notesService";
import { INoteCreate } from "@types";

const createNoteResolver = async (obj: any, note: INoteCreate) => {
  return await NotesService.createNote(note);
};

export default createNoteResolver;
