import axios from "axios";
const baseUrl = "/api/persons";

export class PhoneService {
  static getAll() {
    const request =  axios.get(baseUrl)
    return request.then((response) => {
      console.log(response.data)
      return response.data
    });
  }
  static createPerson({person}) {
    const request =  axios.post(baseUrl, person)
    return request.then((response) => response.data);
  }
  static updatePerson({id, person}) {
    const request =  axios.put(`${baseUrl}/${id}`, person)
    return request.then((response) => response.data);
  }
  static dalete({id}) {
    const request =  axios.delete(`${baseUrl}/${id}`)
    return request.then((response) => response.data)
  }
}

    