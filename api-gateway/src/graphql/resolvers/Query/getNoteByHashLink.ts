import NotesService from "@adapters/notesService";
import { INote } from "@types";

const getNoteByHashLinkResolver = async (obj: any, { hashLink }: INote) => {
  return await NotesService.getNoteByHashLink(hashLink);
};

export default getNoteByHashLinkResolver;
