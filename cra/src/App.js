import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import UserOnly from './UserOnly';
import styled,{createGlobalStyle} from 'styled-components';

const Global = createGlobalStyle`
body {  
          padding:0;
          margin:0;
      }
`;

const Container = styled.div`
      position:absolute;
      width:100%;
      height:100%;
      display:flex;
      justify-content:center;
      align-items:center;
      background-color:#d1ccc0;
`;

class App extends Component {
  render() {
    return (
        <Router>
          <React.Fragment>
            <Header />
              <Container>
                <Global/>
                <Route exact={true} path={"/"} component={Home} />
                <Route path={"/useronly"} component={UserOnly} />
                <Route path={"/login"} component={Login} />
                <Route path={"/register"} component={Register} />
              </Container>
          </React.Fragment>
        </Router>
    );
  }
}

export default App;
