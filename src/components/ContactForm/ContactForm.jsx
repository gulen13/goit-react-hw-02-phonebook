import PropTypes from 'prop-types';
import { Form, Label, Button, Input } from './ContactForm.styled';

const ContactForm = ({formSubmit}) => {

return (
<Form autoComplete="off" onSubmit={formSubmit}>
<Label>
  Name
  <Input
    type="text"
    name="name"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    placeholder="Jacob Mercer"
    required
  />
</Label>
<Label>
  Number
  <Input
    type="tel"
    name="number"
    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    placeholder="+380675006070"
    required
  />
</Label>
<Button type="submit">Add Contact</Button>
</Form>
)
}

ContactForm.propTypes = {
  formSubmit: PropTypes.func.isRequired,
};

export default ContactForm;