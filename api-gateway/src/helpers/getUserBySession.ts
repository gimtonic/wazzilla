import UsersService from "@adapters/usersService";
import { IUser } from "@types";

const getUserBySession = async (context: any): Promise<IUser> => {
  const { userSessionId } = context.req.cookies;
  if (!userSessionId) throw Error("Вам нужно авторизоватся");

  return (await UsersService.getUserBySession(userSessionId)) as IUser;
};

export default getUserBySession;
