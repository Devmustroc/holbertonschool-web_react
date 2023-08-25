import { RowID, RowElement } from "./interface";
import * as crud from "crud";

const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva",
}
const newRowId: RowID = crud.insertRow(row);

const updatedRow: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva",
}
CRUD.updateRow(newRowId, updatedRow);
CRUD.deleteRow(newRowId);
