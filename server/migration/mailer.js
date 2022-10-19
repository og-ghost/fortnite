var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    
        service: "Gmail",
        auth: {
            type: 'OAuth2',
            pass: 'Adoption@2020',
        user: "claracups@gmail.com", // Your gmail address.
        clientId: "101634460311-hruq14539kch52co24pjjsoe39vrmu8f.apps.googleusercontent.com",
        clientSecret: "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",
        refreshToken: "1//04vP38u_wQxulCgYIARAAGAQSNwF-L9IriviXHpxEDSy1SWtiMPwbKzXUea1-867M_UHBw24TGOkqlz6YWH0OUwdHBBMSA1ULW_s"
    },
 });
//     const transporter = nodemailer.createTransport({
//         port: 465,               // true for 465, false for other ports
//         host: "smtp.sendgrid.net",
//            auth: {
//                 user: 'apikey',
//                 pass: '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',
//              },
//         secure: true,
//         });

    export default transporter