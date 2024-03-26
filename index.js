// Code your solutions in this file
function writeCards(names = ["Ada", "Brendan", "Ali"]) {
  const thankYouMessages = [];

  for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
    thankYouMessages.push(message); // Push each message into the array
  }

  return thankYouMessages;
}

function countDown(startingNumber) {
    for (let i = startingNumber; i >= 0; i--){
        console.log(i);
    }
    return null; // Indicate end of the function
}

// Test the functions
console.log(writeCards()); // Output thank you messages for default names
console.log(countDown(5)); // Output countdown from 5 to 0
