import React from "react";
import { Button, Row, Col, Alert } from "react-bootstrap";



function GameOver(props) {
    const [show, setShow] = React.useState(true);
  
    if (show) {
      return (
        <>
        <Alert className='position-absolute mt-5 fade'show={show} variant="danger">
          <Alert.Heading className='text-center'>Game Over</Alert.Heading>
          <p className='text-center'>
            Your final score is: {props.score}
          </p>
          <hr className='bg-light' />
          <div className="d-flex justify-content-end">
            <Row>
            <Col> 
            <Button onClick={props.newGame} className='h-100 w-100' variant="outline-light">
             New Game
            </Button>
            </Col>   
            
            <Col>
            <Button className='h-100 w-100' onClick={() => setShow(false)} variant="primary">
                Dismiss
            </Button>
            </Col>
            </Row>
          </div>
        </Alert>
  
        {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
      </>
      );
    }
    return null;
  }
  

export default GameOver;
