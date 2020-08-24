export async function getNotes(req, res, next) {
  try {
    const user = "notes";

    return res.json(user);
  } catch (e) {
    return next(e);
  }
}
