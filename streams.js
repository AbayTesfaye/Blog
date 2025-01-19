const fs = require('fs')

// Reading file
const readStream = fs.createReadStream('./docs/blog2.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/blog3.txt');
readStream.on('data', (chunk) => {
    console.log('----NEW CHUNK----');
    console.log(chunk);

    // Writing file
    writeStream.write('\nNEW CHUNK\n');
    writeStream.write(chunk);
})




