const {fetchBreedDescription} = require('./breedFetcher');
const args = process.argv.splice(2);

const breedName = args[0].toString();//+'sss';

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});