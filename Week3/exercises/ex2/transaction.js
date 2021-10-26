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
    await Promise.all[
      execQuery(START_TRANSACTION, console.log("transaction started")),
      execQuery(SEND_MONEY, console.log("money has been withdraw")),
      execQuery(UPDATE_MONEY, console.log("money has been arrived")),
      execQuery(MAKE_REPORT, console.log("transaction report has been made")),
      execQuery(COMMIT_TRANSACTION, console.log("transaction done"))
    ];
  } catch (error) {
    console.log(error);
  }
  connection.end();
};
transaction();
