const {db, Student} = require('./create_model');

const task = async () => {
  try {
    await db.sync({alter: true});

    //insert a student
    for (let i = 0; i <= 20; i++) {
      await Student.create({
        name: [
          'harshit',
          'himanshu',
          'paras',
          'amrit',
          'aqib',
          'chandan',
          'deepak',
          'vinay',
          'meraj',
          'vishal',
        ][parseInt(Math.random() * 10)],
        age: 10 + parseInt(Math.random() * 10),
        address: [
          'faridabad',
          'gurgaon',
          'bihar',
          'delhi',
          'rajasthan',
          'jaipur',
          'shimla',
          'manali',
          'ayodhya',
          'varanasi',
        ][parseInt(Math.random() * 10)],
      });
    }
  } catch (e) {
    console.error(e);
  }
};

task();
