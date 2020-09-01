//@ts-ignore
import supertest from "supertest";
import server from "..";

export const registerUser = async (user: any) => {
  return await supertest(server).post("/register").send(user);
};

export const createSession = async (user: any) => {
  return await supertest(server).post("/sessions").send(user);
};

export const getUserBySession = async (userSessionId: String) => {
  return await supertest(server).get(`/get/${userSessionId}`);
};

export const deleteSessions = async (userSessionId: String) => {
  return await supertest(server).delete(`/delete/${userSessionId}`);
};
