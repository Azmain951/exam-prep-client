import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Test from '../Test/Test';
import './ModelTest.css';
import { FiArrowRight } from 'react-icons/fi';

const ModelTest = () => {
    const [tests, setTests] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://desolate-wildwood-64014.herokuapp.com/categories')
            .then(res => res.json())
            .then(data => setTests(data));
    }, []);

    const handleTest = e => {
        navigate('/model-test');
    }
    return (
        <div>
            <h3 className="fw-bold mt-5 text-center mx-2">Practice Model Test
                <hr />
            </h3>
            <div className="model-test-container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 py-3 px-4">
                {
                    tests.map(test => <Test key={test._id} test={test}></Test>)
                }
            </div>
            <div className='d-flex justify-content-center'>
                <button onClick={handleTest} className='btn btn-manage border-0 rounded-pill mt-4 px-5 py-2'>All Model Test <FiArrowRight /></button>
            </div>
        </div>
    );
};

export default ModelTest;