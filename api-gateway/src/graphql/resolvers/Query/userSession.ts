const userSessionResolver = async (obj: any, args: any, context: any) => {
  return {
    id: 1,
    createdAt: "2020-02-12",
    expiresAt: "2020-02-12",
  };
};

export default userSessionResolver;
