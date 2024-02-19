import express from 'express';
import dotenv from 'dotenv';
// import logger from './logger.js';
import nodemailer from 'nodemailer';
// import emailTemp from './emailTemp.js';
dotenv.config()



export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});