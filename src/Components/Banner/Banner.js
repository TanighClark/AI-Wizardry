import React, { useRef, useState } from 'react';
import './Banner.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import bookshelf from '../Assets/bookshelf.png'
import HomeContent from '../HomePage/HomeContent/HomeContent';

const Banner = () => {

    const [show, setShow] = useState(false);
    const [isSignIn, setIsSignIn] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const switchForm = () => {
        setIsSignIn(!isSignIn);
    };

    return (
        <article className='whole'>
            <div className="left">
                <header className="headerr">
                    <h1>Make Your Own <br />Children's book With <br /><span>AI Wizardry</span></h1>
                </header>
                <p>Ignite creativity and bring your own children's book to life.
                    Our platform empowers you to craft a unique story using advanced AI text generators,
                    visualize your tale with AI-driven image creation, and enhance the storytelling experience
                    with AI text-to-speech features. Whether you're aiming to design a captivating picture book,
                    an enchanting chapter book, or a digital online book, AI Wizardry offers the tools to
                    transform your vision into reality. Embrace the magic of AI and start creating a personalized,
                    engaging book that sparks the imagination of young readers.</p>
                <div>
                    <Button variant="primary" onClick={handleShow}>
                        Launch Storybook Journey
                    </Button>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{isSignIn ? 'Sign In' : 'Create Account'}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {isSignIn ? (
                            <Form>
                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                    <Form.Label column sm="2">Email </Form.Label>
                                    <Col sm="10">
                                        <Form.Control type="email" placeholder="name@example.com" />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="2">
                                        Password
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control type="password" placeholder="Password" />
                                    </Col>
                                </Form.Group>
                                <Button className='btn' variant="primary" onClick={handleClose}>
                                    Sign In
                                </Button>
                                <p className="switch-form-link" onClick={switchForm}>Don't have an account?</p>
                            </Form>
                        ) : (

                            <Form>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Full name"
                                    className="mb-3"
                                >
                                    <Form.Control type="text" placeholder="Tanigh Clark" />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                    className="mb-3"
                                >
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPassword" label="Password">
                                    <Form.Control type="password" placeholder="Password" />
                                </FloatingLabel>
                                <Form.Text id="passwordHelpBlock" muted>
                                    Your password must be 8-20 characters long, contain letters and numbers,
                                    and must not contain spaces, special characters, or emoji.
                                </Form.Text>
                                <Button variant="primary" onClick={handleClose}>
                                    Create Account
                                </Button>
                                <p className="switch-form-link" onClick={switchForm}>Already have an account?</p>
                            </Form>
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div className='right-side'>
                <img src={bookshelf} alt="" />
            </div>

        </article>
    );
}


export default Banner