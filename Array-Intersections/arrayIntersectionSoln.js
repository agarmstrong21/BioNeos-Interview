/**
 * 
 * This program was created by Bio::Neos for simple problem solving. Below is the solution that was made along with general comments. 
 * 
 */

const fs = require('fs');
const path = require('path');

// Making sure that the arguments passed through are valid and contains a filename. If not, exit program.
if (process.argv.length <= 2)
{
  console.error('You must enter a file name.');
  process.exit(1);
}

// Method to create a string from the array with seperators (', ') in place of the spaces.
const arrayToString = arr => {
  let string = '';
  for (let i = 0; i < arr.length - 1; i++)
  {
    string += arr[i] + ', ';
  }
  return string + arr[arr.length - 1];
};

// Creating and initializing the file path from the arguments
const filePath = path.join(__dirname, process.argv[2]);

// Reading the file and finding the intersections between the two arrays 
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err)
  {
    console.error(err);
    process.exit(2);
  }
  const [line1, line2] = data.split('\n');
  const list1 = line1.split(' ');
  const list2 = line2.split(' ');
  console.log(`First array: ${arrayToString(list1)}`);
  console.log(`Second array: ${arrayToString(list2)}`);

  // ADD: Cast the lists to sets to delete duplicates across the same array 
  let unique = [...new Set(list1)];
  let unique2 = [...new Set(list2)];
  
  // EDIT: Combined the two sets together
  // Combined the two lists together and iterate through each word and count all instances
  const combinedList = unique.concat(unique2);
  let wordInstances = {};
  combinedList.forEach(word => {
    // ADD: Set all the words to lowercase and replace all newline characters with spaces
    word = word.toLowerCase();
    word = word.replace(/(\r\n|\n|\r)/gm, "");
    wordInstances[word] ? wordInstances[word]++ : wordInstances[word] = 1;
  });

  // Create a new set that will gather all the intersections between the two arrays and print them out
  let intersection = new Set();
  for (const word of Object.keys(wordInstances))
  {
    // EDIT: Changed the threshold to more than 1 instead of 2 since there is a possibly of more than 2 intersections per word 
    if (wordInstances[word] > 1)
    {
      intersection.add(word);
    }
  }
  const num = intersection.size;
  console.log('---');
  console.log(`There ${num === 1 ? 'is' : 'are'} ${num} word${num === 1 ? '' : 's'} in the intersection of the two arrays: ${arrayToString(Array.from(intersection))}`);
});

/**
 * Seeing that we are missing several different 
 * 
 * Problems:
 *  - new line characters
 *  - lowercase uppercase
 *  - only checks for intersection of 2
 *  - counts intersection within the same array
 * 
 * Solution:
 *  - Changed the combined lists to combined sets to delete duplicates across the same array
 *  - added regex to check and replace all new line characters with spaces
 *  - added toLowercase function to delete the possiblity of occurances of 'The' and 'the'
 *  - changed the constraint of how many intersections of 2 to greater than 1
 */