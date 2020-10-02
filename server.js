const {createServer} = require('http');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');


const normalizePort = val => { 
    const PORT = parseInt(val, 10);
  
    if (isNaN(PORT)) {
      return val;
    }
    if (PORT >= 0) {
      return PORT;
    }
    return false;
};/* the  normalizePort  function returns a valid port, whether it is provided as a number or a string */



require('dotenv').config(); 

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());


const PORT = normalizePort(process.env.PORT||3001); /* we set this in react frontend package.json "proxy":"http://localhost:3001", and that's where we are getting the data*/
app.set('PORT', PORT); /* We normalised the port with the constant port above. see 2.Step  */

if (process.env.NODE_ENV === 'production') { /* remember to update this in heroku config vars */
    app.use(express.static('frontend/build')); /* you can also try express.static(path.resolve(__dirname, 'build')) */
}

app.use(express.static(path.resolve(__dirname, 'frontend/build')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend/build/', 'index.html'));
});


//Contact form backend
app.get('/', function (req, res) {
    res.send('Welcome to my form')
})
  
app.post('/api/form', (req,res)=> {

    let data = req.body
    let smtpTransport = nodemailer.createTransport({ /* config here: https://nodemailer.com/smtp/ */
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: 'fnc.franzese1@gmail.com',
            clientId: '156790042600-phvo4enmo38cmgns2mfbd7scrsrkg3sd.apps.googleusercontent.com',
            clientSecret: 'lNGZVdUjAZ5os329WwYFXmTI',
            refreshToken: '1//09dw5X4bSUmDGCgYIARAAGAkSNwF-L9IrxpAwFU3y60i5nqqRFfW9laWaOepX_jZDdSxYjz-MuksFjl5NOyToOOI9O_vaVqffg0E',
            accessToken: 'ya29.a0AfH6SMB33utX6M5OeJJFeFX89v6Q9KEprTVsmRUbJcdGPVAmcWLRzfiOTs0KCBPdjlfq1PZb8_lakxixzooz9GRWGKlO10kmvv8cwKtqEGd3AGOiWb4Y8l_SyVZ8EgsuUcka9m7qi_9-EQCCGAZG3M_TZJ7URllhfwA',
            expires: 1601592789907,
        }
    })


    let mailOptions= {
        from:data.email, 
        to: "fnc.franzese1@gmail.com",
        subject: `Message from  ${data.name}`, /* NOTE ` this is different to this ' or " */
        html:`
        
            <h3>Information</h3>
                <ul>
                    <li>Name: ${data.name} </li>
                    <li>Email: ${data.email} </li>

                </ul>

                <h3>Message</h3>
                <p>${data.message}</p>
            `
    };

    smtpTransport.sendMail(mailOptions, (error, response)=> {
        if(error){
            res.send(error)
        } 
        else{
            res.send('Success')
        }
    })
    smtpTransport.close();
})

//End contact form backend


const server = createServer(app); /* here, the listener we had used in the step 1 was a hard coded function with req and res. but here is where now we are gonna import our app. so first we import it in const app and then we pass it as an argument. so basically node creates the server by using our express app */;

server.listen(PORT, ()=>{
    console.log(`server starting at port ${PORT}`)
})