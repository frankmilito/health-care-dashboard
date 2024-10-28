import { HttpResponse, http } from "msw";
import { faker, simpleFaker } from "@faker-js/faker";

const users = new Array(15).fill(null).map(() => ({
  dob: {
    age: faker.number.int(),
  },
  cell: simpleFaker.string.uuid(),
  picture: {
    medium: faker.image.avatar(),
  },
  gender: faker.person.gender(),
  name: {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
  },
}));

const getUsers = http.get("*/randomuser.me", ({ request }) => {
  return HttpResponse.json(users, { status: 200 });
});

const handlers = [getUsers];

export default handlers;
