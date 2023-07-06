import ContactItem from '../ContactItem/ContactItem';
import css from './/contactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter, deleteContact } from 'redux/contactsSlice';


const ContactList =()=> {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleDeleteContact = id => dispatch(deleteContact(id));

  const filterList = () => {
    const normalValue = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalValue)
    );
  };

  const contactsList = filterList();

  return (
  <div className={css.contactCard}>
    <ul className={css.contact}>{contactsList.length > 0 ? (
        contactsList.map(({ id, name, number }) => {
          return (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              deleteContact={handleDeleteContact}
            />
          );
        })
      ) : (
        <li className={css.errorLi}>
          <strong></strong>
        </li>
      )}</ul>

    </div>

    )}



export default ContactList;
