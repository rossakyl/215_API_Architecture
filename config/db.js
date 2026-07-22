const db = require('../models');

async function connectToDatabase() {
  try {
    await db.sequelize.authenticate();
    console.log('Connection connected successfully.');

    } catch (error) {
       
   }     
}

module.exports = connectToDatabase;