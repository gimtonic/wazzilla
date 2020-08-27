import { check } from "express-validator";

export const createSession = [
  check("email")
    .normalizeEmail()
    .isEmail()
    .isLength({ max: 500 })
    .withMessage("Не должно быть больше 500")
    .isString()
    .withMessage("Должно быть строкой")
    .notEmpty()
    .withMessage("Не должна равнятся нулю"),
  check("password")
    .isLength({ max: 500 })
    .withMessage("Не должно быть больше 500")
    .isString()
    .withMessage("Должно быть строкой")
    .notEmpty()
    .withMessage("Не должна равнятся нулю"),
];
