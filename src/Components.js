import React, {Component} from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import {removeNumber} from './Actions'

export const Message = ({name, comment, index}) => {
    return (
        <div className='caja comentario'>
            <Row>
                <Col md={2} sm={3} xs={4} className='text-center'>
                    <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat/256/phone-icon.png" width="50px"/>
                </Col>
                <Col md={10} sm={9} xs={8}>
                    <h3 className="name">{name}</h3>
                    <p className="commentuser">{comment}</p>
                    <div className="result">
                        <Button onClick={() => removeNumber(index)}>
                            <a>Delete
                            </a>
                        </Button>
                    </div>
                </Col>
            </Row>

        </div>
    );
}
