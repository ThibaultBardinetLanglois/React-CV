import React, { useState } from "react";
import Navigation from "../components/Navigation";
import emailjs from 'emailjs-com';
emailjs.init("user_GsgGPgJ1chMQQ9tzSMDNj");

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const isEmail = () => {
    let mail = document.getElementById('not-mail');
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(email.match(regex)) {
      mail.style.display = "none";
      return true;
    } else {
      mail.style.display = "block";
      mail.style.animation ="dongle 1s";
      setTimeout(() => {
        mail.style.animation = "none";
      }, 1000);
      return false
    }
  }

  const failMessage = () => {
    let formMessage = document.querySelector('.form-message');
    formMessage.classList.remove("green");
    formMessage.classList.add("red");
    formMessage.innerHTML = "Veuillez remplir les champs";
    formMessage.style.opacity = '1';
    if(!name) {
      document.querySelector('#name').classList.add('error');
    }
    if(!email) {
      document.querySelector('#email').classList.add('error');
    }
    if(!message) {
      document.querySelector('#message').classList.add('error');
    }
  }

  const succesMessage = () => {
    let formMessage = document.querySelector('.form-message');
    formMessage.classList.remove("red");
    formMessage.classList.add("green");
    formMessage.innerHTML = "Message envoyé! Je vous recontacte bientôt";
    formMessage.style.opacity = "1";

    document.querySelector('#name').classList.remove('error');
    document.querySelector('#email').classList.remove('error');
    document.querySelector('#message').classList.remove('error');

    setTimeout(() => {
      formMessage.style.opacity = "0";
   }, 5000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let params = {
      name,
      email,
      message,
    };

    if (name && isEmail() && message) {
      emailjs.send('service_yefcw6t', "template_z82sz69", params)
      .then(function(res){
        succesMessage();
        setName("");
        setEmail("");
        setMessage("");
      });
    } else {
      console.log("error");
      failMessage();
    }
    
  };

 

  return (
    <div className="contact container">
        <Navigation />
        <div className="contact-content page-content">
            <form className="contact-form">
                <h2>Contactez-moi</h2>
                <div className="form-content">
                    <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="nom *"
                    value={name}
                    autoComplete="off"
                    />
                    <div className="email-content">
                        <label id="not-mail">Email non valide</label>
                        <input
                            type="mail"
                            id="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="email *"
                            value={email}
                            autoComplete="off"
                        />
                    </div>
                    <textarea
                        id="message"
                        name="message"
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="message *"
                        value={message}
                    />
                </div>
                <input
                    className="button"
                    type="button"
                    value="Envoyer"
                    onClick={handleSubmit}
                />
                <div className="form-message"></div>
            </form>
        </div>
    </div>  
    
  );
};

export default Contact;