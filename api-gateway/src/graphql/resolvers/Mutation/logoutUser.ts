import UsersService from "@adapters/usersService";

const logoutUserResolver = async (obj: any, arg: any, context: any) => {
  const { userSessionId } = context.req.cookies;
  if (!userSessionId) throw Error("Вы уже вышли");

  context.res.clearCookie("userSessionId");

  return await UsersService.deleteUserSession(userSessionId);
};

export default logoutUserResolver;
