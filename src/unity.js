import React, { Component } from 'react';
import './App.css';
import {connect} from 'redux-zero/react';
import {Grid, Row, Col, FormGroup, FormControl, InputGroup, Button} from 'react-bootstrap';
import {addnumber, removeNumber} from './Actions';
import {Comment} from './Components';

const Unity = ({ comments }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    if(this.name.value && this.comment.value){
      addnumber(this.name.value, this.comment.value);
      this.name.value = '';
      this.comment.value = '';
    }
  }
  return (
    <Grid className='box'>
      <Row>
        <Col sm={6}>
          <div className='comments'>
          <h3 className='titles'>ADD NUMBERS</h3>

            <form onSubmit={onSubmit}>
              <FormGroup>
                <InputGroup className="inputs name">
                  <FormControl type="number" maxLength="9" placeholder="99-9979899" inputRef={ref => { this.name = ref }} />
                </InputGroup>
              </FormGroup>
              
              <i className="fa fa-mobile" aria-hidden="true"></i>
              <Button type="submit" id='post'className="btnNumber">
                <p className="addNumber">+</p>
              </Button>
            </form>
          </div>
        </Col>
        <Col sm={6}>
        <form onSubmit={onSubmit}>
          
          <FormGroup>
            <InputGroup className="inputs sms">
              <FormControl className="sms2v" componentClass='textarea' type="text" placeholder="Message" inputRef={ref => { this.comment = ref }} />
            </InputGroup>
          </FormGroup>
         
        </form> 
        </Col>
      </Row> 
      
      <div className=''>
        <h3>
        <img className="phone" src="img/phone.png" />
          <span><strong>PHONE</strong></span>
        </h3>
        <p className="counter">{comments.length} números agregados</p>
        <div>
          {
            comments.map((item, index) => <Comment key={index} name={item.name} comment={item.comment} index={index} />)
          }
        </div>
      </div>
    </Grid>
  );
}

export default Unity;

