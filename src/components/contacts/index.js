import React, { useEffect, useState } from 'react'

import List from "./List"
import Form from "./Form"
import "./List/style.css"
function Contacts() {

  const [contacts,setContacts]=useState([
    {fullname:"mehmet",phone_number:"123"},
    {fullname:"ahmet",phone_number:"456"},
    {fullname:"hasan",phone_number:"789"},
    
  ]);
  
  useEffect(()=>{
    console.log(contacts)
  },[contacts]);
  
  
  return (
    <div id='container'>
      <h1>Contacts</h1>
      <List contacts={contacts} ></List>
      <Form addContact={setContacts} contacts={contacts} ></Form>
    </div>
  )
}

export default Contacts
