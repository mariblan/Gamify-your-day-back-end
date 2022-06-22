import "dotenv/config";
import dbConnection from "./dbConnection.js";
dbConnection();
import cors from "cors";
import express from "express";
import sanitize from "express-mongo-sanitize";
import taskRouter from "./routes/tasks.js";
import userRouter from "./routes/user.js";

// All of this has to be relocated in different files (for MVC)

const app = express();
const port = process.env.PORT || 5000;

//??? This doesn't work. how to set it up properly?
// app.use(cors({ origin: "http://localhost:3000/" }));
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
app.use(sanitize({ allowDots: true, replaceWith: "_" }));

app.use("/", taskRouter);
app.use("/user", userRouter);

// Error handler, make this better later.
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({ error: err.message });
});

app.listen(port);

/*

Back end question section:

1. How to set up cors to accept localhost:3000? Tried and it just blocks 
requests =(
2. Is the sanitization good? Documentation coves this as the basics for it
but are there any better practices with this?

Back end to dos:
1. Go back to error handling and make it better. An error handler middleware is
in place but needs more love.
2. Split routes and functions appropriately (in different files/folders)!

*/
