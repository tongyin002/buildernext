import express from "express";
import next from "next";
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User";

dotenv.config();
const port = 3000;
const dev = process.env.NODE_ENV !== "production";
const MONGO_URL = process.env.MONGO_URL_TEST!;
mongoose.connect(MONGO_URL);
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/", async (req, res) => {
    const user = await User.findOne({ slug: "team-builder-book" });
    if (user) {
      app.render(req, res, "/", {
        displayName: user.displayName,
        email: user.email,
      });
    } else {
      app.render(req, res, "/");
    }
  });

  server.all("*", (req, res) => handle(req, res));

  server.listen(port, () => {
    console.log("Ready on port 3000!");
  });
});
