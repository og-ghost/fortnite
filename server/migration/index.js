   
import pool from './database';
/**
  * @function query
  * @description queries the db with the specified string
  * @param {string} queryString - the query string
  * @returns {*} nothing
  */
const query = async (queryString) => {
  pool.on('connect', () => { console.log('connected to the db'); });
        try {
    const result = await new Promise((resolve, reject) => {
        pool.query(queryString, (error, results, fields) => {
            if (error) return reject(error);
            return resolve(results);
        });
    });

    //do stuff with result
} catch (err) {
 console.log(err, 'error');
}
  pool.on('remove', () => {
    console.log('client removed');

    process.exit(0);
  });
};
export default query;