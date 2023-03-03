import PropTypes from 'prop-types';
import { List, ListItem, Btn } from './Contacts.styled';

export const Contacts = ({ contactList, query, deleteName }) => {
  return (
    <>
      <List>
        {contactList.map(({ name, number, id }) => {
          if (name.toLowerCase().includes(query)) {
            return (
              <ListItem key={id}>
                <span>
                  {name}, {number}
                </span>

                <Btn
                  type="button"
                  onClick={() => {
                    deleteName(name);
                  }}
                >
                  Delete
                </Btn>
              </ListItem>
            );
          }
          return null;
        })}
      </List>
    </>
  );
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
