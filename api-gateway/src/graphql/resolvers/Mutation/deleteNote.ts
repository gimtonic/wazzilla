import NotesService from "@adapters/notesService";
import getUserBySession from "@helpers/getUserBySession";
import { INote } from "@types";

const deleteNoteResolver = async (obj: any, { id }: INote, context: any) => {
  const user = await getUserBySession(context);

  return await NotesService.deleteNote(id, user.id);
};

export default deleteNoteResolver;
