import React from 'react';
import { Container } from 'semantic-ui-react';

const About = ({ handleClick }) => {

  return(
    <Container>
      <p onClick={ handleClick }>back</p>
    </Container>
  )
};

export default About;
