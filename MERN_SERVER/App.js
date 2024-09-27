//  for creating backend server
const cors = require("cors");
const express = require("express");
const connectDB = require("./config/db");
const app = express();
const books = require("./routes/api/books");
app.use(express.json());
connectDB();
app.use(cors({ origin: true, credentials: true }));
app.get("/", (req, res) => res.send("Hello world!"));
app.use("/api/books", books);
const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));
