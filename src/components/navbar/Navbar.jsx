import React from 'react';
import './navbar.css';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useContext } from 'react';
import Context from '../../context/Context';
import { useState } from 'react';

const Navbar = () => {
  const { translations, handleLang, language } = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='nav'>
      <div className='navbarContainer'>
        <div>
          <a
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
          <a
            className='navLink'
            href='#about'>
            {translations.header.about}
          </a>
          <a
            className='navLink'
            href='#skills'>
            {translations.header.skills}
          </a>
          <a
            className='navLink'
            href='#projects'>
            {translations.header.works}
          </a>
          <select
            value={language}
            name='lang'
            onChange={handleLang.select}
            className='select navLink'>
            <option value='en'>English</option>
            <option value='es'>Spanish</option>
          </select>
        </ul>

        <div className='buttonContainer'>
          <a
            className='githubButton'
            href={Bio.github}
            target='_blank'>
            {translations.header.gh}
          </a>
        </div>
        {isOpen && (
          <div className='mobileMenu'>
            <a
              className='mobileLink'
              href='#about'
              onClick={() => {
                setIsOpen(!isOpen);
              }}>
              {translations.header.about}
            </a>
            <a
              className='mobileLink'
              href='#skills'
              onClick={() => {
                setIsOpen(!isOpen);
              }}>
              {translations.header.skills}
            </a>
            <a
              className='mobileLink'
              href='#projects'
              onClick={() => {
                setIsOpen(!isOpen);
              }}>
              {translations.header.works}
            </a>
            <select
              value={language}
              name='lang'
              onChange={handleLang.select}
              className='select mobileLink'>
              <option value='en'>English</option>
              <option value='es'>Spanish</option>
            </select>
            <a
              className='githubButton'
              style={{
                padding: '10px 16px',
                background: '#854CE6',
                color: 'white',
                width: 'max-content',
              }}
              href={Bio.github}
              target='_blank'>
              {translations.header.gh}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
