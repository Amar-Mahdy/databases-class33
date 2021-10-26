
// 1- Give an example of a value that can be passed as name and code that would take advantage of SQL-injection and (fetch all the records in the database)
getPopulation(Country, `k' or '1=1`, `5' or '1=1`);

// 2- Rewrite the function so that it is no longer vulnerable to SQL injection
function getPopulation(Country, name, code, cb) {
    // assuming that connection to the database is established and stored as conn
    conn.query(
      `SELECT Population FROM ${Country} WHERE Name =` + conn.escape(name) + "and code =" + conn.escape(code)
      function(err, result) {
        if (err) cb(err);
        if (result.length == 0) cb(new Error("Not found"));
        cb(null, result[0].name);
      }
    );
}