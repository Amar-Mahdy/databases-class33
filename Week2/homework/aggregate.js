import { connection } from "./connection.js";
import {
  count_author,
  sum_female_authors,
  avg_of_h_index,
  sum_research_papers,
  min_max_index,
} from "./variables.js";

async function aggregates() {
  connection.connect();
  try {
    await Promise.all[
      (connection.query(count_author, (error, results) => {
        if (error) throw error;
        console.log("The result is: ", results);
      }),
      connection.query(sum_female_authors, (error, results) => {
        if (error) throw error;
        console.log("The result is: ", results);
      }),
      connection.query(avg_of_h_index, (error, results) => {
        if (error) throw error;
        console.log("The result is: ", results);
      }),
      connection.query(sum_research_papers, (error, results) => {
        if (error) throw error;
        console.log("The result is: ", results);
      }),
      connection.query(min_max_index, (error, results) => {
        if (error) throw error;
        console.log("The result is: ", results);
      }))
    ];
  } catch (error) {
    console.log(error);
  }
  connection.end();
}
aggregates();
