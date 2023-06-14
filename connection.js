// const {MongoClient} = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// const dbname = 'lucky';
// const coll = 'lky';
 
// async function connection()
// {
//     const result= await client.connect();
//     let db = result.db(dbname);
//     let collection = db.collection(coll);
//     let tdata = await collection.find({}).toArray();
//     console.log(tdata);
// }
// connection();


const {MongoClient}= require('mongodb');
const url = 'mongodb://localhost:27017';
const client  = new MongoClient(url);
const databasename = 'lucky';
const collectionname = 'lky';

async function connection()
{
    const result  =await client.connect();
    const db = result.db(databasename);
    const collection = db.collection(collectionname);
    return collection;
}

module.exports = connection;

