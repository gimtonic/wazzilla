import NotesService from "@adapters/notesService";
import { INote } from "@types";

const editNoteResolver = async (obj: any, { id, desc }: INote) => {
  return await NotesService.editNote(id, desc);
};

export default editNoteResolver;
