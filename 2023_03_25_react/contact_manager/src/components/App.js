import React, {useState} from 'react';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";


function App() {

  // const contacts = [
  //   {
  //     id: "1",
  //     name: "Shashi",
  //     email: "@gmail"
  //   },
  //   {
  //     id: "2",
  //     name: "Suji",
  //     email: "@yahoo"
  //   },
  //   {
  //     id: "3",
  //     name: "Raghu",
  //     email: "@dell"
  //   }
  // ];

  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  }

  return (
  //  <h1>Hello World!</h1>
 <div className='ui container'>
     <Header></Header>
  <AddContact addContactHandler={ addContactHandler }></AddContact>
  <ContactList contacts={contacts}></ContactList>
 </div>
 
  );
}

export default App;
