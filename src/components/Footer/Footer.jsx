import { FaCode, FaLaptopCode, FaTelegramPlane } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Bio } from '../../data/constants';
import { useContext } from 'react';
import Context from '../../context/Context';
import './footer.css';
import { TbUserCode } from 'react-icons/tb';
import { TiContacts } from 'react-icons/ti';

function Footer() {
  const { translations } = useContext(Context);
  return (
    <div className='footerContainer'>
      <footer className='footerWrapper'>
        <h1 className='footerLogo'>Adrian Pérez</h1>
        <nav className='footerNav'>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TbUserCode
              color='#854CE6'
              size='25px'
            />
            <a href='#about'>{translations.header.about}</a>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <FaCode
              color='#854CE6'
              size='25px'
            />
            <a href='#skills'>{translations.header.skills}</a>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <FaLaptopCode
              color='#854CE6'
              size='25px'
            />
            <a href='#projects'>{translations.header.works}</a>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TiContacts
              color='#854CE6'
              size='25px'
            />
            <a href='#contact'>{translations.header.contact}</a>
          </div>
        </nav>
        <div className='socialMediaIcons'>
          <a
            href={Bio.twitter}
            target='_blank'
            rel='noreferrer'>
            <FaXTwitter />
          </a>
          <a
            href={Bio.linkedin}
            target='_blank'
            rel='noreferrer'>
            <FaLinkedin />
          </a>
          <a
            href={Bio.insta}
            target='_blank'
            rel='noreferrer'>
            <FaInstagram />
          </a>
          <a
            href={Bio.telegram}
            target='_blank'
            rel='noreferrer'>
            <FaTelegramPlane />
          </a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Adrian Pérez.{'  '}
          <span>{translations.footer.copy}</span>{' '}
        </p>
      </footer>
    </div>
  );
}

export default Footer;
