
import React from "react";
import {Badge, Col } from 'react-bootstrap';

export default function Score(props){
        return(
            <div data-testid='scoreboard' className='h4 rounded col-12'>
            
                <Col className='font-weight-bold rounded d-flex flex-column pb-2 bg-success'> 
                <p className='text-light text-center'>Score</p>
                <Badge variant='success' className='font-weight-bold'>{props.currentScore}/{Math.pow(props.order, 2)}</Badge>
                </Col>   
             
            </div>
        );
    }