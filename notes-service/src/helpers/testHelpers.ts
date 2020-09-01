//@ts-ignore
import supertest from "supertest";
import server from "..";

const userId = "test user id";
export const createNote = async (desc: String) => {
  return await supertest(server).post("/create").send({ desc, userId });
};

export const getNotes = async (page: Number) => {
  return await supertest(server).post("/get").send({ page, userId });
};

export const editNote = async (id: String, desc: String) => {
  return await supertest(server).post(`/edit/${id}`).send({ desc, userId });
};

export const deleteNote = async (id: String) => {
  return await supertest(server).post(`/delete/${id}`).send({ userId });
};

export const shareNote = async (id: String) => {
  return await supertest(server).post(`/share/${id}`).send({ userId });
};

export const getNoteByHashLink = async (hashLink: String) => {
  return await supertest(server).get(`/get-note/${hashLink}`);
};
