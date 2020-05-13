import React from 'react';
import {
  Container,
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Search,
  Segment,
} from 'semantic-ui-react';

const Landing = ({ handleClick }) => {

  return(
    <Container>
        <Grid columns={2} stackable textAlign='center'>

          <Grid.Row verticalAlign='middle'>
            <Grid.Column>
              <Header icon onClick={ handleClick }>
                <Icon name='user secret' />
                About
              </Header>
            </Grid.Column>

            <Grid.Column onClick={ handleClick }>
              <Header icon>
                <Icon name='archive' />
                Projects
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </Container>
  )
};

export default Landing;
