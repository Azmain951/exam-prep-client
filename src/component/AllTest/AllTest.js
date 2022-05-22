import React from 'react';
import './AllTest.css'
import { useNavigate } from 'react-router-dom';
import { Offcanvas } from 'react-bootstrap';
import { useState } from 'react';

const AllTest = ({ test }) => {
    const { id, name } = test;
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleTest = e => {
        handleShow()
    }
    return (
        <div className="col-md-3 col-sm-12 mb-4">
            <div onClick={handleTest} className="test-card card border-0 shadow">
                <div className="card-body">
                    <h5 className="text-center card-title">{name}</h5>
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
        </div >
    );
};

export default AllTest;