export const research_papers = `CREATE TABLE research_Papers (
    paper_id INT NOT NULL AUTO_INCREMENT,
    paper_title VARCHAR(100),
    conference INT,
    Publish_date DATE,
    author_no INT NOT NULL,
    PRIMARY KEY (paper_id),
    FOREIGN KEY(author_no) REFERENCES authors(author_no)
   );`;

export const mentors = `CREATE TABLE mentors(
    mentor INT NOT NULL AUTO_INCREMENT, 
    mentor_name VARCHAR(100),
    PRIMARY KEY(mentor)
  );`;

export const conferences = `CREATE TABLE conferences (conference INT NOT NULL AUTO_INCREMENT, conference_room VARCHAR(50), PRIMARY KEY(conference));`;

export const insertAuthors = `INSERT INTO authors VALUES ? `;
export const authorsValues = [
  [1, "robert noo", "kortal", "1975-02-20", 10, "m", 1],
  [2, "katalin demino", "MIT", "1969-05-28", 7, "m", 2],
  [3, "Steve Script", "MIT", "1983-07-01", 9, "m", 3],
  [4, "Randy Python", "Oxford", "1980-03-10", 11, "m", 4],
  [5, "Siri Macintosh", "MIT", "1975-05-05", 20, "f", 5],
  [6, "Bill Sequel", "Hardvard", "1987-09-22", 8, "m", 6],
  [7, "Elixir Jimenez", "Princeton", "1985-07-20", 10, "f", 7],
  [8, "Claudia Gates", "Princeton", "1987-02-01", 5, "f", 8],
  [9, "Debby van der Web", "Leiden Universiteit", "1975-02-20", 6, "f", 9],
  [10, "Martha Loop", "Leiden Universiteit", "1984-11-20", 8, "f", 10],
  [11, "Hellen Callback", "NYU", "1990-04-10", 4, "f", 11],
  [12, "Danae Jobs", "MIT", "1988-04-20", 10, "f", 12],
  [13, "Unmesh Widenius", "Harvard", "1990-02-25", 7, "m", 13],
  [14, "Gina Ruby", "NYU", "1993-06-20", 5, "f", 14],
  [15, "Ray React", "MIT", "1990-03-13", 10, "m", 15],
];
export const insertMentors = `INSERT INTO mentors VALUES ?`;
export const mentorsValues = [
  [1, "dina"],
  [2, "samy"],
  [3, "jamal"],
  [4, "joo"],
  [5, "John"],
  [6, "Manuel"],
  [7, "Thomas"],
  [8, "David"],
  [9, "Judith"],
  [10, "Jessica"],
  [11, "Jane"],
  [12, "Carter"],
  [13, "Bill"],
  [14, "Albert"],
  [15, "senor"],
];
export const insertResearchPapers = `INSERT INTO research_Papers VALUES ? `;
export const researchPapersValues = [
  [1, "life quality", 1, "2021-03-20", 1],
  [2, "food values", 2, "2021-10-20", 1],
  [3, "steak parameter, ", 1, "2021-12-20", 2],
  [4, "The future of web development", 2, "2021-05-24", 2],
  [5, "Responsive web development", 1, "2021-08-28", 3],
  [6, "User-centered Web development", 2, "2021-12-01", 3],
  [7, "Semantic web technologies", 1, "2021-03-07", 4],
  [8, "RESTFUL API", 2, "2021-02-28", 4],
  [9, "Mobile applications", 1, "2020-03-20", 5],
  [10, "How to make a game app", 2, "2021-07-10", 5],
  [11, "Staying awake while reading the material", 1, "2021-06-11", 6],
  [12, "Blockchain technologies", 2, "2021-09-14", 6],
  [13, "Ciber security", 1, "2021-04-19", 7],
  [14, "big data management", 1, "2021-05-13", 7],
  [15, "Service bots ", 2, "2021-03-27", 8],
  [16, "Voice user interface", 1, "2021-06-06", 8],
  [17, "Nano technologies", 1, "2021-11-11", 9],
  [18, "Mobile payments system", 2, "2021-09-09", 9],
  [19, "Top 10 Strategic Technology Trends for 2021", 2, "2021-01-01", 10],
  [
    20,
    "2021 trends in robotics, ai, and healthcare innovation",
    2,
    "2021-09-20",
    10,
  ],
  [21, "10 predictions for online learning in 2020 ", 1, "2021-04-20", 11],
  [22, "iot based management system", 1, "2021-07-25", 11],
  [23, "extended reality", 1, "2021-05-10", 12],
  [24, "advance in 5G technology", 1, "2020-03-21", 12],
  [25, "connected car technology", 2, "2018-03-22", 13],
  [26, "Autonomous Driving", 2, "2020-03-10", 13],
  [27, "artificial brain blue brain", 2, "2021-01-20", 14],
  [28, "wearable biosensor", 2, "2021-05-20", 14],
  [29, "Parasitic Computing", 1, "2021-01-20", 15],
  [30, "Quantum dots", 1, "2020-02-20", 15],
];

export const insertConferences = `INSERT INTO conferences VALUES ?`;
export const conferencesValues = [
  [1, "A"],
  [2, "B"],
];

export const count_author = `SELECT paper_title, COUNT(*) FROM authors JOIN research_papers ON authors.author_no = research_papers.author_no GROUP BY paper_id;`;
export const sum_female_authors = `SELECT COUNT(*) AS 'Research papers from females'  FROM authors JOIN research_papers ON authors.author_no = research_papers.author_no WHERE gender = 'f';`;
export const avg_of_h_index = `SELECT  university, AVG(h_index) FROM authors GROUP BY university; `;
export const sum_research_papers = `SELECT university, COUNT(paper_title) FROM authors JOIN research_papers ON authors.author_no = research_papers.author_no GROUP BY university;`;
export const min_max_index = `SELECT  university, MIN(h_index) AS 'Lowest h_index',MAX(h_index) AS 'Higher h_index'  FROM authors GROUP BY university; `;
