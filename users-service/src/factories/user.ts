//@ts-ignore
import faker from "faker";

const user = () => {
  return {
    email:
      faker.name.lastName().toLowerCase() + "@" + faker.internet.domainName(),
    password: faker.internet.password(),
  };
};

export default user;
