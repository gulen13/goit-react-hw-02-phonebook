import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { ContactListStyle } from './ContactList.styled';

const ContactList = ({ data, onDelete }) => {
  return (
    <ContactListStyle>
      {data.map(({ id, name, number }) => {
        return (
          <ContactListItem
            key={id}
            id={id}
            contactName={name}
            contactNumber={number}
            onClick={() => onDelete(id)}
          />
        );
      })}
    </ContactListStyle>
  );
};

ContactList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
