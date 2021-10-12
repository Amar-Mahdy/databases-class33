import { connection } from "./connection.js";

export const dropMeetup = () => {
  connection.query("DROP DATABASE IF EXISTS meetup", (err, result) => {
    if (err) throw err;
    console.log("Old Meetup Database Has Been Dropped");
  });
};
export const createMeetup = () => {
  connection.query("CREATE DATABASE meetup", (err, result) => {
    if (err) throw err;
    console.log("New Meetup Database Has Been Created");
  });
};
export const useMeetup = () => {
  connection.query("USE meetup", (err, result) => {
    if (err) throw err;
    console.log("Meetup Database In Use");
  });
};
