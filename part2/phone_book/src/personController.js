import { PhoneService } from "./services/phonesService";
export class PersonController {
  static getAll() {
    return PhoneService.getAll();
  }
  static sendPerson({ persons, person }) {
    const index = persons.findIndex((p) => p.name == person.name);
    if (index >= 0) {
     return PhoneService.updatePerson({ id: persons[index].id, person }).then(
        (returnedPerson) =>
          persons.map((p) => (p.name !== person.name ? p : returnedPerson))
      );
    }
    return PhoneService.createPerson({person}).then(
      personReturned=>persons.concat(personReturned)
      )
  }
  static deletePerson({persons, id}){
    return PhoneService.dalete({id}).then(data=>{
      return persons.filter(person=>person.id!==id)
    });
  }
}
