// @ts-ignore
import bcrypt from "bcryptjs";

const passwordCompareSync = (passwordToTest: String, passwordHash: String) =>
  bcrypt.compareSync(passwordToTest, passwordHash);

export default passwordCompareSync;
