import React from 'react';
import axios from 'axios';


class ContactForm extends React.Component {

    state = { 
        name:'',
        email: '',
        message:'',
        sent: false,
        value: "",
        spinnerOn: false
    }


    //handle inputs
    handleName = (e)=> {
        this.setState({
            name: e.target.value

        })
    }

    handleEmail = (e)=> {
        this.setState({
            email: e.target.value

        })
    }

    handleMessage = (e)=> {
        this.setState({
            message: e.target.value

        })
    }

    handleSent = (e)=> {
        if (
            this.state.name !=='' && this.state.email !=='' && this.state.message !=='' && this.state.email.indexOf("@") > -1
        )
        this.setState({
             spinnerOn : true
        })
    }

    // End handle inputs

    //data we want to send
    formSubmit = (e) => {
        e.preventDefault();
        let data = {
            name: this.state.name,
            email:this.state.email,
            message:this.state.message
        }
    
    
        axios.post('/api/form', data) /* same url used in server */
        .then(res=> {
            this.setState({
                sent:true,
                spinnerOn:false
            },this.resetForm()) 
        }).catch(()=> {
            console.log('Message not sent');
        })
    }

    //resetting initial data
    resetForm =()=> {
        this.setState({
            name:'',
            email:'',
            message:''
        })

        setTimeout(()=>{
            this.setState({
                sent:false,
            })
        }, 8000) /* after 5 seconds the form resets and the following text disappears "MESSAGE HAS BEEN SENT. THANKS, I WILL GET BACK TO YOU AS SOON AS POSSIBLE "  */
    }



    render() {
        return (

        <div>
    
            {/* Contact Form */}
            
            <div className="contact-form-img">
            <div className="contact-form container">
            
                <form className="form" onSubmit={this.formSubmit}> {/* remember to add onSubmit and not onclick because we want to send the data only when we click on submit */}

                    <h1 className="form__heading">LET'S GROW TOGETHER</h1>
                    <div className="form__field">
                        <label htmlFor="contact-name"></label>
                        <input type="text" name="contact-name" id="contact-name" autoComplete="name" placeholder="Your name" value={this.state.name} onChange ={this.handleName} required></input>
                    </div>
                    <div className='form__field'>
                        <label htmlFor="contact-email"></label>
                        <input type="email" name="contact-email" id="contact-email" autoComplete="email" placeholder="Your email"  value={this.state.email} onChange={this.handleEmail} required></input>
                    </div>
                    <div className="form__field">
                        <label htmlFor="contact-message"></label>
                        <textarea name="contact-message" id="contact-message" cols="30" rows="10" placeholder="Drop some words...                                                                                                               Don't forget to add as many info as possible about the project you are contacting me for."  value={this.state.message} onChange={this.handleMessage} required></textarea>
                    </div>

                    <div className={this.state.spinnerOn ? 'spinner' : 'spinnerOff'}>
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div>

                    <div className={this.state.sent ? 'msgAppear' : 'msg'} >MESSAGE SENT! <div>THANKS, I WILL GET BACK TO YOU AS SOON AS POSSIBLE.</div></div>
                    
                    <button type="submit" className="cta-form" onClick={this.handleSent}> Submit <img className="icon_send" src="https://img.icons8.com/material-rounded/24/000000/filled-sent.png" alt="sent icon"/></button>

                </form>
                </div>
            </div>
            {/* End Contact Form */}

        </div>
        );
    }
}

export default ContactForm;



