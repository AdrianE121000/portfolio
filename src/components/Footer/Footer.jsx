import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '../../data/constants';
import { useContext } from 'react';
import Context from '../../context/Context';
import './footer.css';

function Footer() {
  const { translations } = useContext(Context);
  return (
    <div className='footerContainer'>
      <footer className='footerWrapper'>
        <h1 className='footerLogo'>Adrian Pérez</h1>
        <nav className='footerNav'>
          <a href='#about'>{translations.header.about}</a>
          <a href='#skills'>{translations.header.skills}</a>
          <a href='#projects'>{translations.header.works}</a>
        </nav>
        <div className='socialMediaIcons'>
          <a
            href={Bio.twitter}
            target='display'>
            <TwitterIcon />
          </a>
          <a
            href={Bio.linkedin}
            target='display'>
            <LinkedInIcon />
          </a>
          <a
            href={Bio.insta}
            target='display'>
            <InstagramIcon />
          </a>
          <a
            href={Bio.telegram}
            target='display'>
            <TelegramIcon />
          </a>
        </div>
        <p>
          &copy; 2023 Adrian Pérez.{'  '}
          <span>{translations.footer.copy}</span>{' '}
        </p>
      </footer>
    </div>
  );
}

export default Footer;