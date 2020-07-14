/**
 * Required External Modules
 */

import express from "express";
import cors from "cors";
import helmet from "helmet";
import { hostname } from "os";
import {config} from "dotenv";

config();

/**
 * App Variables
 */

if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

const server = app.listen(PORT, () => {
    console.log('Listening on port ${PORT}');
});

