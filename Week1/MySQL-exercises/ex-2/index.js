import { connection } from "./connection.js";
import {
  queryA,
  queryB,
  queryC,
  queryD,
  queryE,
  queryF,
  queryG,
  queryH,
  queryI,
  queryJ,
} from "./queries.js";

connection.connect();
const allQueries = () => {
  //  1- names of countries with population greater than 8 million
  queryA();
  //  2- names of countries that have “land” in their names
  queryB();
  // 3- names of the cities with population in between 500,000 and 1 million
  queryC();
  // 4- name of all the countries on the continent ‘Europe’
  queryD();
  // 5- List all the countries in the descending order of their surface areas
  queryE();
  // 6- names of all the cities in the Netherlands
  queryF();
  // 7- population of Rotterdam
  queryG();
  // 8- top 10 countries by Surface Area
  queryH();
  // 9- top 10 most populated cities
  queryI();
  // 10- population number of the world
  queryJ();
};
allQueries();
connection.end();
