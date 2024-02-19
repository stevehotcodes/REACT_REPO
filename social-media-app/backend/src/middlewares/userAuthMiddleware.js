import jwt from "jsonwebtoken";
import { notAuthorized } from "../helpers/helper.function.js";
import dotenv from 'dotenv'
dotenv.config()


export const authMiddleware = (req, res, next) => {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        jwt.verify(req.headers.authorization.split(' ')[1], process.env.JWT_SECRET, (err, decode) =>  {
            if (err) {
                return notAuthorized(res, 'Unauthorized user');
            } else {
                req.user = decode;
                console.log("req.user fro middleware",req.user)
                next();
            }
        });
    } else {
        return notAuthorized(res, 'Unauthorized user');
    }

} 