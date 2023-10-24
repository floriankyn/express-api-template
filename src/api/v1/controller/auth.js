import { generateTokenDB } from "../../config/database.js";
import jwt from "jsonwebtoken";

export const generate = async (req, res) => {
    const body = req.body;

    if (body.jwt_secret !== process.env.JWT_SECRET) {
        return res.status(401).send({
            message: "Unauthorized. The JWT secret you provided is not valid."
        });
    }

    try {
        const insertId = await generateTokenDB(body.name, body.credential_level);

        const payload = {
            id: insertId,
            name: body.name,
            credential_level: body.credential_level
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET);

        return res.status(200).send({
            message: "The token has been successfully generated",
            token: token
        });
    } catch (e) {
        return res.status(500).send({
            message: "An error occured while generating the token",
            error: e
        });
    }
};

export const verify = (req, res) => {
    return res.status(200).send({
        message: "The token provided is valid."
    });
};