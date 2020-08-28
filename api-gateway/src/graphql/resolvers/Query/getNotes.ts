import NotesService from "@adapters/notesService";
import { INoteGet } from "@types";
import getUserBySession from "@helpers/getUserBySession";

const getNotesResolver = async (obj: any, { page }: INoteGet, context: any) => {
  const user = await getUserBySession(context);
  return await NotesService.getNotes(page, user.id);
};

export default getNotesResolver;
