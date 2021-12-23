const fs = require('fs');

// im going to be  creating a some  json data/// 

const series = {
    title: "two guns",
    author: "james"
};
/// write file //

// const data = JSON.stringify(series);

// fs.writeFile('series.json', data ,(err, data) => {
//     if (err)
//     throw error;
//        console.log(`file created successfully`);
// })

  /// read the data/// 

// fs.readFile('series.json', (err,data)=>{
//     if (err)
//         throw err;
//           const output = JSON.parse(data);
//              console.log(output.author);
    
// })

// change the data////

 // im converting this data into string///

const data = fs.readFileSync('series.json').toString();    

const jsonData = JSON.parse(data);  /// im converting this data into json ///

jsonData.title = "Ash";     // now changing data /// 

const str_format= JSON.stringify(jsonData);
         /// now im converting this data into string///
fs.writeFileSync('series.json', str_format);


