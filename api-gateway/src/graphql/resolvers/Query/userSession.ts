// @ts-ignore
import UsersService from "@src/adapters/usersService";

const userSessionResolver = async () => {
  return await UsersService.getUsers();
};

export default userSessionResolver;
