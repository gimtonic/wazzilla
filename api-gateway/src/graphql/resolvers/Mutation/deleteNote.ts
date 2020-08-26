import NotesService from "@adapters/notesService";
import { INote } from "@types";

const deleteNoteResolver = async (obj: any, { id }: INote) => {
  return await NotesService.deleteNote(id);
};

export default deleteNoteResolver;
