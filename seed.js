const { db } = require('./model');

// Create Seed Data

// Sync Database after Seeding
db.sync({ force: true })
  .then(() => {
    console.log('db synced');
  })
  .catch(() => {
    console.log('disaster');
  })
  .finally(() => {
    db.close();
  });
