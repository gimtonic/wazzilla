import { check, param, sanitize } from "express-validator";
import { getNote, getNoteByHashLink as getNoteByLink } from "@services/note";

export const createNote = [
  check("desc")
    .isLength({ max: 1000 })
    .withMessage("Не должно быть больше 1000")
    .isString()
    .withMessage("Должно быть строкой")
    .notEmpty()
    .withMessage("Не должна равнятся нулю"),
];

export const editNote = [
  check("desc")
    .isLength({ max: 4 })
    .withMessage("Не должно быть больше 1000")
    .isString()
    .withMessage("Должно быть строкой")
    .notEmpty()
    .withMessage("Не должна равнятся нулю"),
];

export const getNoteByHashLink = [
  param("hashLink").custom(async (value) => {
    const note = await getNoteByLink(value);
    if (!note) throw new Error("Нет такой заметки");
  }),
];

export const getNotes = [
  check("page")
    .isNumeric()
    .withMessage("Должно быть числом")
    .notEmpty()
    .withMessage("Не должна равнятся нулю"),
];
