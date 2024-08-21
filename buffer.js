const fs = require('fs');

// Read a binary file into a buffer
fs.readFile('image.png', (err, buffer) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(buffer); // Buffer containing binary data

    // Write the buffer to a new file
    fs.writeFile('copyImage.png', buffer, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Binary file copied');
    });
});
