import UsersService from "@adapters/usersService";
import { IUser, IUserSession } from "@types";

const loginUserResolver = async (
  obj: any,
  { email, password }: IUser,
  context: any
) => {
  const userSession = (await UsersService.createUserSession({
    email,
    password,
  })) as IUserSession;

  context.res.cookie("userSessionId", userSession.id, { httpOnly: true });

  return userSession;
};

export default loginUserResolver;
