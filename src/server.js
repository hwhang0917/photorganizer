import express from "express";
import dotenv from "dotenv";
import app from "./app";
import "./db";
import "./models/User";
import "./models/Image";

dotenv.config();

const PORT = process.env.PORT || 3000;

const handleListen = () => console.log(`Listening on http://localhost:${PORT}`);

app.listen(PORT, handleListen);
