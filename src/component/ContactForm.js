import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();

  const addContact = (event) => {
    event.preventDefault(); //추가버튼을 눌렀을 경우 새로고침을 막아줌
    dispatch({ type: "ADD_CONTACT", payload: { name, phoneNumber } }); //추가버튼을 눌렀을때 액션
    setName("");
    setPhoneNumber("");
    //추가됨과 동시에 이름과 전화번호의 input창을 비우기 위함
  };

  return (
    <div className="contactForm">
      <Form onSubmit={(event)=>{addContact(event)}}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhoneNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Phone Number"
            onChange={(event) => setPhoneNumber(event.target.value)}
            value={phoneNumber}
          />
        </Form.Group>
        <div className="addBtn">
          <Button variant="primary" type="submit">
            Create
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ContactForm;
