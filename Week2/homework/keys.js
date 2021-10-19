import { connection } from "./connection.js";

const createTableAuthors = async () => {
  const author = `CREATE TABLE authors( 
    author_no INT,
    author_name VARCHAR(50), 
    university VARCHAR(50),
    date_of_birth DATE,
    h_index INT,
    gender ENUM('m','f'),
    PRIMARY KEY(author_no)
    )`;
  const mentor = `ALTER TABLE authors ADD mentor INT, ADD FOREIGN KEY(mentor) REFERENCES authors(author_no)`;

  connection.connect();
  try {
    await Promise.all[
      (connection.query(author, (error, results) => {
        if (error) throw error;
        console.log("authors table has been created", results);
      }),
      connection.query(mentor, (error, results) => {
        if (error) throw error;
        console.log("mentor attribute has been created", results);
      }))
    ];
  } catch (error) {
    console.log(error);
  }

  connection.end();
};
createTableAuthors();
