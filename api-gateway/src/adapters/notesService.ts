import got from "got";
const { NOTES_SERVICE_URI } = process.env;

export default class NotesService {
  static async createNote(desc: String, userId: Number) {
    return await got
      .post(`${NOTES_SERVICE_URI}/create`, { json: { desc, userId } })
      .json();
  }
  static async getNotes(page: Number, userId: Number) {
    return await got
      .post(`${NOTES_SERVICE_URI}/get`, { json: { page, userId } })
      .json();
  }
  static async editNote(id: Number, desc: String, userId: Number) {
    return await got
      .post(`${NOTES_SERVICE_URI}/edit/${id}`, { json: { desc, userId } })
      .json();
  }
  static async deleteNote(id: Number, userId: Number) {
    return await got
      .post(`${NOTES_SERVICE_URI}/delete/${id}`, { json: { userId } })
      .json();
  }
  static async shareNote(id: Number, userId: Number) {
    return await got
      .post(`${NOTES_SERVICE_URI}/share/${id}`, { json: { userId } })
      .json();
  }
  static async getNoteByHashLink(hashLink: String) {
    return await got.get(`${NOTES_SERVICE_URI}/get-note/${hashLink}`).json();
  }
}
