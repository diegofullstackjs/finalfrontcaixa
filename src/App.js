import React, { useEffect } from 'react';
import Routes from './routes'
import Header from './shared/Header'
import {BrowserRouter as Router} from 'react-router-dom'
import {AuthLocalStorage} from './redux/actions/ActionLocalStorage'
import {connect, useDispatch} from 'react-redux'
import {Container} from 'react-bootstrap'
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
   dispatch(AuthLocalStorage())
  },[dispatch])
  return (
    <Router>
      <Header />
       <Container>
          <Routes />
       </Container>
    </Router>
  );
}
export default connect(null,null)(App);
