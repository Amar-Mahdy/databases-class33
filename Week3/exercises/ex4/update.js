import { MongoClient } from "mongodb";
                                                                                                                                     
const url = "mongodb+srv://HYF:1993@cluster0.qg1x5.mongodb.net/world?retryWrites=true&w=majority";
const client = new MongoClient(url);

                      
async function run() {
  try{
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db("world");
        const col = db.collection("city");
        
        //construct a document
        
        const oneCity = {
            ID: 2001,
            Name: "cairo",
            CountryCode: "CAI",
            District: "north",
            Population: 20000000
        };

        // update the population
        const newValues = { $set: { Population: 10000000 } };
        const city = await col.updateOne(oneCity, newValues);
        console.log({ city });

    } catch (err) {
        console.log(err.stack);
    }finally {
        await client.close();
    }
}

run().catch(console.dir);