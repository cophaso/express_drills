const express = require('express');
const app = express();

// DRILL 1
app.get('/sum', (req, res) => {
    const {a, b} = req.query;

    // Validate
    if(!a){
      return res.status(400).send('a is required');
    }

    if(!b){
      return res.status(400).send('b is required');
    }

    if(isNaN(a)){
      return res.status(400).send('a has to be a number');
    }

    if(isNaN(b)){
      return res.status(400).send('b has to be a number');
    }

    const numA = parseFloat(a);
    const numB = parseFloat(b);
    const numC = numB + numA;
    res.send(`The sum of ${numA} and ${numB} is ${numC}`);
})

// DRILL 2
app.get('/cipher', (req, res) => {
  const {text, shift} = req.query;

  // validate
  if(!text){
    return res.status(400).send('text is required');
  }

  if(!shift){
    return res.status(400).send('shift is required');
  }

  if(isNaN(shift)){
    return res.status(400).send('shift has to be a number');
  }

  const numShift = parseFloat(shift);

  // splits the texts into an array and then changes it into unicode
  const charArr = [];
  text
    .toUpperCase()
    .split('')
    .map(char => {charArr.push(char.charCodeAt(0))});

  // moves the unicode by the shift number 
  const shifted = charArr.map(char => parseFloat(char) + numShift);

  // change the unicode back into text
  const cipherArr = [];
  shifted.map(uni => {cipherArr.push(String.fromCharCode(uni))});

  // join the cipher text arr into one string
  const cipher = cipherArr.join('')

  res.status(200).send(`${text} has been ciphered into ${cipher}`);
})

// DRILL 3 
app.get('/lotto', (req, res) => {
  const{ numbers }=res.query
  // validation: 
  // 1. the numbers array must exist
  // 2. must be an array
  // 3. must be 6 numbers
  // 4. numbers must be between 1 and 20

  if(!numbers) {
    return res
      .status(400)
      .send("numbers is required");
  }

  if(!Array.isArray(numbers)) {
    return res
      .status(400)
      .send("numbers must be an array");
  }
})

app.listen(8000, () => {
  console.log('Express server is listening on port 8000!');
});