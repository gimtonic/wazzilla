import got from "got";
import { INoteCreate } from "@types";
const { NOTES_SERVICE_URI } = process.env;

export default class NotesService {
  static async createNote(note: INoteCreate) {
    const body = await got
      .post(`${NOTES_SERVICE_URI}/create`, { json: note })
      .json();
    return body;
  }
  static async getNotes() {
    const body = await got.get(`${NOTES_SERVICE_URI}/get`).json();
    return body;
  }
}
