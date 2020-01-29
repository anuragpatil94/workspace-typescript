import faker from "faker";

class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName() + " " + faker.name.lastName();

    // Here ts doesn't know that location is an object since we didn't mention its type.
    // hence we cannot set value as this.location.lat. rather we do as follows
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
}

export default User;
