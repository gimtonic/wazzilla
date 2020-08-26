//@ts-ignore
import bcrypt from "bcryptjs";

const hashPassword = (password: String) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12));

export default hashPassword;
