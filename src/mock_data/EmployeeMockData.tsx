import { faker } from "@faker-js/faker";
import { SimpleEvent } from "../events/EventCollection";
import { IEmployeeModel } from "../types/IEmployee";

export const generateEmployees = (): Array<IEmployeeModel> => {
  var list: Array<IEmployeeModel> = [];

  for (var i = 0; i < 10; i++) {
    list.push({
      id: i,
      name: faker.name.firstName(),
      surname: faker.name.lastName(),
      email: faker.internet.email(),
      title: faker.name.jobTitle(),
      phoneNumber: faker.phone.number(),
      pictureUrl: faker.image.avatar(),
      voteCount: 0,
      description: faker.lorem.paragraphs(3),
    });
  }

  SimpleEvent.fire({ name: "Employee list fetched", detail: list });
  return list;
};
