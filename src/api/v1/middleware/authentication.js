//authentication.js//

import jwt from "jsonwebtoken";
import { getTokenUserDB } from "../../config/database.js";

export const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if(!token) {
        return res.status(401).send({
            message: "No token provided"
        });
    }

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        if(err) {
            return res.status(401).send({
                message: "Unauthorized"
            });
        }

        if(decoded) {
            const { id, name, credential_level } = decoded;
            const authorizedUsers = await getTokenUserDB(id);

            if (!authorizedUsers) {
                return res.status(401).send({
                    message: "Unauthorized"
                });
            }

            if (authorizedUsers.name !== name || authorizedUsers.credential_level !== credential_level) {
                return res.status(401).send({
                    message: "Unauthorized"
                });
            }

            req.auth = {
                id: id,
                name: name,
                credential_level: credential_level
            };

            return next();
        }
    });
};