import NotesService from "@adapters/notesService";
import { INote } from "@types";

const shareNoteResolver = async (obj: any, { id }: INote) => {
  return await NotesService.shareNote(id);
};

export default shareNoteResolver;
