import PropTypes from 'prop-types';
import { List, ListItem } from './Contacts.styled';

export const Contacts = ({ contactList, query }) => {
  if (query.length) {
    return (
      <>
        <List>
          {contactList.map(({ name, number, id }) => {
            if (name.toLowerCase().includes(query.toLowerCase())) {
              return (
                <ListItem key={id}>
                  {name}, {number}
                </ListItem>
              );
            }
            return null;
          })}
        </List>
      </>
    );
  }
};
Contacts.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  query: PropTypes.string.isRequired,
};
