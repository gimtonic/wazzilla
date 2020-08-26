import got from "got";
import { INoteCreate } from "@types";
const { NOTES_SERVICE_URI } = process.env;

export default class NotesService {
  static async createNote(note: INoteCreate) {
    return await got.post(`${NOTES_SERVICE_URI}/create`, { json: note }).json();
  }
  static async getNotes() {
    return await got.get(`${NOTES_SERVICE_URI}/get`).json();
  }
  static async editNote(id: Number, desc: String) {
    return await got
      .post(`${NOTES_SERVICE_URI}/edit/${id}`, { json: { desc } })
      .json();
  }
  static async deleteNote(id: Number) {
    return await got.delete(`${NOTES_SERVICE_URI}/delete/${id}`).json();
  }
  static async shareNote(id: Number) {
    return await got.post(`${NOTES_SERVICE_URI}/share/${id}`).json();
  }
  static async getNoteByHashLink(hashLink: String) {
    return await got.get(`${NOTES_SERVICE_URI}/get-note/${hashLink}`).json();
  }
}
