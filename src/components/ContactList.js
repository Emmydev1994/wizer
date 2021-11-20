import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((name) => {
    return (
      <ContactCard
        contact={name}
        clickHander={deleteConactHandler}
        key={name.id}
      />
    );
  });
  return (
    <div className="main">
      <h2>
        Book List
        <Link to="/add">
          <button className="ui button blue right">Add Books</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
