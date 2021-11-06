import { Button } from "../styles/BasicUI/Button.styled";
import { StyledUserFields } from "../styles/ContactUs/ContactForm.styled";
import {
  FormGroup,
  Label,
  Input,
  InputBig,
} from "../styles/ContactUs/InputFields.styled";
import db from "../Blogs/firebase";
 
import {  collection, addDoc} from "firebase/firestore/lite";
import React, {useState } from "react";
export const UserFields = () => {
  const [Name, setName] = useState();
  const [Email, setEmail] = useState();
  const [Message, setMessage] = useState();

  const handleInput = event => {
   setName(event.target.value);
   console.log("✅" + Name);
  };
  const handleInput1 = event => {
    setEmail(event.target.value);
    console.log("📩" + Email);
  };
  const handleInput2 = event => {
    setMessage(event.target.value);
    console.log("👋" + Message);
  };

  const SubmitButton= async (event) =>{
    event.preventDefault();
    let data={
      'Name': Name, 
      'Email': Email, 
      'Message': Message
    };
    try {

      const docRef = await addDoc(collection(db,"ContactUs"), data);
      console.log("Document written with ID: ", docRef.id);
    } 
    catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  return (
    <StyledUserFields method = "POST" onSubmit={SubmitButton}>
      <FormGroup>
        <Label htmlFor="label">Your Name</Label>
        <Input type="text" id="label" onChange={handleInput} />
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input type="email" onChange={handleInput1} />
      </FormGroup>
      <FormGroup>
        <Label>Your Message</Label>
        <InputBig onChange={handleInput2} />
      </FormGroup>
      <FormGroup>
        <Button type ="Submit" >Send Message</Button>
      </FormGroup>
      </StyledUserFields>
  );
};
