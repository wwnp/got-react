import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setSingle, setLoading, setSingleMore, setSearch } from 'store/gotSlice';
import { RootState } from 'store';
import Image from 'react-bootstrap/Image'
import Loader from 'components/Loader/Loader';
import { delay } from 'auxiliary';

export const Single = () => {
  const dispatch = useDispatch()

  const loading = useSelector((state: RootState) => state.got.loading)
  const singleItem = useSelector((state: RootState) => state.got.singleItem)
  const singleMore = useSelector((state: RootState) => state.got.singleMore)

  const { id } = useParams();

  useEffect(() => {
    async function fetchCharacter() {
      const response = await axios.get(`https://thronesapi.com/api/v2/Characters/${id}`)
      const { data } = response

      const response2 = await axios.get(`https://www.anapioficeandfire.com/api/characters?name=${data.fullName}`)
      const { data: data2 } = response2
      console.log({...data, ...data2[0]})
      dispatch(setSingle({...data, ...data2[0]}))

      dispatch(setLoading(false))
    }
    dispatch(setLoading(true))
    fetchCharacter()
  }, [])

  return (
    <Container className='h-100'>
      {!Object.keys(singleItem).length
        ? <Loader></Loader>
        : (
          <Row className="justify-content-center mt-2 mt-md-5">
            <div className="got__block rounded">
              <Row className='mt-3'>
                <Col sm={12} md={4}>
                  <Image src={singleItem.imageUrl} alt={singleItem.image} rounded={true}></Image>
                </Col>
                <Col sm={12} md={8}>
                  <h3 className='display-3 text-center'>{singleItem.fullName}</h3>
                  {!!singleItem.gender && <p>Gender: {singleMore.gender}</p>}
                  {!!singleItem.title && <p>Title: {singleItem.title}</p>}
                  {!!singleItem.family && <p>Family: {singleItem.family}</p>}
                  {!!singleItem.born && <p>Born: {singleMore.born}</p>}
                  {!!singleItem.died && <p>Died: {singleMore.died}</p>}
                  {!!singleItem.mother && <p>Mother: {singleMore.mother}</p>}
                  {!!singleItem.father && <p>Father: {singleMore.father}</p>}
                  {!!singleItem.culture && <p>Culture: {singleMore.culture}</p>}
                  {/* {singleItem.playedBy[0].length > 1 && <p>PlayedBy: {singleMore.playedBy[0]}</p>} */}
                  {/* {!!singleMore.aliases && (
                      <div>
                        {
                          singleMore.aliases.map((i: any, index: number) => {
                            return <Badge key={i + index} bg="secondary">{i}</Badge>
                          })
                        }
                      </div>
                    )} */}
                </Col>
              </Row>
            </div>
          </Row>
        )
      }
    </Container>
  )
}
