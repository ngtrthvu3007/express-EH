import dotenv from "dotenv";
import mongoose from "mongoose";
// import { MongoClient } from "mongodb";
dotenv.config();

const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@event-hub.huc2g.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=event-hub`;

export const databaseConnection = async () => {
  await mongoose
    .connect(url)
    .then(() => {
      console.log(`Connect ${process.env.DB_NAME} database success!`);
    })
    .catch((error) => {
      console.log("Error in Database Service: ", error);
    });
};

// const client = new MongoClient(url);
// const db = client.db("event-hub");
// const collections = await db.listCollections().toArray();
// console.log(collections);
// mongoose.connection.on("connected", () => {
//   // Lấy thông tin cơ sở dữ liệu
//   const db = mongoose.connection.db;

//   console.log("Kết nối cơ sở dữ liệu thành công");
//   console.log(" cơ sở dữ liệu:", db);

//   // Lấy danh sách các collection trong cơ sở dữ liệu
//   db.listCollections().toArray((err, collections) => {
//     console.log("Các collection trong cơ sở dữ liệu:");
//     collections.forEach((collection) => {
//       console.log(collection.name);
//     });
//   });
// });
