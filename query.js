const {db, Student} = require('./create_model');

const task = async () => {
  try {
    await db.sync();

    const students = await Student.findAll({
      // where: {age: {$gt: 15}},
      where: {age: 12},
      //   order: [['age', 'DESC'], [('name', 'ASC')]],
    });

    console.log(students);
    students.forEach((student) =>
      console.log(`name: ${student.dataValues.name} \t\t age: ${student.dataValues.age}\t\t 
    address: ${student.dataValues.address}`)
    );
  } catch (e) {
    console.error(e);
  }
};

task();
