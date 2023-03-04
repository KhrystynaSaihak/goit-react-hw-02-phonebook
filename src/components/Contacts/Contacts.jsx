import PropTypes from 'prop-types';
import { List, ListItem, Btn } from './Contacts.styled';

export const Contacts = ({ contactList, deleteName }) => {
  return (
    <>
      <List>
        {contactList.map(({ name, number, id }) => {
          return (
            <ListItem key={id}>
              <span>
                {name}, {number}
              </span>

              <Btn
                type="button"
                onClick={() => {
                  deleteName(id);
                }}
              >
                Delete
              </Btn>
            </ListItem>
          );
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
};
