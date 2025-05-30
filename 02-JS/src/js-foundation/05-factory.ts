interface buildMakePersonOptions {
  getUUID: () => string;
  getAge: (birthdate: string) => number;
}

interface personOptions {
  name: string;
  birthdate: string;
}


export const buildMakePerson = ({getAge, getUUID}: buildMakePersonOptions) => {

  return ({ name, birthdate }: personOptions) => {

    return {
      id: getUUID(),
      name: name,
      birthdate: birthdate,
      age: getAge(birthdate),
    }
  }

}