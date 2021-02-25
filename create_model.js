const Sequelize = require('Sequelize');
const Datatypes = Sequelize.DataTypes;

const db = new Sequelize('sampledb25', 'sampleuser25', 'samplepass25', {
  host: 'localhost',
  dialect: 'mysql',
});

const student = db.define('student', {
  name: {
    type: Datatypes.STRING(40),
    allowNull: false,
  },
  age: {
    type: Datatypes.INTEGER(2),
    allowNull: false,
    defaultValue: -1,
  },
  address: {
    type: Datatypes.STRING(100),
    allowNull: false,
  },
});

// const task = async () => {
//   try {
//     await db.sync({alter: true});

//     //insert a student

//     await student.create({
//       name: 'some person',
//       age: 20,
//     });
//   } catch (e) {
//     console.error(e);
//   }
// };

db.sync({alter: true})
  .then(() => console.log('database synchronized'))
  .catch(console.error);
