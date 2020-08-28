import { Request } from "express";
import { getNote } from "@services/note";

const checkUserPermission = async (req: Request) => {
  const note = await getNote(req);
  if (!note) throw new Error("У вас нет прав");
};
export default checkUserPermission;
