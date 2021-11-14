import types from "./contact-types";
import { v4 as uuid } from "uuid";

const addContact = (name) => ({
  type: types.ADD,
  payload: {
    id: uuid(),
    name,
  },
});

const deleteContact = (contactId) => ({
  type: types.DELETE,
  payload: contactId,
});

export default { addContact, deleteContact };
