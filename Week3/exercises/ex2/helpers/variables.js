

export const ACCOUNT = `CREATE TABLE account (
    account_number INT,
    balance DECIMAL(15,2),
    PRIMARY KEY (account_number)
)`
export const ACCOUNT_CHANGES = `CREATE TABLE account_changes (
    change_number INT, 
    account_number INT, 
    amount INT,
    changed_date DATE, 
    remark VARCHAR(50),
    FOREIGN KEY (account_number) REFERENCES account(account_number)
)`

export const INSERT_ACCOUNT =
  "INSERT INTO account (account_number, balance) VALUES(101,210000),(102,19000)"
;

export const INSERT_ACCOUNT_CHANGES =
`INSERT INTO account_changes (
    change_number, 
    account_number, 
    amount, 
    changed_date, 
    remark
    ) 
    VALUES
    (1,101,1000, "2021-05-28","done")`
;


export const START_TRANSACTION =  `START TRANSACTION`;
export const SEND_MONEY =  `UPDATE account SET balance = 20000 WHERE account_number = 101 `;
export const UPDATE_MONEY =  `UPDATE account SET balance = 20000 WHERE account_number = 102`;
export const MAKE_REPORT =  `UPDATE account_changes SET amount = 10000 WHERE account_number = 101`;
export const COMMIT_TRANSACTION =  `COMMIT`;