import PropTypes from 'prop-types';
import { Label, Input } from 'components/ContactForm/ContactForm.styled';

const Filter = ({filterValue, filterChange}) => {

return (
  <Label>
    <h3>Find contacts name</h3>
  <Input
    type="text"
    name="filter"
    value={filterValue}
    onChange={filterChange}
  />
</Label>
)
}

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  filterChange: PropTypes.func.isRequired,
};

export default Filter;