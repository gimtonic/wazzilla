import { Request } from "express";
import { getNote } from "@services/note";

const checkUserPermission = async (req: Request) => {
  const note = await getNote(req);
  /* istanbul ignore else */
  if (!note) throw new Error("У вас нет прав");
};
export default checkUserPermission;
