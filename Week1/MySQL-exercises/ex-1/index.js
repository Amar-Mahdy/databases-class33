import { connection } from "./connection.js";
import {
  inviteeTable,
  roomTable,
  meetingTable,
  inviteeRecords,
  roomRecords,
  meetingRecords,
} from "./queries.js";
import { dropMeetup, createMeetup, useMeetup } from "./manipulateMeetup.js";

connection.connect();

// Drop and create meetup database
const meetupDatabase = () => {
  dropMeetup();
  createMeetup();
  useMeetup();
};
// create tables
const creatingTables = () => {
  inviteeTable();
  roomTable();
  meetingTable();
};
// insert rows
const insertRecords = () => {
  inviteeRecords();
  roomRecords();
  meetingRecords();
};

meetupDatabase();
creatingTables();
insertRecords();

connection.end();
