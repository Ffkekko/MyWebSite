const {createServer} = require('http');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const compression = require('compression');


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

app.use(compression()); /* this is good for speed time, suggested by SEO  */


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());


const PORT = normalizePort(process.env.PORT||3001); /* we set this in react frontend package.json "proxy":"http://localhost:3001", and that's where we are getting the data*/
app.set('PORT', PORT); /* We normalised the port with the constant port above. see 2.Step  */

if (process.env.NODE_ENV === 'production') { /* remember to update this in heroku config vars */
    app.use(express.static('frontend/build')); /* you can also try express.static(path.resolve(__dirname, 'build')) */
}

/* sending the frontend to the server so that it displays once online. Make sure that this goes before app.get to connect backend */
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
            user: process.env.USER,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN,
            accessToken: process.env.ACCESS_TOKEN,
            expires: process.env.EXPIRES,
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