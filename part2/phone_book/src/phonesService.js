import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

export class PhoneService {
  static getAll() {
    const request =  axios.get(baseUrl)
    return request.then((response) => response.data);
  }
  static createPerson({person}) {
    const request =  axios.post(baseUrl, person)
    return request.then((response) => response.data);
  }
  static put({person}) {
    const request =  axios.put(`${baseUrl}/${person.id}`, person)
    return request.then((response) => response.data);
  }
  static dalete() {
    const request =  axios.delete(`${baseUrl}/${person.id}`)
    return request.then((response) => response.data);
  }
}

    