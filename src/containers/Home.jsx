import React from 'react'
// import bgGot from '../assets/images/bg-got.jpg'
import gotSnow from '../assets/images/gotSnow.jpg'
import gotItem from '../assets/images/gotItem.jpg'
import got from '../assets/images/got.jpg'
import gotLast from '../assets/images/gotLast.jpg'
import tar from '../assets/images/tar.png'
import { Container, Row, Col } from 'react-bootstrap';
import { style } from 'glamor'

export const Home = props => {
  const items = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 4]
  return (
    <main className='bg-got'>
      {/* <h1>Page not Found</h1> */}
      {/* <Link to='/'>To Home</Link> */}
      <Container className={'smooth-border '}>
        <Row className='flex-wrap'>
          {
            items.map((item, index) => {
              let styles = null
              let imgWrapper = null
              let backPos = null
              let left = null
              if((index + 1) % 6 === 0) {
                imgWrapper = gotLast
                backPos = '43%'
                left = '30%'
              }else{
                imgWrapper = got
                backPos = '20%'
                left = '35%'
              }
              styles = {
                redHoverbutton: style({
                  // height: '466px',
                  width: ' 100%',
                  // transition: 'background .15s ease-in-out',
                  overflow: 'hidden',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  background: `url(${gotSnow}) no-repeat`,
                  backgroundPosition: `right ${backPos} bottom 52% `,
                  backgroundSize: '135px',
                  ":hover": {
                    background: `url(${gotItem})  no-repeat`,
                    backgroundSize: '135px',
                    backgroundPosition: `right ${backPos} bottom 52%`,
                  },
                  ":hover h2": {
                    textAlign:'center',
                    padding:'5px',
                    transition: 'background .7s ease-in-out, opacity .7s ease-in-out',
                    left: left,
                    opacity: 1,
                    background:' rgba(0, 0, 0, 0.3)',
                    borderRadius: '5%',
                    // background: `url(${gotItem})  no-repeat`,
                    // backgroundSize: '135px',
                    // backgroundPosition: `right ${backPos} bottom 52%`,
                  }
                })
              }
              return (
                <Col xs={12} md={4} lg={3} xl={2} style={{
                  padding: '0',
                }}>
                  <div className='card-wrapper' style={{
                    background: `url(${imgWrapper}) center center no-repeat`,
                    backgroundSize: '290px',
                  }}>
                    <div className="card-custom" {...styles.redHoverbutton}>
                      <h2>Daenerys Targaryen</h2>
                    </div>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
      <img src={tar} className={'tar-logo'} alt='tar' />
    </main>
  )
}