import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import fs from "node:fs";
import express from "express";

const router = express.Router();
const routeFiles = fs.readdirSync(`${__dirname}/`);

for(const file of routeFiles) {
    if(file !== "index.js") {
        const route = await import("./" + file);
        router.use(route.router);
    }
}

export {
    router
};

