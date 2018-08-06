const { db, Gardener, Plot, Vegetable } = require('./model');

// Create Seed Data



// Sync Database after Seeding

const vegetableArray = [
  {name: 'tomato', color: 'red', planted_on: Date.now()}, {name: 'cucumber', color: 'green', planted_on: Date.now()}, {name: 'broccoli', color: 'green', planted_on: Date.now()}
];

const gardenerArray = [
  {name: 'Ike', age: 28}, {name: 'Parag', age: 29}, {name: 'Tupac', age: 26}
];
const plotArray = [
  {size: 25, shaded: true}, {size: 39, shaded: false}, {size: 12, shaded: true}
];


function iterateArray (array, type) {
  for (let i = 0; i < array.length; i++){
    type.create(array[i]).then(() => {
      console.log('object create');
    }).catch(() => {
    console.log('err');
  });
}
}

iterateArray(vegetableArray, Vegetable);
iterateArray(gardenerArray, Gardener);
iterateArray(plotArray, Plot);

//do everything in this chaining

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



//bulk create
//promise.all
