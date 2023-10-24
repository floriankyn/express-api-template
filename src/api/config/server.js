import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import { router } from "../v1/routes/index.js";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = [
    `http://localhost:${PORT}`,
];

const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(router);

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});