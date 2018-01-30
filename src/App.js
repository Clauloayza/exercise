import React, { Component } from 'react';
import './App.css';
import {connect} from 'redux-zero/react';
import {Grid, Row, Col, FormGroup, FormControl, InputGroup, Button} from 'react-bootstrap';
import {addNumber, removeComment} from './Actions';
import {Message} from './Components';
import {change} from './Actions';

const App = ({ comments, success }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    if(this.name.value && this.comment.value){
      addNumber(this.name.value, this.comment.value);
      this.name.value = '';
      this.comment.value = '';
    }
  }
  return (
    <Grid className='box'>
    <div>
    <h1 className="name">SMS</h1>
      <h2 className="title">premium v2</h2>
      <img src="http://www.lavanguardia.com/r/GODO/LV/p4/WebSite/2017/06/27/Recortada/img_rpeco_20161226-123733_imagenes_lv_otras_fuentes_istock-493694506-kR6G-U423730768977LGH-992x558@LaVanguardia-Web.jpg" width="100%"/>
    </div>
      
      <Row>
       <Col sm={6}>
        <div className='comments'>
        <h3 className='titles'>ADD NUMBER</h3>

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
            <InputGroup className="inputs">
              <FormControl className="sms" componentClass='textarea' type="text" placeholder="Message" inputRef={ref => { this.comment = ref }} />
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
            comments.map((item, index) => <Message key={index} name={item.name} comment={item.comment} index={index} />)
          }
        </div>
      </div>
      <div className=''>
        <Button onClick={() => change()} type="submit" id='post'className="btnNumber text-center">
            SUBMIT
        </Button>
        {success && <h1>
        Your message has been sent</h1>}
      </div>
    </Grid>
    
  );
}

const mapToPlay = ({comments, success}) => ({comments, success})
export default connect(mapToPlay)(App);

