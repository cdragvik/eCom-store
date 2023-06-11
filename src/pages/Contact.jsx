import { useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const FormContainer = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormTitle = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ErrorText = styled.p`
  color: red;
  margin-top: 5px;
`;

const SubmitButton = styled.button`
  background: #ECB390;
  border: none;
  border-radius: 10px;
  color: white;
  padding: 12px; 

  &:hover {
    background: #f4d3be;
  }
`;

const SuccessMessage = styled.p `
    padding-bottom: 20px;
    text-align: center;
`;

export function ContactPage({shoppingCart}) {

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [fullName, setFullName] = useState("");
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [body, setBody] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(!isSubmitted);

        const errors = {};

    // Validate full name
    if (fullName.trim().length < 3) {
      errors.fullName = "Full name must be at least 3 characters";
    }

    // Validate subject
    if (subject.trim().length < 3) {
      errors.subject = "Subject must be at least 3 characters";
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = "Invalid email address";
    }

    // Validate body
    if (body.trim().length < 3) {
      errors.body = "Body must be at least 3 characters";
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } 
  };

  return (
    <Layout shoppingCart={shoppingCart}>
    <br></br>

    <FormTitle>Contact Us</FormTitle>
    
    <SuccessMessage>
        {isSubmitted && (
            <h2>Message Successfully Submitted!</h2>
        )}
    </SuccessMessage>
 
    <FormContainer>
      
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          {errors.fullName && <ErrorText>{errors.fullName}</ErrorText>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="subject">Subject</Label>
          <Input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          {errors.subject && <ErrorText>{errors.subject}</ErrorText>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <ErrorText>{errors.email}</ErrorText>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="body">Message</Label>
          <TextArea id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
          {errors.body && <ErrorText>{errors.body}</ErrorText>}
        </FormGroup>

        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </FormContainer>

    <br></br>
    </Layout>
  );
};
