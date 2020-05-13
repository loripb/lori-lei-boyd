import React from 'react';
import { Container, Grid, Segment, Image } from 'semantic-ui-react';

const About = ({ handleClick }) => {

  return(
    <Container>
      <p onClick={ handleClick }>back</p>

      <Grid columns={3} divided>
        <Grid.Row stretched>
          <Grid.Column>
            <Segment>
              <Image src='IMG_0061.jpeg'/>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <h1>Lori "Lei" Boyd</h1>
            </Segment>
            <Segment>
              <p>Before graduating from Flatiron School in April of 2020, I was a self-taught programmer and fell in love with the idea of turning nothing into something with a few lines of code. Without knowing what tools to use it would take me another year or two to get where I am today. With the skills and tools obtained from Flatiron School, I pledge to keep creating and solving problems to make the world a better place to live in.</p>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
};

export default About;
