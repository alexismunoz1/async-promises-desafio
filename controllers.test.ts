import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";


test("Testeo el constructor del controller", async (t) => {
 const controller = new ContactsController();
 t.deepEqual(await controller.contacts.load(), await controller.promesa);
});

test("Testeo el método processOptions", async (t) => {
 const model = new ContactsController();
 const json = await model.promesa;
 const mockOptions = new ContactsControllerOptions();
 mockOptions.action = "get";
 mockOptions.params = { id: 2, name: "" };
 t.deepEqual(json, await model.processOptions(mockOptions));
});
