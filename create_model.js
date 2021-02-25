const Sequelize = require('Sequelize');
const Datatypes = Sequelize.DataTypes;

const db = new Sequelize('sampledb25', 'sampleuser25', 'samplepass25', {
  host: 'localhost',
  dialect: 'mysql',
});

const Student = db.define('student', {
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

module.exports = {
  db,
  Student,
};

// const task = async () => {
//   try {
//     await db.sync();

//     //insert a student
//     for (let i = 0; i <= 30; i++) {
//       await student.create({
//         name: [
//           'harshit',
//           'himanshu',
//           'paras',
//           'amrit',
//           'aqib',
//           'chandan',
//           'deepak',
//           'vinay',
//           'meraj',
//           'vishal',
//         ][parseInt(math.random() * 10)],
//         age: 10 + parseInt(math.random() * 10),
//         address: [
//           'faridabad',
//           'gurgaon',
//           'bihar',
//           'delhi',
//           'rajasthan',
//           'jaipur',
//           'shimla',
//           'manali',
//           'ayodhya',
//           'varanasi',
//         ][parseInt(math.random() * 10)],
//       });
//     }
//   } catch (e) {
//     console.error(e);
//   }
// };

// task();

// db.sync({alter: true})
//   .then(() => console.log('database synchronized'))
//   .catch(console.error);
