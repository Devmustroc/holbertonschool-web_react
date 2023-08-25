import { RowID, RowElement } from "./interface";
import * as crud from "crud";

const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva",
}
const newRowId: RowID = crud.insertRow(row);

const updatedRow: RowElement = {
    ...row,
    age: 23,
}
CRUD.updateRow(newRowId, updatedRow);
CRUD.deleteRow(newRowId);
