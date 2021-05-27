/*Una Promise (promesa en castelano) es un objeto que representa la
terminación o el fracazo de una operación asíncrona*/

import * as jsonfile from "jsonfile";


class Contact {
  id: number;
  name: string;
}

class ContactsCollection {
  data: Contact[] = [];
  load() {
    // usar la version Async (readFile)
    const promesa = jsonfile.readFile("./contacts.json"); //El then recibe la respuesta de la promesa.
    promesa.then((json) => {
      this.data = json;
    });
    return promesa;
  }
  getAll() {
    return this.data;
  }
  addOne(contact: Contact) {
    this.data.push(contact);
  }
  save() {
    // usar la version Async (writeFIle)
    jsonfile.writeFile("./contacts.json", this.data);
  }
  getOneById(id) {
    const encontrado = this.data.find((contacto) => {
      if (contacto.id == id) {
        return true;
      }
    });

    return encontrado;
  }
}
export { ContactsCollection, Contact };
