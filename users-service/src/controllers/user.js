export async function getUsers(req, res, next) {
  try {
    const user = "users";

    return res.json(user);
  } catch (e) {
    return next(e);
  }
}
