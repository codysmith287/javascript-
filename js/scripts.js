// const weCool = false;
// const myPromise = new Promise( (resolve, reject) => {
//   if (weCool) resolve('We are in face, cool.');
//   else if (!weCool) reject('Sorry, we aint cool...');
// } );
//
// myPromise.then(result => {
//   console.log(result);
// }).catch( error => {
//   console.log(error);
// });
//
// function returnTwo() {
//   return 2;
// };
//
// console.log(Promise.resolve(returnTwo()));

// fetch('http://stapi.co/api/v1/rest/series/search').then( response => {
//   console.log(response);
//   if (response.ok) {
//     console.log('yeeah!');
//   };
//   return response.json();
// }).then( jsonResult => {
//   console.log(jsonResult.series);
// }).catch (err) => { console.log(err); });

fetch('http://localhost:3456', {
  method: 'Post',
  mode: 'cors',
  headers: {
    'Content-Type' : 'application/json'
  },
  body {
    number: 1135,
    favoriteColor: 'blue'
  }
}).then(response => {
  console.log(response)
});

// Read up on 'You Don't Know Javascript'
// Classes and Prototype are basically the same but the classes require less code. Both build objects. 
