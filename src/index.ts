import * as express from "express";
import * as bodyParser from "body-parser";
import { AppDataSource } from "./data-source";
import router from "./routes";

import "dotenv/config";

AppDataSource.initialize()
  .then(async () => {
    const PORT = process.env.PORT || 5000;

    // create express app
    const app = express();
    app.use(bodyParser.json());

    app.use(router);

    app.listen(PORT, () => {
      console.log(`server started at http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log(error));
