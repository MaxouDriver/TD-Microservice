import express, { Router } from "express";
import bodyParser from "body-parser";
import taskRoute from "./routes/task"
import cors, { CorsOptions, CorsOptionsDelegate } from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const enableOriginsForCredentials:CorsOptionsDelegate = (req: express.Request, callback: (err: Error | null, options?: CorsOptions) => void) => {
  callback(null, {
    origin: true,
    credentials: true
  })
}

const app : express.Application = express();
const router: Router = Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors(enableOriginsForCredentials));

router.use("/task", taskRoute);

app.use('/', router);

export default app;