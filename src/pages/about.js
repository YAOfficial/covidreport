import React from 'react';
import { Helmet } from 'react-helmet';


import Layout from 'components/Layout';
import Container from 'components/Container';

  
  const SecondPage = () => {
    return (
      <Layout pageName="about">
        <Helmet>
          <title>About</title>
        </Helmet>
        <Container type="content">
          <h1 id="about">About Covid Report </h1>
  
          <h2 id="about">This project visualizes data regarding CoronaVirus (Covid-19)  using trusted and official sources </h2>
          <p id="about">View project code on  <a href="https://github.com/YAOfficial/covidreport"> Github</a> </p>
          
  
          <h2 id="about">Created By</h2>
          <p id="about">
            <a href="https://www.linkedin.com/in/yusufahmed1/">Yusuf Ahmed</a>
          </p>
        </Container>
      </Layout>
    );
  };
  export default SecondPage;
  