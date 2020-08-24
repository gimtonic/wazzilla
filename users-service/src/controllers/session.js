export async function getSessions(req, res, next) {
  try {
    const user = "sessions";

    return res.json(user);
  } catch (e) {
    return next(e);
  }
}
