import "module-alias/register";
import bodyParser from "body-parser";
// @ts-ignore
import cors from "cors";
import express, { Request, Response, NextFunction } from "express";
import setupRoutes from "./routes";

const app = express();

app.use(bodyParser.json());

app.use(
  cors({
    origin: (origin: String, cb: CallableFunction) => cb(null, true),
    credentials: true,
    preflightContinue: true,
    exposedHeaders: [
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept",
      "X-Password-Expired",
    ],
    optionsSuccessStatus: 200,
  })
);

setupRoutes(app);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  return res.status(500).json({
    message: err.message,
  });
});

export { app };
