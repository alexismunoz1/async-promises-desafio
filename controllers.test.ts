import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";


test("Testeo el constructor del controller", (t) => {
 const model = new ContactsController();
 model.promesa.then((json) => {
  t.deepEqual(json, model.contacts.data);
 });
});

test("Testeo el método processOptions", (t) => {
 const model = new ContactsController();
 model.promesa.then((json) => {
  const mockOptions = new ContactsControllerOptions();
  mockOptions.action = "get";
  mockOptions.params = { id: 1, name: "ana" };
  t.deepEqual(json, model.processOptions(mockOptions));
 });
});
