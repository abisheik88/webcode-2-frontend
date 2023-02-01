import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import { getAllCars } from '../redux/action/carsActions';
import { Row, Col } from 'antd';
import Spinner from '../components/Spinner';
function Home() {
    const { cars } = useSelector(state => state.carsReducer)
    const { loading } = useSelector(state => state.alertsReducer)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAllCars())
    }, [dispatch])

    return (
        <DefaultLayout>

            {loading === true && <Spinner />}

            <Row justify='center' gutter={16} className='mt-5'>

                {cars.map(car => {
                    return <Col lg={7} sm={24} xs={24}>
                        <div className='car p-2 bs1'>
                            <img src={car.image} className="carimg" alt='noimage'></img>

                            <div className='car-content d-flex align-items-center justify-content-between'>
                                <div>
                                    <p>{car.name}</p>
                                    <p>{car.rentPerHour} Rent per Hour/-</p>
                                </div>
                                <div>
                                    <button className='btn1 mr-2'>Book Now</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                })}
            </Row>

        </DefaultLayout>
    )
}

export default Home