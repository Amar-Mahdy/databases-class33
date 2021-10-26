import { execQuery } from "../helpers/connection.js";


export const RESTART_DATABASE = async () => {

    try{
        await Promise.all[
            execQuery('DROP DATABASE IF EXISTS week3', console.log("Old week3 Database Dropped")),
            execQuery("CREATE DATABASE week3", console.log("New week3 Database Created")),
            execQuery("USE week3", console.log("week3 Database In Use"))
        ]

    }catch(error){
        console.log(error);
    }
}