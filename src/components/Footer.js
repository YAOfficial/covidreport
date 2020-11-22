import React from 'react';


import Container from 'components/Container';

const Footer = () => {
 

  return (
    <footer>
    <Container>
      <p>Disclaimer: This project is merely an showcase, if you or someone you know is seeking medical advice concerning coronavirus(covid-19) please consult your nations/states medical guidelines
        &copy; { new Date().getFullYear() }, <a href={"https://www.linkedin.com/in/yusufahmed1/"}>Yusuf Ahmed</a>
      </p>
    </Container>
  </footer>
  );
};

export default Footer;
