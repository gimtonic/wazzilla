import NotesService from "@adapters/notesService";
import { INoteCreate } from "@types";
import getUserBySession from "@helpers/getUserBySession";

const createNoteResolver = async (
  obj: any,
  { desc }: INoteCreate,
  context: any
) => {
  const user = await getUserBySession(context);

  return await NotesService.createNote(desc, user.id);
};

export default createNoteResolver;
