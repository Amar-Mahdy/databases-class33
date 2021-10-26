import { connection, execQuery } from "./helpers/connection.js";
import { INSERT_ACCOUNT, INSERT_ACCOUNT_CHANGES } from "./helpers/variables.js";

const insertValues = async () => {
    connection.connect();
  try {
    await Promise.all[
      (execQuery(INSERT_ACCOUNT, console.log("account value inserted")),
      execQuery(INSERT_ACCOUNT_CHANGES,console.log("account_changes value inserted")
      ))
    ];
  } catch (error) {
    console.log(error);
  }
  connection.end();
};
insertValues();
