import PropTypes from 'prop-types';
// import { Item, ItemContainer, Button } from './ContactItem.styled';

const ContactItem = ({ name, number, id, deleteContact }) => {
  return (
    <ul key={id}>
      <li>
        <p>
          {name}: {number}
        </p>
        <button type="button" onClick={() => deleteContact(id)}>
          Delete
        </button>
      </li>
    </ul>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
