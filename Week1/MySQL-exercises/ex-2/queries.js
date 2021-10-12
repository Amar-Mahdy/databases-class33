import { connection } from "./connection.js";
import {
  query1,
  query2,
  query3,
  query4,
  query5,
  query6,
  query7,
  query8,
  query9,
  query10,
} from "./variables.js";

//  1- names of countries with population greater than 8 million
export const queryA = () => {
  connection.query(query1, (error, result) => {
    if (error) throw error;
    const answers = result.map((answer) => answer.name);
    console.log("The 1st solution is: ", answers);
  });
};
//  2- names of countries that have “land” in their names
export const queryB = () => {
  connection.query(query2, (err, result) => {
    if (err) throw err;
    const answers = result.map((answer) => answer.name);
    console.log("The 2nd solution is: ", answers);
  });
};
export const queryC = () => {
  connection.query(query3, (err, result) => {
    if (err) throw err;
    const answers = result.map((answer) => answer.name);
    console.log("The 3rd solution is: ", answers);
  });
};
export const queryD = () => {
  connection.query(query4, (err, result) => {
    if (err) throw err;
    const answers = result.map((answer) => answer.name);
    console.log("The 4th solution is: ", answers);
  });
};
export const queryE = () => {
  connection.query(query5, (err, result) => {
    if (err) throw err;
    const answers = result.map((answer) => answer.name);
    console.log("The 5th solution is: ", answers);
  });
};
export const queryF = () => {
  connection.query(query6, (err, result) => {
    if (err) throw err;
    const answers = result.map((answer) => answer.name);
    console.log("The 6th solution is: ", answers);
  });
};
export const queryG = () => {
  connection.query(query7, (err, result) => {
    if (err) throw err;
    const answers = result[0].population;
    console.log("The 7th solution is: ", answers);
  });
};
export const queryH = () => {
  connection.query(query8, (err, result) => {
    if (err) throw err;
    const answers = result.map((answer) => answer.name);
    console.log("The 8th solution is: ", answers);
  });
};
export const queryI = () => {
  connection.query(query9, (err, result) => {
    if (err) throw err;
    const answers = result.map((answer) => answer.name);
    console.log("The 9th solution is: ", answers);
  });
};
export const queryJ = () => {
  connection.query(query10, (err, result) => {
    if (err) throw err;
    const answers = result[0]["SUM(Population)"];
    console.log("The 10th solution is: ", answers);
  });
};
