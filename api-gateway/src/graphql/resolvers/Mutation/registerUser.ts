// @ts-ignore
import UsersService from "@src/adapters/usersService";
// @ts-ignore
import { User } from "@src/types";

const registerUserResolver = async (obj: any, user: User) => {
  return await UsersService.registerUser(user);
};

export default registerUserResolver;
