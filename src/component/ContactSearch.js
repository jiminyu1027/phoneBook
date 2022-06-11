import React, { useState } from "react";
import { Button, Col, Row, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const ContactSearch = () => {
  let [keyword, setKeyword] = useState("");
  let dispatch = useDispatch();

  const searchByName = (event) => {
    event.preventDefault(); //페이지가 새로고침이 안되게 하기 위해
    dispatch({ type: "SEARCH_BY_NAME", payload: { keyword } }); //검색버튼을 눌렀을때 액션
  };
  return (
    <Form onSubmit={searchByName}>
      <Row className="contactSearch">
        <Col>
          <Form.Control
            type="text"
            placeholder="Name"
            onChange={(event) => setKeyword(event.target.value)}
          />
        </Col>
        <Col>
          <Button type="submit">Search</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default ContactSearch;
