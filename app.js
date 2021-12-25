//// multiple files access in promises  //// 

const fs = require('fs');

const util = require('util');

var read= util.promisify(fs.readFile);

    promise.all(
        [
          read('file1.txt'),
          read('file2.txt'),
          read('file3.txt'),
          //read('note.txt')
        ]
    ).then((data)=>{
            console.log(data);
    }).catch((err)=>{
      console.log(err);
    }).finally(()=>{
      console.log('read all the files')
    })
          
    