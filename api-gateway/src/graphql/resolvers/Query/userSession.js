const userSessionResolver = async (obj, args, context) => {
  return {
    id: 1,
    createdAt: "2020-02-12",
    expiresAt: "2020-02-12",
  };
};

export default userSessionResolver;
