import { useState } from "react"
import ContactList from "./ContactList"
import ContactDetails from "./ContactDetails"

const App = () => {
  const [oneContactDetails, setOneContactDetails] = useState({});

  return (
    <>
      <h1>My Favorite Contacts</h1>
      { 
        oneContactDetails.id ? <ContactDetails /> : <ContactList setOneContactDetails={ setOneContactDetails }/>
      }
    </>
  )
}

export default App
