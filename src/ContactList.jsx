import { useEffect, useState } from "react"

const ContactList = () => {
  useEffect(() => {
    const getContacts = async() => {
      try {
        const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
        const contactArray = await response.json();
        console.log(contactArray);
      } catch(error) {
        console.log(error);
      }
    }
    getContacts();
  })
}

export default ContactList