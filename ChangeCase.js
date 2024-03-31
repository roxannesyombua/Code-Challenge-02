function swapCase(str) {
    // Convert the string to an array of characters
    const characters = str.split('');
    
    // Iterate over each character
    for (let i = 0; i < characters.length; i++) {
        // Check if the character is uppercase
        if (characters[i] === characters[i].toUpperCase()) {
            // If uppercase, convert it to lowercase
            characters[i] = characters[i].toLowerCase();
        } else {
            // If lowercase, convert it to uppercase
            characters[i] = characters[i].toUpperCase();
        }
    }
     // Join the characters back into a string and return
     return characters.join('');
    }
    
    // Test the function
    console.log(swapCase('The Quick Brown Fox')); // Output: 'tHE qUICK bROWN fOX'