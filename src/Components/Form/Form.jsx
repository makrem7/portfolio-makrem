import React, { useState } from "react";
import "../Form/Style.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = ({ selectedLanguage }) => {
  const translations = {
    en: {
      namePlaceholder: "Your name...",
      emailPlaceholder: "Your email...",
      messagePlaceholder: "Your message...",
      submitButton: "Submit",
      successMessage: "I got your message 👍",
      errorMessage: "Please fill all the details"
    },
    de: {
      namePlaceholder: "Ihr Name...",
      emailPlaceholder: "Ihre E-Mail...",
      messagePlaceholder: "Ihre Nachricht...",
      submitButton: "Absenden",
      successMessage: "Ich habe deine Nachricht erhalten 👍",
      errorMessage: "Bitte füllen Sie alle Felder aus"
    },
    fr: {
      namePlaceholder: "Votre nom...",
      emailPlaceholder: "Votre e-mail...",
      messagePlaceholder: "Votre message...",
      submitButton: "Envoyer",
      successMessage: "J'ai bien reçu votre message 👍",
      errorMessage: "Veuillez remplir tous les champs"
    }
  };
  
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handler = (e) => {
    let fieldName, value;
    fieldName = e.target.name;
    value = e.target.value;
    setUserData({ ...userData, [fieldName]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { name, email, message } = userData;

    if (name && email && message) {
      const res = fetch(
        "https://portfolio-b8c38-default-rtdb.firebaseio.com/contactform.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          name: "",
          email: "",
          message: "",
        });
        toast(translations[selectedLanguage].successMessage);
      } else {
        toast(translations[selectedLanguage].errorMessage);
      }
    } else {
      toast(translations[selectedLanguage].errorMessage);
    }
  };

  return (
    <form action="">
      <ToastContainer theme="dark" autoClose={2000}/>
      <input
        value={userData.name}
        type="text"
        name="name"
        id="name"
        placeholder={translations[selectedLanguage].namePlaceholder}
        onChange={handler}
      />
      <input
        value={userData.email}
        type="email"
        name="email"
        id="email"
        placeholder={translations[selectedLanguage].emailPlaceholder}
        onChange={handler}
      />
      <textarea
        value={userData.message}
        name="message"
        id="message"
        cols="30"
        rows="10"
        placeholder={translations[selectedLanguage].messagePlaceholder}
        onChange={handler}
      ></textarea>
      <button type="submit" onClick={submitData}>
        {translations[selectedLanguage].submitButton}
      </button>
    </form>
  );
};

export default Form;
