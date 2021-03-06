import React from 'react';
import { Link } from 'gatsby';
import { FaGithub } from 'react-icons/fa';


import Container from 'components/Container';

const Header = () => {
 

  return (
    <header>
      <Container type="content">
        <p>
          <Link to="/">CovidReport</Link>
        </p>
        <ul>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <a href="https://github.com/YAOfficial/covidreport">
              <span className="visually-hidden">Github</span>
              <FaGithub />
            </a>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
