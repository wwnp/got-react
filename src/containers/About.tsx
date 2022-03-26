import { email } from 'auxiliary';
import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { ClipboardCopy } from './../components/Clipboard';

export const About = () => {
  return (
    <Container className='h-100'>
      <Row className="justify-content-center h-100 pt-2">
        <Col xs={12} className='mt-3'>
          <div className="got__block">
            <h2 className='display-5 text-center'>Contacts</h2>
            <ClipboardCopy copyText={email}></ClipboardCopy>
            <a className="btn btn-info btn-sm" href="https://github.com/wwnp/got-react" rel="noreferrer" target={'_blank'}>Github Repo</a>


          </div>
        </Col>
      </Row>
    </Container>
  )
}
