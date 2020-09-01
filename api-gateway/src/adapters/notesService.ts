import got from "got";
let { NOTES_SERVICE_URI, NOTES_SERVICE_PORT } = process.env;

/* istanbul ignore else */
if (process.env.NODE_ENV === "test") {
  NOTES_SERVICE_URI = `http://127.0.0.1:${NOTES_SERVICE_PORT}`;
}

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
