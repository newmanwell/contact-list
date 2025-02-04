import { useEffect, useState } from "react"

const ContactList = () => {
  const [allContacts, setAllContacts] = useState([]);
  useEffect(() => {
    const getContacts = async() => {
      try {
        const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users');
        const contactArray = await response.json();
        setAllContacts(contactArray);
        console.log(contactArray);
      } catch(error) {
        console.log(error);
      }
    }
    getContacts();
  }, []);

  return (
    <ol>
      {
        allContacts.map((contact) => {
          return <li key={ contact.id }>{ contact.name }</li>
        })
      }
    </ol>
  )
}

export default ContactList