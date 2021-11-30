import { connection, execQuery } from "./helpers/connection.js";
import {
    START_TRANSACTION,
    SEND_MONEY,
    UPDATE_MONEY,
    MAKE_REPORT,
    COMMIT_TRANSACTION,
}       from "./helpers/variables.js";

const transaction = async () => {
    connection.connect();
  try {

    await execQuery(START_TRANSACTION, console.log("transaction started")),
    await  execQuery(SEND_MONEY, console.log("money has been withdraw")),
    await  execQuery(UPDATE_MONEY, console.log("money has been arrived")),
    await execQuery(MAKE_REPORT, console.log("transaction report has been made")),
    await execQuery(COMMIT_TRANSACTION, console.log("transaction done"))
    
  } catch (error) {
    console.log(error);
  }
  connection.end();
};
transaction();
