const {db} = require('./model');


  db.sync({force: true}).then(() => {
    console.log('db synced');
  }).catch(() => {
    console.log('disaster');
  }).finally(() => {
    db.close();
  });
