const fs = require('fs')
// Reading file
fs.readFile('./docs/blog.txt', (err, data) => {
    if(err) {
        console.log(err);
        
    }
    console.log(data.toString());
    
})

// Writing file

fs.writeFile('./docs/blog1.txt',"New file gonna write",() => {
    console.log('file was written')
})


// Directories
if(!fs.existsSync('./assets')) {
fs.mkdir('./assets', (err)=> {
  if(err) {
    console.log(err);
  }
  console.log('Folder is created!');
  
})
}
else {
    fs.rmdir('./assets',(err) => {
        if(err) {
            console.log(err);  
        }
        console.log('The folder is deleted');
         
    })
}


// Delete file

if(fs.existsSync('./docs/blog1.txt')) {
    fs.unlink('./docs/blog1.txt', (err) => {
        if(err) {
            console.log(err); 
        }
        console.log('File is deleted!');
        
    })
}