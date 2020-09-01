import { check } from "express-validator";
import { findUserByEmail } from "@services/user";
export const registerUser = [
  check("email")
    .normalizeEmail()
    .isEmail()
    .withMessage("Должно быть почтой")
    .custom(async (value) => {
      const user = await findUserByEmail(value);
      if (user) throw new Error("Почта уже занята");
    })
    .isLength({ max: 500 })
    .withMessage("Не должно быть больше 500"),
  check("password")
    .isString()
    .withMessage("Должно быть строкой")
    .notEmpty()
    .withMessage("Не должна равнятся нулю"),
];
