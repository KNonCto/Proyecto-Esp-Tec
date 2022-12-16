import express from "express";
import userRouter from "./src/routes/user.router.js";
import subjectRouter from "./src/routes/subject.router.js";
import evaluationRouter from "./src/routes/evaluation.router.js";
import { PORT } from "./src/configs/environment.js";
import connectDB from "./src/configs/mongo.js";

const app = express();

app.use(express.json());

app.use("/users", userRouter);
app.use("/subjects", subjectRouter);
app.use("/evaluations", evaluationRouter);

app.get("/", function (req, res) {
  res.send("Proyecto Daniel Parra");
});

async function startSever() {
  const isConnected = await connectDB();
  if (isConnected) {
    app.listen(PORT, () => {
      console.log(`Server started on ${PORT}`);
    });
  } else {
    process.exit();
  }
}

startSever();
