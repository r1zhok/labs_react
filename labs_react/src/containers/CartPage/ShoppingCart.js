import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity } from '../../Redux/reduces/carSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ValidationErrorMessage = ({ name }) => (
    <ErrorMessage name={name}>
        {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
    </ErrorMessage>
);

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().matches(/^[0-9]+$/, 'Invalid phone number, must being numbers!').required('Phone is required'),
    address: Yup.string().required('Address is required'),
});

const ShoppingCart = () => {
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.car.carItems);
    const dispatch = useDispatch();
    const carTotalQuantity = useSelector((state) => state.car.carTotalQuantity) * 120000;

    const [showStore, setShowStore] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const backToCatalog = () => {
        navigate("/catalog");
    };

    const handleToForm = () => {
        setShowForm(true);
        setShowStore(false);
    };

    const handleSubmit = (values, { setSubmitting }) => {
        console.log(values);
        setShowSuccess(true);
        setShowForm(false);
        setSubmitting(false);
    };

    return (
        <div>
            {showForm && (
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        address: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <div style={{marginLeft: '550px'}}>
                            <h2 style={{marginLeft: '100px'}}>Checkout</h2>
                            <div style={{display: 'flex', marginTop: '70px'}}>
                                <div style={{paddingRight: '25px'}}>
                                    <label htmlFor="firstName">First Name:</label>
                                    <div>
                                        <Field type="text" id="firstName" name="firstName" />
                                    </div>
                                    <ValidationErrorMessage name="firstName" />
                                </div>
                                <div>
                                    <label htmlFor="lastName">Last Name:</label>
                                    <div>
                                        <Field type="text" id="lastName" name="lastName" />
                                    </div>
                                    <ValidationErrorMessage name="lastName" />
                                </div>
                            </div>
                            <div style={{display: 'flex', marginTop: '50px'}}>
                                <div style={{paddingRight: '25px'}}>
                                    <label htmlFor="email">Email:</label>
                                    <div>
                                        <Field type="email" id="email" name="email" />
                                    </div>
                                    <ValidationErrorMessage name="email" />
                                </div>
                                <div>
                                    <label htmlFor="phone">Phone:</label>
                                    <div>
                                        <Field type="text" id="phone" name="phone" />
                                    </div>
                                    <ValidationErrorMessage name="phone" />
                                </div>
                            </div>
                            <div style={{marginTop: '50px', marginLeft: '100px'}}>
                                <label htmlFor="address">Address:</label>
                                <div>
                                    <Field type="text" id="address" name="address" />
                                </div>
                                <ValidationErrorMessage name="address" />
                            </div>
                            <div style={{marginTop: '50px', marginLeft: '75px'}}>
                                <Button onClick={backToCatalog}>Back to Catalog</Button>
                                <Button type="submit">Continue</Button>
                            </div>
                        </div>
                    </Form>
                </Formik>
            )}
            {showStore && (
                <Card>
                    <CardHeader style={{ textAlign: "center" }}>
                        <h2>Shopping Cart</h2>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            {cartItems.map((car, index) => (
                                <Col key={index} sm={6} md={4}>
                                    <Card style={{width: '380px', height: '400px'}}>
                                        <CardBody>
                                            <img src={car.urlPhoto} alt={car.mark} style={{width:'350px', height: '180px'}}/>
                                            <h4>{car.mark}</h4>
                                            <p>Power: {car.power}</p>
                                            <p>Speed: {car.speed}</p>
                                            <p>Quantity: {car.carQuantity}</p>
                                            <div>
                                                <Button onClick={() => dispatch(incrementQuantity(car.id))}>Increment</Button>
                                                <Button onClick={() => dispatch(decrementQuantity(car.id))}>Decrement</Button>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </CardBody>
                    <CardFooter style={{ display: "flex", justifyContent: "space-between" }}>
                        <p>Total amount: {carTotalQuantity} $</p>
                        <div>
                            <Button onClick={backToCatalog}>Back to Catalog</Button>
                            <Button onClick={handleToForm}>Continue</Button>
                        </div>
                    </CardFooter>
                </Card>
            )}
            {showSuccess && (
                <div style={{marginLeft: '700px', marginTop: '70px'}}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxd729krVHh4YIGr-binRNm0JIujPECkR5SDatBd4&s" alt="Фото" style={{width: '200px'}}/>
                    <p style={{marginLeft: '50px', fontFamily: 'Georgia, serif', fontSize: '30px', marginTop: '50px'}}>Success</p>
                    <p style={{fontFamily: 'Georgia, serif', fontSize: '20px'}}>Your order was send to processing!</p>
                    <p style={{fontFamily: 'Georgia, serif', fontSize: '20px'}}>Check your email box for futher information</p>
                    <Button onClick={backToCatalog} style={{marginTop: '50px'}}>Back to Catalog</Button>
                </div>
            )}
        </div>
    );
};

export default ShoppingCart;
