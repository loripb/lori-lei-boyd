import React, { useState } from 'react';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import logo from './logo.svg';
import './App.css';
import { Container, Header, Icon } from 'semantic-ui-react';

function App() {
  // usestate to render diff components
  const [renderedComponent, setRenderedComponent] = useState(undefined)

  const handleClick = (e) => {

    if (e.target.classList.value) {
      if (e.target.classList.value === 'user secret icon') {
        setRenderedComponent('About')
      } else if (e.target.classList.value === 'archive icon') {
        setRenderedComponent('Projects')
      }
    } else {
      setRenderedComponent(e.target.innerText)
    }
  }

  const render = () => {
    switch (renderedComponent) {
      case 'About':
        return <About handleClick={ handleClick }/>
      case 'Projects':
        return <Projects handleClick={ handleClick }/>
      default:
        return <Landing handleClick={ handleClick }/>
    }
  }

  return (
    <>
      <Container fluid>
        <Header as='h1' id='top'>Hi, I'm Lori "Lei" Boyd!</Header>
        <Header as='h2' id='top2'>Welcome to my creation station!</Header>
          <Icon link name='linkedin' />
          <Icon link name='github' />
          <Icon link name='blogger b' />
      </Container>

      {
        render()
      }
    </>
  );
}

export default App;
