import { HttpResponse, http } from "msw";
import { faker, simpleFaker } from "@faker-js/faker";
import { User } from "@/service/users";

const users: User[] = new Array(10).fill(null).map(() => ({
  dob: {
    age: faker.number.int({ min: 18, max: 60 }),
  },
  cell: simpleFaker.string.uuid(),
  picture: {
    medium: faker.image.avatar(),
  },
  gender: faker.helpers.arrayElement(["Male", "Female"]),
  name: {
    first: faker.person.firstName(),
    last: faker.person.lastName(),
  },
}));

const getUsers = http.get("https://randomuser.me/api/?results=10", () => {
  const results = { results: users };
  console.log(results, users, "s");
  return HttpResponse.json(results, { status: 200 });
});

const handlers = [getUsers];

export default handlers;
