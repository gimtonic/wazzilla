import NotesService from "@adapters/notesService";
import { INote } from "@types";
import getUserBySession from "@helpers/getUserBySession";

const editNoteResolver = async (
  obj: any,
  { id, desc }: INote,
  context: any
) => {
  const user = await getUserBySession(context);
  return await NotesService.editNote(id, desc, user.id);
};

export default editNoteResolver;
