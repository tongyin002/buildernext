import express from "express";
import next from "next";

const port = 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/", (req, res) => {
    const user = { email: "tyin@gmail.com", displayName: "tong" };
    app.render(req, res, "/", user);
  });

  server.all("*", (req, res) => handle(req, res));

  server.listen(port, () => {
    console.log("Ready on port 3000!");
  });
});
