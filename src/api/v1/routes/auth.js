import express from "express";
const router = express.Router();
import { generate, verify } from "../controller/auth.js";
import { validateAuth } from "../validator/auth.js";

import { authenticate } from "../middleware/authentication.js";

router.post("/api/v1/auth/generate", [validateAuth], generate);
router.get("/api/v1/auth/token/", [authenticate], verify);

export {
    router
};