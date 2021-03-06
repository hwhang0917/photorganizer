// This is a mock database for testing purpose
const images = [
  {
    id: 1,
    fileURL: "https://i.ytimg.com/vi/GFfyJz9iT6o/maxresdefault.jpg",
    location: "Paris",
    date: new Date(2019, 11, 12),
    userID: 2,
  },
  {
    id: 2,
    fileURL: "https://i.ytimg.com/vi/KoiyK5kiY3M/maxresdefault.jpg",
    location: "Las Vegas",
    date: new Date(2020, 2, 2),
    userID: 2,
  },
  {
    id: 3,
    fileURL: "https://i.ytimg.com/vi/-WTaKuUBENs/maxresdefault.jpg",
    location: "Seoul",
    date: new Date(2011, 9, 29),
    userID: 2,
  },
  {
    id: 4,
    fileURL: "https://i.ytimg.com/vi/-WTaKuUBENs/maxresdefault.jpg",
    location: "Seoul",
    date: new Date(2011, 9, 29),
    userID: 2,
  },
  {
    id: 5,
    fileURL: "https://i.ytimg.com/vi/-WTaKuUBENs/maxresdefault.jpg",
    location: "Seoul",
    date: new Date(2011, 9, 29),
    userID: 2,
  },
  {
    id: 6,
    fileURL: "https://i.ytimg.com/vi/-WTaKuUBENs/maxresdefault.jpg",
    location: "Seoul",
    date: new Date(2011, 9, 29),
    userID: 2,
  },
];

export const getImagesByUser = (userID) => {
  if (!userID) {
    throw Error("❌ YOU FORGOT TO PASS USER ID TO THE FUNCTION");
  }
  return images.filter((image) => image.userID === userID);
};

import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB");
const handleError = (error) => console.log(`Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.once("error", handleError);
