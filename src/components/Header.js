import React from 'react';
import { Link } from 'gatsby';
import { FaGithub } from 'react-icons/fa';

import { useSiteMetadata } from 'hooks';

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
            <a href="https://github.com/YAOfficial">
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
