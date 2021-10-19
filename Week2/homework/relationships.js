import { connection } from "./connection.js";
import {
  insertAuthors,
  authorsValues,
  insertMentors,
  mentorsValues,
  insertResearchPapers,
  researchPapersValues,
  insertConferences,
  conferencesValues,
  research_papers,
  mentors,
  conferences,
} from "./variables.js";

const creatingTablesAndData = async () => {
  connection.connect();
  try {
    await Promise.all[
      (connection.query(research_papers, (error, results) => {
        if (error) throw error;
        console.log("research_papers table has been created");
      }),
      connection.query(mentors, (error, results) => {
        if (error) throw error;
        console.log("mentors attribute has been created");
      }),
      connection.query(insertAuthors, [authorsValues], (error, results) => {
        if (error) throw error;
        console.log("authors value has been inserted");
      }),
      connection.query(insertMentors, [mentorsValues], (error, results) => {
        if (error) throw error;
        console.log("mentors value has been inserted");
      }),
      connection.query(
        insertResearchPapers,
        [researchPapersValues],
        (error, results) => {
          if (error) throw error;
          console.log("researchPapers value has been inserted");
        }
      ),
      connection.query(conferences, (error, results) => {
        if (error) throw error;
        console.log("conferences table has been created");
      }),
      connection.query(
        insertConferences,
        [conferencesValues],
        (error, results) => {
          if (error) throw error;
          console.log("conferences value has been inserted");
        }
      ))
    ];
  } catch (error) {
    console.error(error);
  }
  connection.end();
};
creatingTablesAndData();
