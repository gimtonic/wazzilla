import NotesService from "@adapters/notesService";
import { INote } from "@types";
import getUserBySession from "@helpers/getUserBySession";

const shareNoteResolver = async (obj: any, { id }: INote, context: any) => {
  const user = await getUserBySession(context);
  return await NotesService.shareNote(id, user.id);
};

export default shareNoteResolver;
