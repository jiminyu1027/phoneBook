import React from "react";
import { Row, Col } from "react-bootstrap";

const ContactItem = ({ item }) => {
  //연락처 리스트에서 아이템을 받아와 이름과 전화번호의 데이터를 보여줌
  return (
    <Row className="contactItem">
      <Col lg={1} md={2} sm={2} xs={2}>
        <img
          width={50}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg"
        />
      </Col>
      <Col lg={11} md={10} sm={10} xs={10}>
        <div>{item.name}</div>
        <div>{item.phoneNumber}</div>
      </Col>
    </Row>
  );
};

export default ContactItem;
