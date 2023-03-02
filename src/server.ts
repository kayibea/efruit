import cors from "cors";
import path from "path";
import morgan from "morgan";
import express, { Application, Request, Response } from "express";

import fruitRouter from "./routes/fruitRouter";
import errorHandler from "./middlewares/errorHandler";
import notFoundHandler from "./middlewares/notFoundHandler";

const app: Application = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join("client", "dist")));

// Routes
app.use("/api/fruit", fruitRouter);
app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join("client", "dist", "index.html"));
});

// Error handlers
app.use(notFoundHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
