   /// express is a web framework ///
   // it's acts like a middleware in nodejs ///
   // endless the nodejs work as a server ///
        // it take the request  and process the request and give back the response///
        // command : npm i nodemon express --save ////

        /// im creating server //////////////////////////////////

        const express = require('express');
    
        const app = express();

        const port = 3000;

        const fs = require('fs');

        // app.get('/login', (req, res) => {

        //     res.send('<h1>welcome to the login page</h1>');

        // });

        // app.get('/', (req, res) => {

        //     res.send('<h1>Welcome to the express</h1>');
        // });

        app.get('/products', (request, response)=>{

            fs.readFile('products.json',(err,data)=>{

                if(err){
                    throw err;
                } else {
                       response.send(JSON.parse(data));
                }
                
            });
        });

        app.listen(port ,(err)=>{

            if(err)

             throw err;

            console.log('my server is running on port : ${3000}');

        });