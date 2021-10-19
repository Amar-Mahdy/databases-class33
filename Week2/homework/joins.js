import { connection } from "./connection.js";

async function joinQueries() {
  const authorAndMentor = `SELECT author_name, mentor_name FROM authors JOIN mentors ON authors.author_no = mentors.mentor;`;
  const authorAndPaperTitle = `SELECT author_name, paper_title FROM authors JOIN research_Papers ON authors.author_no = research_Papers.author_no;`;
  connection.connect();
  try {
    await Promise.all[
      (connection.query(authorAndMentor, (error, results) => {
        if (error) throw error;
        console.log("join author and mentor ", results);
      }),
      connection.query(authorAndPaperTitle, (error, results) => {
        if (error) throw error;
        console.log("join author and paper_title", results);
      }))
    ];
  } catch (error) {
    console.error(error);
  }
  connection.end();
}

joinQueries();
