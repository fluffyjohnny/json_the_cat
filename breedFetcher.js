const request = require('request');
const args = process.argv.slice(2);



const fetcher = (breed) => {
  const url =  `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request(url, (error, response, body) => {
    
    if (error) {
      console.log(error.message, 'Request Failed');
      return process.exit();
    }
    const data = JSON.parse(body);

    if (!data) {
      const data2 = (data[0].description);
      console.log(data2);
    }
    console.log('Invalid Input');
  });
};

fetcher(args);
