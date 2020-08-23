import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Profile from './Profile';
import Headerr from '../components/Header/Headerr';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const AppWrapper = styled.div`
  text-align: center;
`;

class App extends Component {
  constructor() {
    super();
  this.state = {
    listDataFromChild: '',
  };
  myCallback = (dataFromChild) => {
    this.setState({ listDataFromChild: dataFromChild });
}
  }
  render() {
    console.log(this.state.listDataFromChild);
    return (
      <>
     
        <GlobalStyle />
        <AppWrapper>
          <Headerr callbackFromParent={this.myCallback}/>
          <h1>{this.state.listDataFromChild}</h1>
          <Profile />
        </AppWrapper>
      </>
    );
  }
}

export default App;
