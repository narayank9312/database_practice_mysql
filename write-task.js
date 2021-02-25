const Sequelize = require('Sequelize');
const Datatypes = Sequelize.DataTypes;

const db = new Sequelize('sampledb25', 'sampleuser25', 'samplepass25', {
  host: 'localhost',
  dialect: 'mysql',
});

db.authenticate()
  .then(() => console.log('connection worked'))
  .catch((err) => console.error(err));
