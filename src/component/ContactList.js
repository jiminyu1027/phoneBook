import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import ContactItem from "./ContactItem";
import ContactSearch from "./ContactSearch";

const ContactList = () => {
  const { contactList, keyword } = useSelector((state) => state);
  let [filteredList, setFilteredList] = useState([]); 
  //검색어가 없을경우, 검색어가 있을경우를 따로 보여주기 위해 filterList 배열을 만들어준다

  useEffect(() => {
    if (keyword !== "") { //검색창에 검색했을 경우 
      let list = contactList.filter((item) => item.name.includes(keyword));
      //연락처에서 검색창에 입력한 키워드가 포함된 아이템만 list에 다시 담아준다
      setFilteredList(list); //검색창에 입력한 키워드가 포함된 아이템만 보여준다
    } else { //검색창에 아무것도 검색하지 않았을 경우 모든 연락처리스트를 보여준다
      setFilteredList(contactList);
    }
  }, [keyword]); //키워드를 주시하고 있다가 키워드가 바뀌면 useEffect가 재실행

  return (
    <Row className="contactList">
      <Col lg={12}>
        <ContactSearch />
      </Col>
      <Col lg={12}>
        num:{filteredList.length}
        {filteredList.map((item, index) => (
          <ContactItem item={item} key={index} />
        ))}
      </Col>
    </Row>
  );
};

export default ContactList;
