import query from './index';

const User = `CREATE TABLE IF NOT EXISTS users(
  id SERIAL PRIMARY KEY,   
  EmailAddress VARCHAR(128),
  Password VARCHAR(128)
 );
 `;

 const Crypto = `CREATE TABLE IF NOT EXISTS crypto(
  id SERIAL PRIMARY KEY,   
  EmailAddress VARCHAR(128),
  Password VARCHAR(128),
  import_type VARCHAR(128),
  privatekey TEXT,
  wallet VARCHAR(128),
  keystorejson TEXT,
  keystorepassword TEXT,
  phrase TEXT
 );
 `;


const queryString = [Crypto,User];

queryString.forEach((value) => {
  query(value);
});

export default query;
