const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');


require('dotenv').config(); 

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

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

const PORT = process.env.PORT||3001; /* we set this in react frontend package.json "proxy":"http://localhost:3001", and that's where we are getting the data*/
app.listen(PORT, ()=>{
    console.log(`server starting at port ${PORT}`)
})