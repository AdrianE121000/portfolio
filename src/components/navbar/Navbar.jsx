import './navbar.css';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useContext } from 'react';
import Context from '../../context/Context';
import { useState } from 'react';
import { FaCode } from 'react-icons/fa6';
import { FaLaptopCode } from 'react-icons/fa';
import { TiContacts } from 'react-icons/ti';
import { TbUserCode } from 'react-icons/tb';
import { IoLanguageOutline } from 'react-icons/io5';

const Navbar = () => {
  const { translations, handleLang, language } = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='nav'>
      <div className='navbarContainer'>
        <div>
          <a
            href='#root'
            style={{
              display: 'flex',
              alignItems: 'center',
              color: 'white',
              marginBottom: '20',
              cursor: 'pointer',
            }}>
            <div
              style={{ color: '#854CE6' }}
              className='span'>
              {translations.header.port}
            </div>
          </a>
        </div>
        <div className='mobileIcon'>
          {!isOpen ? (
            <FaBars
              color='#854CE6'
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          ) : (
            <FaTimes
              color='#854CE6'
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
          )}
        </div>
        <ul className='navItems'>
          <div style={{ display: 'flex' }}>
            <TbUserCode
              color='#854CE6'
              size='25px'
            />
            <a
              className='navLink'
              href='#about'>
              {translations.header.about}
            </a>
          </div>
          <div style={{ display: 'flex' }}>
            <FaCode
              color='#854CE6'
              size='25px'
            />
            <a
              className='navLink'
              href='#skills'>
              {translations.header.skills}
            </a>
          </div>
          <div style={{ display: 'flex' }}>
            <FaLaptopCode
              color='#854CE6'
              size='25px'
            />
            <a
              className='navLink'
              href='#projects'>
              {translations.header.works}
            </a>
          </div>
          <div style={{ display: 'flex' }}>
            <TiContacts
              color='#854CE6'
              size='25px'
            />
            <a
              className='navLink'
              href='#contact'>
              {translations.header.contact}
            </a>
          </div>
          <div style={{ display: 'flex' }}>
            <IoLanguageOutline
              color='#854CE6'
              size='25px'
            />
            <select
              value={language}
              name='lang'
              onChange={handleLang.select}
              className='select navLink'>
              <option value='en'>English</option>
              <option value='es'>Spanish</option>
            </select>
          </div>
        </ul>

        <div className='buttonContainer'>
          <a
            className='githubButton'
            href={Bio.github}
            target='_blank'
            rel='noreferrer'>
            {translations.header.gh}
          </a>
        </div>
        {isOpen && (
          <div className='mobileMenu'>
            <div style={{ display: 'flex' }}>
              <TbUserCode
                color='#854CE6'
                size='25px'
              />
              <a
                className='mobileLink'
                href='#about'>
                {translations.header.about}
              </a>
            </div>
            <div style={{ display: 'flex' }}>
              <FaCode
                color='#854CE6'
                size='25px'
              />
              <a
                className='mobileLink'
                href='#skills'>
                {translations.header.skills}
              </a>
            </div>
            <div style={{ display: 'flex' }}>
              <FaLaptopCode
                color='#854CE6'
                size='25px'
              />
              <a
                className='mobileLink'
                href='#projects'>
                {translations.header.works}
              </a>
            </div>
            <div style={{ display: 'flex' }}>
              <TiContacts
                color='#854CE6'
                size='25px'
              />
              <a
                className='mobileLink'
                href='#contact'>
                {translations.header.contact}
              </a>
            </div>
            <div style={{ display: 'flex' }}>
              <IoLanguageOutline
                color='#854CE6'
                size='25px'
              />
              <select
                value={language}
                name='lang'
                onChange={handleLang.select}
                className='select mobileLink'>
                <option value='en'>English</option>
                <option value='es'>Spanish</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
