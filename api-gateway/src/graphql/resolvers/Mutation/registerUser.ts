import UsersService from "@adapters/usersService";
import { IUser } from "@types";

const registerUserResolver = async (obj: any, user: IUser) => {
  return await UsersService.registerUser(user);
};

export default registerUserResolver;
