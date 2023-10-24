import Joi from "joi";

export const validateAuth = async (req, res, next) => {
    const authValidation = Joi.object({
        name: Joi.string().required(),
        credential_level: Joi.number().required(),
        jwt_secret: Joi.string().required()
    });

    const { error } = authValidation.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    return next();
};