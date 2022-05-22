import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Test.css';

const Test = ({ test }) => {
    const { id, name, img } = test;
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleTest = e => {
        handleShow()
    }

    return (
        <div className="col">
            <div onClick={handleTest} className="card shadow border-0 text-light">
                <img src={img} className="card-img-top p-5" alt="..." />
                <div className="body card-body">
                    <h5 className="card-title text-center">{name}</h5>
                </div>
            </div>
            <Offcanvas className='off-canvas w-50 h-50 mx-auto my-auto px-2' scroll={true} show={show} onHide={handleClose} placement='top'>
                <Offcanvas.Header closeButton>
                    <p></p>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                        <h4 > You are entering the <b>{name}</b> exam.</h4>
                        <p className='text-danger'>Once you enter, the clock will start ticking!!!</p>
                        <p>You have to Answer all the question within the allocated time.
                            You can skip any question using the <span className='text-info'>'Skip'</span> button.
                            You can end the exam immediately using the <span className='text-success'>'Finish Exam'</span> button.</p>
                        <p>Proceed to Exam?</p>
                        <button className='btn btn-success me-3 mb-3' onClick={() => navigate(`/exams/${name}`)}>Proceed</button>
                        <button className='btn btn-danger mb-3' onClick={handleClose} >Cancel</button>
                    </div >
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default Test;