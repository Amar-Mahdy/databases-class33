import mysql from "mysql";

export const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  //database : 'meetup',
  // port : 3307
});
