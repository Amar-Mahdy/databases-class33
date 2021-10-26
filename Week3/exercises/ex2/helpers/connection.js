import mysql from "mysql";
import util from "util";

export const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "week3",
});

export const execQuery = util.promisify(connection.query.bind(connection));
