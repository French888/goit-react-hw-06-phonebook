import { createAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export const addContact = createAction("app/add", (name, number) => ({
  payload: {
    id: uuid(),
    name,
    number,
  },
}));

export const deleteContact = createAction("app/delete");

export const changeFilter = createAction("app/changeFilter");
