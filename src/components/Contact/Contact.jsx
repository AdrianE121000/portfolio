import Snackbar from '@mui/material/Snackbar';
import emailjs from '@emailjs/browser';
import { useContext, useRef, useState } from 'react';
import Context from '../../context/Context';
import './contact.css';

function Contact() {
  const { translations } = useContext(Context);
  const [open, setOpen] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_hegealp',
        'template_02zbegm',
        form.current,
        'xvRfXLmm5nFPJTm2S'
      )
      .then(
        () => {
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div
        id='contact'
        className='contactContainer'>
        <div className='contactWrapper'>
          <div className='contactTitle'>{translations.header.contact}</div>
          <form
            className='contactForm'
            ref={form}
            onSubmit={handleSubmit}>
            <input
              type='email'
              className='contactInput'
              placeholder={translations.contact.email}
              name='from_email'
              required
            />
            <input
              className='contactInput'
              placeholder={translations.contact.name}
              name='from_name'
              type='text'
              required
            />
            <input
              className='contactInput'
              placeholder={translations.contact.subject}
              name='subject'
              type='text'
            />
            <textarea
              className='contactTextarea'
              placeholder={translations.contact.message}
              rows='4'
              name='message'
              required
            />
            <input
              className='contactButton'
              type='submit'
              value={translations.contact.send}
            />
          </form>
          <Snackbar
            open={open}
            autoHideDuration={5000}
            onClose={() => setOpen(false)}
            message={translations.contact.success}
            severity='success'
          />
        </div>
      </div>
    </>
  );
}

export default Contact;
