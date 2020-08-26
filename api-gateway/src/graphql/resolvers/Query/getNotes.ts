import NotesService from "@adapters/notesService";

const getNotesResolver = async () => {
  return await NotesService.getNotes();
};

export default getNotesResolver;
