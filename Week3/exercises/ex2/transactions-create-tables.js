import { connection, execQuery } from "../ex2/helpers/connection.js";
import { RESTART_DATABASE } from "./helpers/restart.js";
import { ACCOUNT, ACCOUNT_CHANGES } from "./helpers/variables.js";

const createTables = async () => {
    connection.connect();
    RESTART_DATABASE();
  try {
    await Promise.all[
      (execQuery(ACCOUNT, console.log("account table ready")),
      execQuery(ACCOUNT_CHANGES, console.log("account_changes table ready")))
    ];
  } catch (error) {
    console.log(error);
  }
  connection.end();
};
createTables();
