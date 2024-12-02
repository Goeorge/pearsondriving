// lib/email.ts
'use server'

import fs from 'fs';
import path from 'path';
import sendgrid from '@sendgrid/mail';
import axios from 'axios';

// Initialize SendGrid with your API Key
sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

// Email utility to send emails using SendGrid
export const sendEmail = async (to: string, subject: string, html: string, attachmentPath?: string) => {
    // Test environment variables
    console.log(process.env.SENDGRID_API_KEY);

    try {

        // Read the file if attachmentPath is provided
        // let attachments: { content: string; filename: string; type: string; disposition: string }[] = [];
        // if (attachmentPath) {
        //   // const filePath = path.resolve(process.cwd(), attachmentPath); // local upload files
        //   // const fileContent = fs.readFileSync(filePath).toString('base64'); // local upload files

        //   // Server file reading
        //   const response = await axios.get(attachmentPath, {
        //     responseType: 'arraybuffer', // Get data as buffer
        //   });
        //   const fileContentBuffer = Buffer.from(response.data).toString('base64');

        //   attachments = [
        //     {
        //       content: fileContentBuffer,
        //       filename: "Phonex_Tech_Starlink_Profile_v3.pdf",
        //       // filename: path.basename(filePath),
        //       type: 'application/pdf',
        //       disposition: 'attachment',
        //     },
        //   ];
        // }
        // Send mail using SendGrid
        const response = await sendgrid.send({
            from: {
                email: 'sales@phonex.co.ke',
                name: 'Pearson Driving Inquiry',
            }, // Sender address
            to, // Recipient address
            subject, // Subject line
            html, // HTML body content
            // attachments, // PDF attachment if available
        });

        console.log("Message sent:", response[0].statusCode); // Log the response status
    } catch (error: any) { // Change error type to 'any' to handle it safely
        if (error.response) {
          console.error("Error sending email:", error.response.body); // Safely access response.body if available
        } else {
          console.error("Error sending email:", error.message); // Otherwise, log the error message
        }
      }
};

