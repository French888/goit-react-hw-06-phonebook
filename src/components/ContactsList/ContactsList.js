import ContactItem from "./ContactsListItem.js";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const ContactsList = () => {
  return (
    <ul>
      {/* {findContact.map(({ id, name, number }) => { */}
      {/* return ( */}
      <ContactItem
        key={id}
        id={id}
        name={name}
        number={number}
        onDeleteContact={onDeleteContact}
      />
      {/* );
      })} */}
    </ul>
  );
};

ContactsList.prototype = {
  findContact: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
