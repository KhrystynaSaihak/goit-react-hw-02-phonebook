import PropTypes from 'prop-types';
import { FieldStyled } from './Filter.styled';
import { Label } from './../DataInputForm/DataInputForm.styled';

export const Filter = ({ handleChange }) => {
  return (
    <>
      <Label>
        Find contacts by name
        <FieldStyled
          type="search"
          name="filter"
          onChange={e => {
            handleChange(e);
          }}
        />
      </Label>
    </>
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
