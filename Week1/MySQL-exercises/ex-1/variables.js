// create tables
export const invitee_table =
  "CREATE TABLE Invitee (invitee_no int, Invitee_name varchar(50), invited_by text)";

export const room_table =
  "CREATE TABLE Room (room_no int, room_name varchar(50), floor_number int)";

export const meeting_table =
  "CREATE TABLE Meeting (meeting_no int, meeting_title varchar(50), starting_time time, ending_time time, room_no int)";

// insert records
export const invitee_insert =
  "INSERT INTO Invitee (invitee_no, invitee_name, invited_by) VALUES(1,'Nora','Caroline'),(2,'Robin','Esmeralda'),(3,'Sophie','Emma'),(4,'Tamara','Zoe'),(5,'Veronica','joo')";

export const room_insert =
  "INSERT INTO Room (room_no, room_name, floor_number) VALUES(1,'Noggin Chamber',3),(2,'ABC Room',4),(3,'Pontification Station',5),(4,'Bored Room',6),(5,'Cranium Focus',4)";

export const meeting_insert =
  "INSERT INTO Meeting (meeting_no, meeting_title, starting_time, ending_time, room_no) VALUES(1,'Prose And Pros','8:00:00', '9:00:00',10),(2,'Catchy Conference','9:00:00', '10:00:00',11),(3,'Build Your Base','10:00:00', '11:00:00',12),(4,'Supreme Sessions','11:00:00', '12:00:00',13),(5,'Scintillating Sessions','12:00:00', '13:00:00', 14)";
