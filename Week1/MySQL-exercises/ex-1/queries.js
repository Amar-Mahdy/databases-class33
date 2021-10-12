import { connection } from "./connection.js";
import {
  invitee_table,
  room_table,
  meeting_table,
  invitee_insert,
  room_insert,
  meeting_insert,
} from "./variables.js";

// create tables
export const inviteeTable = () => {
  connection.query(invitee_table, (error, results) => {
    if (error) {
      throw error;
    } else {
      console.log("Invitee Table Has Been Created");
    }
  });
};

export const roomTable = () => {
  connection.query(room_table, (error, results) => {
    if (error) {
      throw error;
    } else {
      console.log("Room Table Has Been Created");
    }
  });
};

export const meetingTable = () => {
  connection.query(meeting_table, (error, results) => {
    if (error) {
      throw error;
    } else {
      console.log("Meeting Table Has Been Created");
    }
  });
};

// insert rows
export const inviteeRecords = () => {
  connection.query(invitee_insert, (error, results) => {
    if (error) {
      throw error;
    } else {
      console.log("5 Records Has Been Inserted To Invitee");
    }
  });
};

export const roomRecords = () => {
  connection.query(room_insert, (error, results) => {
    if (error) {
      throw error;
    } else {
      console.log("5 Records Has Been Inserted To Room");
    }
  });
};
export const meetingRecords = () => {
  connection.query(meeting_insert, (error, results) => {
    if (error) {
      throw error;
    } else {
      console.log("5 Records Has Been Inserted To Meeting");
    }
  });
};
