import React from 'react';
import { Container, Grid, Segment, Image } from 'semantic-ui-react';

const Projects = ({ handleClick }) => {

  return(
    <Container>
      <p onClick={ handleClick }>back</p>

      <Grid columns={2} divided>
        <Grid.Row stretched>
          <Grid.Column>
            <Segment>
              <a href='https://subwaytimes.herokuapp.com/'><Image src='/subway.png' /></a>
              <p>A real-time train arrival tracker Progressive Web App. Written in React.js with Redux functionality and a custom Rails API backend that includes data from the MTA's Real-Time Data API.</p>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <a href='https://flick-pix.herokuapp.com/'><Image src='/FlickPixScreenShot_edited.jpg' size="medium"/></a>
              <p>A random movie generator web app written in React.js with a custom Rails API backend that gets movie data from The Movie Database API.</p>
            </Segment>
            <Segment>
              <a href='https://github.com/TCaprioli/Sonata'><Image src='/SonataScreenShot_edited.jpg' size="medium"/></a>
              <p>A music player web app that has playlist functionality. Written in vanilla Javascript with a custom Rails API backend.</p>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
};

export default Projects;
