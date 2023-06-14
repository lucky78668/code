// // // const { json } = require('express/lib/response');
const data = require('./data');
const http = require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'applicatio\json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(4000);


// const http = require('http');

// const hostname = 'localhost';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World!\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// // });

// const {MongoClient} = require('mongodb');
// const url ='mongodb://localhost:27017';
// const client = new MongoClient(url);
// const database = 'lucky';
// async function getData()
// {
//     let result = await client.connect();
//     let db = result.db(database);
//     let collection = db.collection('lky');
//     let response = await collection.find({"name":"lucky"}).toArray();
//     console.log(response);
// }
// getData();


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



// const {MongoClient}= require('mongodb');
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// const dbname = 'lucky';
// const coll = 'lky';

// async function connects()
// {
//     const res = await client.connect();
//     const db =  res.db(dbname);
//     const collection = db.collection(coll);
//     const tresult =await collection.find({}).toArray();
//     console.log(tresult);
// }
// connects();


// const {MongoClient} = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// const dbname = 'lucky';
// const collectionname = 'lky';

// async function luckyy()
// {
//     const response = await client.connect();
//     const db  = response.db(dbname);
//     const collection = db.collection(collectionname);
//     const totaldata = await collection.find({}).toArray();
//     console.log(totaldata);
//  }
//  luckyy();

// const dbconnect = require('./connection');
// const main =async()=>{
//     let data =await dbconnect();
//      datam=await data.find({}).toArray();
//     console.log(datam);
// }
// main();

// const dbconnect = require('./connection');
// const main =async()=>{
//     const lucky =await dbconnect();
//     const my = await lucky.find({'name':'lucky'}).toArray();
//     console.log(my);
// }
// main();

// const dbconnect = require('./connection');
// const main =async()=>{
//     const lucky =await dbconnect();
//     const my = await lucky.insertOne({'name':'luckytayyab','dbh':'5567','phone':'67747'});
//     console.log(my);
// }
// main();
// const dbconnect = require('./connection');
// const main =async()=>{
//     const lucky =await dbconnect();
//     const my = await lucky.updateOne({'name':'luckytayyab','dbh':'5567'},{$set:{'name':'luckyhoin','dbh':'668'}});
//     console.log(my);
// }
// main();
// const dbconnect = require('./connection');
// const main =async()=>{
//     const lucky =await dbconnect();
//     const my = await lucky.deleteOne({'name':'luckyhoin','dbh':'668'});
//     console.log(my);
// }
// main();




// const murshad = require('./connection');
// const mains =async()=>{
//     const lky =await murshad();
//     const kajal = await lky.insertOne({'name':'kajal'});
//     console.log(kajal);
// }

// mains();


// const express = require('express');
// const dbc = require('./connection');
// const luck = express();
// luck.get('/',async(req,res)=>{
//     const data = await dbc();
//     const luk = await data.find({}).toArray();
// res.send(luk);

// }).listen(3000);


// const express = require('express');
// const database = require('./connection');
// const appp = express();
// appp.use(express.json());
// appp.post('/', async(req, res)=>{
//     // console.log(req.body);
// const dat = await database();
// const rs = await dat.insertOne(req.body);
// console.log(rs);
//     res.send(req.body);

// }).listen(3000);

// const express = require('express');
// const das = require('./connection');
// const app = express();
// app.use(express.json());
// app.put('/', async(req,res)=>{
//     const gh = await das();
//     // console.log(req.body);
//         // const my = await lucky.updateOne({'name':'luckyhoin','dbh':'5567'},{$set:{'name':'lucky','dbh':'9000'}});

//     const nh = await gh.updateOne({"name": "lucky"}, {$set:{"dbh":"956"}});
//     console.log(nh);
//     res.send({ "lucky": "6677" });

// }).listen(3000);


// const express = require('express');
// const das = require('./connection');
// const app = express();
// // app.use(express.json());
// app.delete('/', async(req,res)=>{
//     const gh = await das();
//     // console.log(req.body);
//         // const my = await lucky.updateOne({'name':'luckyhoin','dbh':'5567'},{$set:{'name':'lucky','dbh':'9000'}});

//     const nh = await gh.deleteOne({"name": "lucky"});
//     console.log(nh);
//     res.send({ "lucky": "6677" });

// }).listen(3000);


// const lucky = require('./connection');

// const main =async()=>{
// const na = await lucky();
// const data = await na.find({}).toArray();
// console.log(data);
// }
// main();


// const express = require('express');
// const dataco = require('./connection');
// luck.get('/',async(req,res)=>{
// const luc = await dataco();
// const dat = await luc.find({}).toArray();
//     res.send(dat);
// }).listen(3000);
