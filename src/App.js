import react, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap"
import Signup from './components/Signup';
import Signin from './components/Signin';

function App() {
  const [isSignIn, setIsSignIn] = useState(true)
  
  return (
    <div className="app">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <ButtonGroup className='mt-4 mb-4 w-100'>
              <Button variant={isSignIn ? "primary":  "secondary"} onClick={() => setIsSignIn(true)}>SignIn</Button>
              <Button variant={isSignIn ? "secondary" : "primary"} onClick={() => setIsSignIn(false)}>SignUp</Button>
            </ButtonGroup>
            {isSignIn ?
              (
                <Signin />
              ) : (
                <Signup />
              )
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
